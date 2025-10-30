import {
  Database,
  Settings,
  LineChart,
  Rocket,
  MessageSquare,
  GraduationCap,
} from 'lucide-react';

interface Skill {
  name: string;
  icon: any;
  description: string;
  color: string;
}

const skills: Skill[] = [
  {
    name: 'Réaliser',
    icon: Rocket,
    description:
      'Développer des applications informatiques simples et gérer leur déploiement',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Optimiser',
    icon: LineChart,
    description:
      'Appréhender et construire des algorithmes et optimiser les performances',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    name: 'Administrer',
    icon: Database,
    description:
      'Installer et configurer un poste de travail et administrer des systèmes',
    color: 'from-teal-500 to-green-500',
  },
  {
    name: 'Gérer',
    icon: Settings,
    description:
      'Gérer des données de l\'information et concevoir des systèmes d\'information',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Conduire',
    icon: GraduationCap,
    description:
      'Conduire un projet en appliquant les méthodologies agiles',
    color: 'from-emerald-500 to-blue-500',
  },
  {
    name: 'Collaborer',
    icon: MessageSquare,
    description:
      'Travailler en équipe et communiquer efficacement en milieu professionnel',
    color: 'from-blue-500 to-cyan-500',
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Compétences BUT Informatique
          </h2>
          <p className="text-white/60 text-lg">
            Les 6 compétences du référentiel BUT Informatique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 animate-float"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={32} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {skill.name}
                </h3>

                <p className="text-white/70 leading-relaxed">
                  {skill.description}
                </p>

                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
