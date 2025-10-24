"use client"

import { useState } from "react"
import FloatingTerms from "./floating-terms"

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "AI-Powered Content Generator",
      description:
        "LLM yordamida mazmun yaratish uchun intelligent tool. Natural language processing va prompt engineering texnikalarini qo'llagan.",
      image: "/ai-content-generation-neural-network.jpg",
      tags: ["Python", "OpenAI", "Next.js", "AI"],
      link: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Machine Learning Model Trainer",
      description: "TensorFlow va scikit-learn yordamida ML modellarini training qilish uchun platform",
      image: "/machine-learning-neural-network-training.jpg",
      tags: ["Python", "TensorFlow", "ML", "Data Science"],
      link: "#",
    },
    {
      id: 3,
      title: "Real-time Analytics Dashboard",
      description:
        "Real-time data visualization va analytics dashboard. WebSocket va D3.js yordamida interactive charts.",
      image: "/analytics-dashboard-visualization.png",
      tags: ["React", "D3.js", "WebSocket", "Node.js"],
      link: "#",
    },
    {
      id: 4,
      title: "Computer Vision Project",
      description: "OpenCV va deep learning yordamida image recognition va object detection loyihasi",
      image: "/computer-vision-object-detection.png",
      tags: ["Python", "OpenCV", "Deep Learning", "CNN"],
      link: "#",
    },
    {
      id: 5,
      title: "Distributed System Simulator",
      description:
        "Distributed computing tushunchalarini o'rganish uchun simulator. Consensus algorithms va load balancing.",
      image: "/distributed-systems-network-architecture.jpg",
      tags: ["Go", "Distributed Systems", "Algorithms"],
      link: "#",
    },
    {
      id: 6,
      title: "Natural Language Processing Tool",
      description: "NLP yordamida text analysis, sentiment analysis va language translation",
      image: "/natural-language-processing.png",
      tags: ["Python", "NLP", "NLTK", "Transformers"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Mening Loyihalarim</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Computer engineering va AI bo'yicha turli xil loyihalar. Har bir loyiha innovation va technical excellence
            ni ko'rsatadi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 ${
                project.featured ? "md:col-span-2 lg:col-span-2" : ""
              }`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden h-48 sm:h-56">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {project.featured && hoveredId === project.id && <FloatingTerms />}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-semibold text-sm"
                >
                  Loyihani Ko'rish
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
