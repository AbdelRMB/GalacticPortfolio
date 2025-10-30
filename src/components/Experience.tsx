import { Timeline } from './Timeline';

const experienceData = [
  {
    year: 'Été 2024',
    title: 'Stage Développeur Web',
    subtitle: 'Entreprise XYZ',
    description:
      'Développement d\'une application web moderne avec React et Node.js. Mise en place de tests automatisés et amélioration des performances.',
  },
  {
    year: '2023 - 2024',
    title: 'Projet Tuteuré',
    subtitle: 'IUT - Client Réel',
    description:
      'Création d\'une plateforme de gestion pour une association locale. Travail en équipe Agile avec livraisons régulières.',
  },
  {
    year: 'Été 2023',
    title: 'Développeur Junior',
    subtitle: 'Freelance',
    description:
      'Développement de sites web pour des petites entreprises locales. Gestion complète des projets de la conception au déploiement.',
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
