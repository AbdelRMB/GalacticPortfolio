import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { name: 'Accueil', href: '#home' },
  { name: 'Études', href: '#education' },
  { name: 'Expériences', href: '#experience' },
  { name: 'Projets', href: '#projects' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Langages', href: '#languages' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Portfolio
          </a>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-white/80 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
