import { Timeline } from './Timeline';

const experienceData = [
  {
    year: 'Jul 2024 - Août 2024',
    title: 'Développeur WEB/DevOps',
    subtitle: 'Alternance - Still-Link - Tremblay-en-France',
    description:
      'Développeur en Alternance Chez Still-Link pour ma troisième année de BUT informatique. Maintenance de sites internet. Optimisation de sites Internet. Création et développement de CRM. Gestion des automatisations via N8N. Maintenance de Server VPS.',
  },
  {
    year: 'Avr 2025 - Juin 2025',
    title: 'Développeur WEB',
    subtitle: 'Stage - Still-Link - Tremblay-en-France',
    description:
      'Stage développement WEB dans le cadre de mes études en BUT informatique 2. Création de site internet dynamique avec base de donnée. Création de module permettant la gestion d\'entreprise. Manipulation et mise en place d\'automatisation via N8N.',
  },
  {
    year: 'Jul 2024 - Août 2024',
    title: 'Développeur Web/IA',
    subtitle: 'CDD - I-Oasis - Villeneuve-Saint-Georges',
    description:
      'CDD en tant que Développeur IA et WEB au sein de l\'entreprise I-Oasis. Maintenance d\'application WEB. Optimisation d\'application WEB. Implémentation de donnée Dynamique pour IA. Création d\'un bot IA v1.',
  },
  {
    year: 'Avr 2024 - Juin 2024',
    title: 'Développeur Web',
    subtitle: 'Stage - Iffen Formation - Villeneuve-Saint-Georges',
    description:
      'Stage Développeur Web dans le cadre de mes étude en BUT informatique 2. Création d\'un outil de conversion de fichiers. Maintenance de site internet. Optimisation de site internet',
  },
  {
    year: '2022 - 2025',
    title: 'Chef de poste Coordinateur dégivrage',
    subtitle: 'Intérim - Aéroport Paris Roissy Charles de Gaulle',
    description:
      'Chef de poste coordinateur dégivrage à l\'aéroport Roissy CDG. Direction des opération de dégivrage sur Aéronefs. Coordination et Gestion d\'équipe. Application de protocole spécifique. Gestion et organisation.',
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Expériences Professionnelles
          </h2>
          <p className="text-white/60 text-lg">Mon parcours professionnel</p>
        </div>

        <Timeline items={experienceData} icon="experience" />
      </div>
    </section>
  );
}
