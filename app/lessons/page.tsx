import Link from 'next/link';
import { InteractiveLessons } from '@/components/InteractiveLessons';

export default function LessonsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Link 
            href="/"
            className="inline-flex items-center text-white hover:text-gray-200 mb-4"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Interactive Lessons</h1>
          <p className="text-xl max-w-3xl">
            Start your musical journey with our carefully crafted lessons designed for learners at every level
          </p>
        </div>
      </header>

      {/* Lessons Section */}
      <main className="container mx-auto px-4 py-12">
        <InteractiveLessons />
      </main>

      {/* Info Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">How to Use These Lessons</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Each lesson is designed to be completed at your own pace. There are no prerequisites - 
              start wherever you feel most comfortable.
            </p>
            <p>
              <strong>Beginner lessons</strong> introduce fundamental concepts with simple explanations 
              and practical examples.
            </p>
            <p>
              <strong>Intermediate lessons</strong> build on the basics, exploring how musical elements 
              work together.
            </p>
            <p>
              <strong>Advanced lessons</strong> dive deep into complex topics for those ready to expand 
              their understanding.
            </p>
            <p className="pt-4 border-t border-gray-200 dark:border-gray-700">
              💡 <strong>Tip:</strong> Combine these lessons with the interactive piano on the homepage 
              to practice what you learn!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
