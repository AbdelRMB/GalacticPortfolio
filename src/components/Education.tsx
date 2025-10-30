import { Timeline } from './Timeline';

const educationData = [
  {
    year: '2023 - 2026',
    title: 'BUT Informatique',
    subtitle: 'IUT de Votre Ville',
    description:
      'Formation complète en développement logiciel, bases de données, réseaux et gestion de projet. Spécialisation en développement web et mobile.',
  },
  {
    year: '2020 - 2023',
    title: 'Baccalauréat Général',
    subtitle: 'Lycée de Votre Ville',
    description:
      'Spécialités Mathématiques et NSI (Numérique et Sciences Informatiques). Mention Très Bien.',
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Mon Parcours Académique
          </h2>
          <p className="text-white/60 text-lg">Formation et diplômes</p>
        </div>

        <Timeline items={educationData} icon="education" />
      </div>
    </section>
  );
}
