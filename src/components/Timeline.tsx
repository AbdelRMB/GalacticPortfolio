import { GraduationCap, Briefcase } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
  icon: 'education' | 'experience';
}

export function Timeline({ items, icon }: TimelineProps) {
  const Icon = icon === 'education' ? GraduationCap : Briefcase;

  return (
    <div className="relative">
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-teal-500" />

      <div className="space-y-12">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
              <div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-11 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                style={{
                  animation: `float 6s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="text-blue-400 font-bold mb-2">{item.year}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <div className="text-cyan-400 mb-3">{item.subtitle}</div>
                <p className="text-white/70">{item.description}</p>
              </div>
            </div>

            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/50 animate-pulse-glow">
              <Icon size={28} className="text-white" />
            </div>

            <div className="flex-1" />
          </div>
        ))}
      </div>
    </div>
  );
}
