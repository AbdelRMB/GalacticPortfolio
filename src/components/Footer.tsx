import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="container mx-auto px-6 z-10 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              Restons en contact
            </h3>
            <p className="text-white/60">
              N'hésitez pas à me contacter pour tout projet ou opportunité
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/AbdelRMB"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdelrahim-riche-504a88256"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:richeabdelrahim1@gmail.com"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p className="flex items-center justify-center gap-2">
            Créé avec <Heart size={16} className="text-red-500 animate-pulse" /> en 2024
          </p>
        </div>
      </div>
    </footer>
  );
}
