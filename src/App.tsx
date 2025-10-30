import { GalaxyBackground } from './components/GalaxyBackground';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Languages } from './components/Languages';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative">
      <GalaxyBackground />

      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Languages />
        <Footer />
      </div>
    </div>
  );
}

export default App;
