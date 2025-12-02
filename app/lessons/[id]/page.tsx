import Link from 'next/link';
import { notFound } from 'next/navigation';

interface LessonContent {
  id: string;
  title: string;
  description: string;
  content: {
    section: string;
    text: string;
  }[];
}

const lessonsContent: Record<string, LessonContent> = {
  'what-is-music': {
    id: 'what-is-music',
    title: 'What is Music?',
    description: 'Explore the fundamental building blocks of music',
    content: [
      {
        section: 'Introduction',
        text: 'Music is organized sound. It\'s a universal language that communicates emotions, tells stories, and brings people together. At its core, music is made up of four fundamental elements that work together to create the sounds we love.'
      },
      {
        section: 'The Four Elements of Music',
        text: '1. **Pitch** - How high or low a sound is. When you sing a melody or play notes on a piano, you\'re working with pitch.\n\n2. **Rhythm** - The timing of sounds. It\'s what makes you want to tap your foot or dance to music.\n\n3. **Dynamics** - How loud or soft the music is. Dynamics add emotion and expression to music.\n\n4. **Timbre** - The unique "color" or quality of a sound. It\'s why a piano sounds different from a guitar, even when playing the same note.'
      },
      {
        section: 'Active Listening Exercise',
        text: 'Next time you listen to a favorite song, try to identify these four elements:\n\n- Can you follow the melody (pitch)?\n- Can you feel the beat (rhythm)?\n- Notice when the music gets louder or softer (dynamics)\n- Listen to the different instruments and their unique sounds (timbre)\n\nThis active listening is the first step toward truly understanding music!'
      }
    ]
  },
  'notes-and-pitch': {
    id: 'notes-and-pitch',
    title: 'Notes and Pitch',
    description: 'Learn how musical notes work and create melodies',
    content: [
      {
        section: 'The Musical Alphabet',
        text: 'Music uses only seven letter names: A, B, C, D, E, F, and G. After G, the pattern repeats. These letters represent the white keys on a piano and are called "natural notes."'
      },
      {
        section: 'Sharps and Flats',
        text: 'Between most natural notes are additional notes called sharps (#) and flats (♭). These represent the black keys on a piano. A sharp raises a note slightly, while a flat lowers it. For example, C# (C sharp) is the same as D♭ (D flat).'
      },
      {
        section: 'Octaves',
        text: 'When you go from one C to the next C (higher or lower), you\'ve moved one octave. The notes have the same name but different pitches. This pattern makes music easier to learn because the same patterns repeat across the keyboard or instrument.'
      },
      {
        section: 'Practice Exercise',
        text: 'Try this: Hum or sing a note, then try to find it on a piano or keyboard (you can use the interactive keyboard on our homepage). Once you find it, play the note one octave higher and one octave lower. Notice how they sound similar but at different pitches!'
      }
    ]
  },
  'rhythm-basics': {
    id: 'rhythm-basics',
    title: 'Understanding Rhythm',
    description: 'Discover how beats and tempo create music\'s pulse',
    content: [
      {
        section: 'The Beat',
        text: 'The beat is the steady pulse you feel in music - it\'s what you naturally tap your foot to. Every song has a beat, and it\'s the foundation that holds all the other musical elements together.'
      },
      {
        section: 'Tempo',
        text: 'Tempo is the speed of the beat. A fast tempo creates exciting, energetic music, while a slow tempo creates calm, relaxed music. Tempo is measured in BPM (beats per minute).'
      },
      {
        section: 'Time Signatures',
        text: 'Time signatures tell you how beats are grouped. The most common is 4/4 (four-four), which means four beats per measure. You count: 1-2-3-4, 1-2-3-4. Other common signatures include 3/4 (waltz time) and 6/8.'
      },
      {
        section: 'Try This',
        text: 'Clap along to a favorite song. Count 1-2-3-4 repeatedly with the music. Once you can feel the beat, try clapping on just the 1 and 3, or just the 2 and 4. This is the beginning of understanding rhythm patterns!'
      }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(lessonsContent).map((id) => ({
    id: id,
  }));
}

export default async function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const lesson = lessonsContent[id];

  if (!lesson) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <Link 
            href="/"
            className="inline-flex items-center text-white hover:text-gray-200 mb-4"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-2">{lesson.title}</h1>
          <p className="text-xl">{lesson.description}</p>
        </div>
      </header>

      {/* Lesson Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          {lesson.content.map((section, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <h2 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                {section.section}
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                {section.text.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {paragraph.split('\n').map((line, lineIdx) => (
                      <span key={lineIdx}>
                        {line}
                        {lineIdx < paragraph.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex justify-between">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg font-semibold transition-colors"
            >
              ← Back to Lessons
            </Link>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors"
            >
              Try Interactive Piano →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
