import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  competencies: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description:
      'Plateforme de vente en ligne complète avec gestion des stocks, paiements sécurisés et interface administrateur.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    competencies: ['Développer', 'Administrer', 'Gérer'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Application Mobile Fitness',
    description:
      'Application de suivi sportif avec plans d\'entraînement personnalisés, statistiques détaillées et défis communautaires.',
    image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Firebase', 'TypeScript'],
    competencies: ['Développer', 'Optimiser', 'Communiquer'],
    github: '#',
  },
  {
    title: 'Dashboard Analytics',
    description:
      'Tableau de bord interactif pour visualiser et analyser des données en temps réel avec graphiques dynamiques.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
    competencies: ['Développer', 'Optimiser', 'Gérer'],
    demo: '#',
  },
  {
    title: 'Réseau Social Éducatif',
    description:
      'Plateforme collaborative pour étudiants permettant le partage de ressources, forums de discussion et mentorat.',
    image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'Supabase', 'TailwindCSS'],
    competencies: ['Développer', 'Conduire', 'Communiquer'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Outil de Gestion de Projet',
    description:
      'Application de gestion de projet agile avec kanban, planning, gestion des équipes et reporting automatique.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Angular', 'NestJS', 'MySQL'],
    competencies: ['Conduire', 'Gérer', 'Communiquer'],
    github: '#',
  },
  {
    title: 'API REST Sécurisée',
    description:
      'API complète avec authentification JWT, rate limiting, documentation Swagger et tests automatisés.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Express', 'JWT', 'Redis', 'Docker'],
    competencies: ['Développer', 'Administrer', 'Optimiser'],
    github: '#',
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
            Mes Projets
          </h2>
          <p className="text-white/60 text-lg">
            Découvrez mes réalisations et les compétences mises en œuvre
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 animate-float"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4 text-sm">{project.description}</p>

                <div className="mb-4">
                  <div className="text-sm text-white/50 mb-2">Technologies:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-white/50 mb-2">Compétences:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.competencies.map((comp, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-xs text-cyan-300"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors text-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all text-sm"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
