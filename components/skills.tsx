export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "API Design", "Database", "Authentication", "Server Actions"],
    },
    {
      category: "AI & Tools",
      skills: ["Prompt Engineering", "AI SDK", "OpenAI", "LLMs", "Vercel AI"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "Vercel", "VS Code", "Figma", "Docker"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Mening Ko'nikmalarim</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-4 text-primary">{category.category}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
