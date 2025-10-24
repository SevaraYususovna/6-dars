"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
            Salom, Men{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Computer Engineer
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance leading-relaxed">
            AI, Machine Learning va Software Development bo'yicha ixtisoslashgan talaba. Men innovative loyihalar
            yarataman va texnik muammolarni hal qilaman.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all font-semibold"
            >
              Loyihalarni Ko'rish
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-semibold"
            >
              Bog'lanish
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
