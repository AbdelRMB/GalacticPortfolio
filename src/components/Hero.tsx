import { Sparkles, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-float">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mb-8 animate-pulse-glow">
            <Sparkles size={40} className="text-white" />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-float">
          Votre Nom
        </h1>

        <p className="text-xl md:text-2xl text-white/80 mb-4 animate-float" style={{ animationDelay: '0.2s' }}>
          Étudiant en BUT Informatique
        </p>

        <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto animate-float" style={{ animationDelay: '0.4s' }}>
          Passionné par le développement web et les nouvelles technologies.
          Créateur d'expériences digitales innovantes.
        </p>

        <div className="flex flex-wrap gap-4 justify-center animate-float" style={{ animationDelay: '0.6s' }}>
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-white/30 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300"
          >
            Me contacter
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/50" />
        </div>
      </div>
    </section>
  );
}
