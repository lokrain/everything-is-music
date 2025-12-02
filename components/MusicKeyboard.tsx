'use client';

import { useState } from 'react';

interface Note {
  name: string;
  frequency: number;
  isBlack?: boolean;
}

const notes: Note[] = [
  { name: 'C4', frequency: 261.63 },
  { name: 'C#4', frequency: 277.18, isBlack: true },
  { name: 'D4', frequency: 293.66 },
  { name: 'D#4', frequency: 311.13, isBlack: true },
  { name: 'E4', frequency: 329.63 },
  { name: 'F4', frequency: 349.23 },
  { name: 'F#4', frequency: 369.99, isBlack: true },
  { name: 'G4', frequency: 392.00 },
  { name: 'G#4', frequency: 415.30, isBlack: true },
  { name: 'A4', frequency: 440.00 },
  { name: 'A#4', frequency: 466.16, isBlack: true },
  { name: 'B4', frequency: 493.88 },
  { name: 'C5', frequency: 523.25 },
];

export function MusicKeyboard() {
  const [activeNote, setActiveNote] = useState<string | null>(null);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  const playNote = (note: Note) => {
    // Initialize AudioContext on first interaction (browser requirement)
    let ctx = audioContext;
    if (!ctx) {
      const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      ctx = new AudioContextClass();
      setAudioContext(ctx);
    }

    setActiveNote(note.name);

    // Create oscillator for the note
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.frequency.value = note.frequency;
    oscillator.type = 'sine';

    // Envelope for smooth sound
    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.01);
    gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + 0.5);

    // Clear active note after sound ends
    setTimeout(() => setActiveNote(null), 500);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {activeNote ? `Playing: ${activeNote}` : 'Click a key to play'}
        </p>
      </div>
      
      <div className="relative inline-block bg-gray-800 p-4 rounded-lg shadow-2xl">
        <div className="flex relative">
          {/* White keys */}
          {notes.filter(n => !n.isBlack).map((note) => (
            <button
              key={note.name}
              onClick={() => playNote(note)}
              className={`
                relative w-16 h-48 bg-white border-2 border-gray-300 rounded-b-lg
                hover:bg-gray-100 active:bg-gray-200 transition-colors
                focus:outline-none focus:ring-2 focus:ring-purple-500
                ${activeNote === note.name ? 'bg-gray-200' : ''}
              `}
              aria-label={`Play note ${note.name}`}
            >
              <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">
                {note.name}
              </span>
            </button>
          ))}
        </div>

        {/* Black keys - positioned absolutely */}
        <div className="absolute top-4 left-4 flex pointer-events-none">
          {notes.map((note, index) => {
            if (!note.isBlack) return null;
            
            // Calculate position based on white key pattern
            const whiteKeysBefore = notes.slice(0, index).filter(n => !n.isBlack).length;
            const leftOffset = whiteKeysBefore * 64 - 24; // 64px white key width, -24px for centering

            return (
              <button
                key={note.name}
                onClick={() => playNote(note)}
                className={`
                  absolute w-12 h-32 bg-gray-900 border-2 border-gray-700 rounded-b-lg
                  hover:bg-gray-800 active:bg-gray-700 transition-colors pointer-events-auto
                  focus:outline-none focus:ring-2 focus:ring-purple-500
                  ${activeNote === note.name ? 'bg-gray-700' : ''}
                `}
                style={{ left: `${leftOffset}px` }}
                aria-label={`Play note ${note.name}`}
              >
                <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-white">
                  {note.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 max-w-2xl text-center">
        <h3 className="text-lg font-semibold mb-2">Understanding the Keyboard</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          This keyboard shows one octave plus one note. The white keys represent natural notes (C, D, E, F, G, A, B), 
          while the black keys are sharp/flat notes. The pattern repeats across the entire keyboard, 
          making it easier to learn and play music once you understand this basic structure.
        </p>
      </div>
    </div>
  );
}
