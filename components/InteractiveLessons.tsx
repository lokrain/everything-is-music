'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Lesson {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  topics: string[];
}

const lessons: Lesson[] = [
  {
    id: 'what-is-music',
    title: 'What is Music?',
    description: 'Explore the fundamental building blocks of music: pitch, rhythm, dynamics, and timbre.',
    difficulty: 'Beginner',
    duration: '10 min',
    topics: ['Sound basics', 'Musical elements', 'Active listening']
  },
  {
    id: 'notes-and-pitch',
    title: 'Notes and Pitch',
    description: 'Learn how musical notes work, from low to high, and how they create melodies.',
    difficulty: 'Beginner',
    duration: '15 min',
    topics: ['Musical alphabet', 'Octaves', 'Pitch recognition']
  },
  {
    id: 'rhythm-basics',
    title: 'Understanding Rhythm',
    description: 'Discover how beats, tempo, and time signatures create the pulse of music.',
    difficulty: 'Beginner',
    duration: '15 min',
    topics: ['Beat', 'Tempo', 'Time signatures', 'Note values']
  },
  {
    id: 'scales-intro',
    title: 'Introduction to Scales',
    description: 'Understand how scales organize notes and create the foundation for melodies.',
    difficulty: 'Beginner',
    duration: '20 min',
    topics: ['Major scale', 'Minor scale', 'Scale patterns']
  },
  {
    id: 'chords-harmony',
    title: 'Chords and Harmony',
    description: 'Learn how multiple notes played together create harmony and emotion.',
    difficulty: 'Intermediate',
    duration: '25 min',
    topics: ['Triads', 'Chord progressions', 'Harmonic function']
  },
  {
    id: 'intervals',
    title: 'Musical Intervals',
    description: 'Understand the distance between notes and how intervals create musical color.',
    difficulty: 'Intermediate',
    duration: '20 min',
    topics: ['Interval types', 'Consonance', 'Dissonance']
  }
];

export function InteractiveLessons() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');

  const filteredLessons = selectedDifficulty === 'All' 
    ? lessons 
    : lessons.filter(lesson => lesson.difficulty === selectedDifficulty);

  const difficultyColors = {
    'Beginner': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Intermediate': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    'Advanced': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        <FilterButton 
          label="All Lessons" 
          active={selectedDifficulty === 'All'}
          onClick={() => setSelectedDifficulty('All')}
        />
        <FilterButton 
          label="Beginner" 
          active={selectedDifficulty === 'Beginner'}
          onClick={() => setSelectedDifficulty('Beginner')}
        />
        <FilterButton 
          label="Intermediate" 
          active={selectedDifficulty === 'Intermediate'}
          onClick={() => setSelectedDifficulty('Intermediate')}
        />
        <FilterButton 
          label="Advanced" 
          active={selectedDifficulty === 'Advanced'}
          onClick={() => setSelectedDifficulty('Advanced')}
        />
      </div>

      {/* Lessons grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLessons.map((lesson) => (
          <div 
            key={lesson.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${difficultyColors[lesson.difficulty]}`}>
                  {lesson.difficulty}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {lesson.duration}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{lesson.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                {lesson.description}
              </p>
              
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">
                  Topics covered:
                </p>
                <div className="flex flex-wrap gap-2">
                  {lesson.topics.map((topic, idx) => (
                    <span 
                      key={idx}
                      className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
              
              <Link
                href={`/lessons/${lesson.id}`}
                className="inline-block w-full text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition-colors"
              >
                Start Lesson
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredLessons.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No lessons found for this difficulty level.
        </div>
      )}
    </div>
  );
}

interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

function FilterButton({ label, active, onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-2 rounded-lg font-semibold transition-colors
        focus:outline-none focus:ring-2 focus:ring-purple-500
        ${active 
          ? 'bg-purple-600 text-white' 
          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
        }
      `}
    >
      {label}
    </button>
  );
}
