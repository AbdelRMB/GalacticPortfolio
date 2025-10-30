interface Technology {
  name: string;
  level: number;
  category: 'language' | 'framework' | 'tool' | 'database';
}

const technologies: Technology[] = [
  { name: 'JavaScript', level: 90, category: 'language' },
  { name: 'TypeScript', level: 85, category: 'language' },
  { name: 'Python', level: 80, category: 'language' },
  { name: 'Java', level: 75, category: 'language' },
  { name: 'PHP', level: 70, category: 'language' },
  { name: 'C', level: 65, category: 'language' },
  { name: 'React', level: 90, category: 'framework' },
  { name: 'Node.js', level: 85, category: 'framework' },
  { name: 'Vue.js', level: 75, category: 'framework' },
  { name: 'Next.js', level: 80, category: 'framework' },
  { name: 'Express', level: 85, category: 'framework' },
  { name: 'TailwindCSS', level: 90, category: 'framework' },
  { name: 'Git', level: 85, category: 'tool' },
  { name: 'Docker', level: 75, category: 'tool' },
  { name: 'Figma', level: 70, category: 'tool' },
  { name: 'VS Code', level: 90, category: 'tool' },
  { name: 'Postman', level: 80, category: 'tool' },
  { name: 'MySQL', level: 85, category: 'database' },
  { name: 'PostgreSQL', level: 80, category: 'database' },
  { name: 'MongoDB', level: 75, category: 'database' },
  { name: 'Redis', level: 70, category: 'database' },
];

const categories = {
  language: { title: 'Langages', color: 'from-blue-500 to-cyan-500' },
  framework: { title: 'Frameworks & Librairies', color: 'from-cyan-500 to-teal-500' },
  tool: { title: 'Outils', color: 'from-teal-500 to-green-500' },
  database: { title: 'Bases de Données', color: 'from-green-500 to-emerald-500' },
};

export function Languages() {
  return (
    <section id="languages" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Langages & Outils
          </h2>
          <p className="text-white/60 text-lg">Technologies que je maîtrise</p>
        </div>

        <div className="space-y-12">
          {Object.entries(categories).map(([key, { title, color }], catIndex) => {
            const items = technologies.filter((tech) => tech.category === key);
            return (
              <div
                key={key}
                className="animate-float"
                style={{ animationDelay: `${catIndex * 0.2}s` }}
              >
                <h3
                  className={`text-2xl font-bold mb-6 bg-gradient-to-r ${color} bg-clip-text text-transparent`}
                >
                  {title}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {items.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-white font-semibold text-lg">
                          {tech.name}
                        </span>
                        <span className="text-white/60">{tech.level}%</span>
                      </div>

                      <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${color} rounded-full transition-all duration-1000 group-hover:shadow-lg`}
                          style={{
                            width: `${tech.level}%`,
                            boxShadow: `0 0 20px rgba(59, 130, 246, 0.5)`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
