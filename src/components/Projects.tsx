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
    title: 'New BUT',
    description:
      'Développement d\'un site permettant la présentation d\'une nouvelle filière but informatique re réviser et penser afin d\'intégrer les nouveauté technologique et adapté les étude à la progration et l\'innovation du monde de l\'informatique.',
    image: '/newbut.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    competencies: ['Développer', 'Administrer', 'Gérer'],
    demo: 'https://newbut.abdelrahimriche.com',
  },
  {
    title: 'O.R.B.I.T',
    description:
      'Ce projet s’inscrit dans l’univers Star Wars et dans le cadre de la SAÉ Développement d\'une application. L’objectif est d’aider les utilisateurs à optimiser leurs déplacements interplanétaires selon divers critères tels que la légion d\'appartenance (Rebelle, Empire, Neutre), le nombre de passagers ou encore les vaisseaux préférés. Le projet repose sur la modélisation de réseaux galactiques et inclut des fonctionnalités immersives qui respectent l’esthétique et les codes de l’univers Star Wars. L\'objectif principal est de permettre aux utilisateurs de trouver le meilleur itinéraire entre deux points galactiques en tenant compte de divers critères.',
    image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['PHP', 'CSS', 'HTML', 'JavaScript', 'MySQL'],
    competencies: ['Développer', 'Optimiser', 'Collaborer'],
    github: '#',
    // demo: 'https://newbut.abdelrahimriche.com',
  },
  {
    title: 'Wikigame',
    description:
      'WikiGame est un jeu web basé sur Wikipédia. Le but est d’atteindre un article cible en partant d’un article de départ. Pour avancer, on ne peut utiliser que les liens bleus présents dans les pages. Chaque clic est compté, ce qui pousse à trouver le chemin le plus court. Le jeu met en valeur la richesse et la connexion des articles Wikipédia. Il mélange réflexion, stratégie et culture générale. L’interface est développée avec React et TypeScript. Le back-end s’appuie sur Node.js et Express. Un système en WebSocket gère les interactions en temps réel. C’est un projet académique qui illustre mes compétences full-stack.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'TypeScript', 'CSS', 'NodeJS', 'Express', 'WebSocket', 'MongoDB'],
    competencies: ['Développer', 'Optimiser', 'Gérer'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Séville Unesco',
    description:
      'Projet réaliser en première année de BUT informatique en partenariat avec l\'UNESCO visant à mettre en avant le patrimoine mondial de la ville de Séville.',
    image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    competencies: ['Développer', 'Conduire', 'Communiquer'],
    github: '#',
    demo: '#',
  },
  {
    title: 'CRM Still-Link',
    description:
      'Développement d\'un CRM complet permettant la gestion de l\'entreprise Still-Link. Il permet la gestion de factures, devis, contracts et bien autres modules facilitant la gestion d\'entreprise. Il est également doté d\'outil permettant la gestion de client d\'employé et de stock.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'Express', 'MySQL', 'TypeScript', 'Docker', 'N8N'],
    competencies: ['Conduire', 'Gérer', 'Administrer', 'Développer', 'Optimiser', 'Collaborer'],
    github: '#',
    demo: '#',
  },
  {
    title: 'API REST Sécurisée',
    description:
      'Projet réalisé dans le cadre de la SAE 3ème année de BUT informatique visant a permettre aux élève de l\'université de pouvoir s\'inscrire, participé et se rendre à des activités au sein de l\'université.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'JWT', 'JavaScript', 'Node.js', 'Express', 'MySQL'],
    competencies: ['Développer', 'Administrer', 'Optimiser', 'Collaborer'],
    github: '#',
    demo: '#',
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
