import Link from 'next/link';
import { MusicKeyboard } from '@/components/MusicKeyboard';
import { InteractiveLessons } from '@/components/InteractiveLessons';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Everything is Music</h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Making the inner workings of music understandable, accessible, and engaging for everyone
          </p>
        </div>
      </header>

      {/* Mission Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg mb-4 leading-relaxed">
              This platform exists to make the inner workings of music understandable, accessible, 
              and engaging for anyone who feels drawn to it—regardless of background, ability, or 
              prior experience.
            </p>
            <p className="text-lg leading-relaxed">
              We address a growing cultural distance from meaningful listening and music-making, 
              offering a path back to active engagement rather than passive consumption.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Keyboard Demo */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Try It: Interactive Piano</h2>
          <p className="text-center text-lg mb-8 max-w-2xl mx-auto">
            Click on the keys to play notes and begin your musical journey. 
            Each key produces a unique sound that forms the building blocks of music.
          </p>
          <MusicKeyboard />
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Start Learning</h2>
          <InteractiveLessons />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What You'll Learn</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature Cards */}
            <FeatureCard
              title="Music Fundamentals"
              description="Understand notes, scales, and how they form the language of music"
              icon="🎵"
            />
            <FeatureCard
              title="Rhythm & Timing"
              description="Learn to recognize and create rhythmic patterns that bring music to life"
              icon="🥁"
            />
            <FeatureCard
              title="Active Listening"
              description="Develop skills to hear and understand musical elements in any piece"
              icon="👂"
            />
            <FeatureCard
              title="Interactive Practice"
              description="Hands-on tools to experiment with sounds and build muscle memory"
              icon="🎹"
            />
            <FeatureCard
              title="Theory Made Simple"
              description="Complex concepts broken down into accessible, bite-sized lessons"
              icon="📚"
            />
            <FeatureCard
              title="Your Own Pace"
              description="Learn at a speed that works for you, with no prerequisites required"
              icon="⏱️"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Musical Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start with our interactive lessons and discover the joy of understanding music
          </p>
          <Link 
            href="/lessons" 
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Explore Lessons
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            Making music accessible to everyone, everywhere
          </p>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Everything is Music. Open source and free to use.
          </p>
        </div>
      </footer>
    </div>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
