import { Github, Linkedin, Youtube, Mail, Twitter, BookOpen } from 'lucide-react';
import { Profile } from './components/Profile';
import { Social } from './components/Social';
import { Card } from './components/Card';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Profile
          name="Your Name"
          bio="Welcome to my link hub. Connect with me across different platforms and explore my content."
        />

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
            <span className="w-1 h-8 bg-pink-500 rounded"></span>
            Main Links
          </h2>
          <div className="grid gap-4">
            <Social
              name="YouTube"
              icon={<Youtube className="w-6 h-6 text-white" />}
              url="https://youtube.com/@yourchannel"
              description="Watch my latest videos and tutorials"
            />
            <Social
              name="LinkedIn Newsletter"
              icon={<BookOpen className="w-6 h-6 text-white" />}
              url="https://linkedin.com/newsletters/your-newsletter"
              description="Subscribe to my professional insights and articles"
            />
            <Social
              name="LinkedIn"
              icon={<Linkedin className="w-6 h-6 text-white" />}
              url="https://linkedin.com/in/yourprofile"
              description="Connect with me professionally"
            />
            <Social
              name="GitHub"
              icon={<Github className="w-6 h-6 text-white" />}
              url="https://github.com/yourusername"
              description="Check out my open-source projects"
            />
            <Social
              name="Twitter"
              icon={<Twitter className="w-6 h-6 text-white" />}
              url="https://twitter.com/yourusername"
              description="Follow my thoughts and updates"
            />
            <Social
              name="Email"
              icon={<Mail className="w-6 h-6 text-white" />}
              url="mailto:your@email.com"
              description="Get in touch directly"
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-2">
            <span className="w-1 h-8 bg-pink-500 rounded"></span>
            Featured Content
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card
              name="Latest Video"
              icon={<Youtube className="w-6 h-6 text-white" />}
              url="https://youtube.com/@yourchannel"
            >
              Check out my latest video where I share insights about web development
              and modern technologies.
            </Card>
            <Card
              name="Recent Article"
              icon={<BookOpen className="w-6 h-6 text-white" />}
              url="https://linkedin.com/newsletters/your-newsletter"
            >
              Read my most recent newsletter article about industry trends and
              professional growth.
            </Card>
          </div>
        </section>

        <footer className="text-center pt-8 border-t-2 border-pink-200">
          <p className="text-gray-600">
            Made with React + Vite + Tailwind CSS
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Inspired by open-source templates
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
