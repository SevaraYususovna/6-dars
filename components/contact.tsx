"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Linkedin, Github, Twitter } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Menga Bog'lanish</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Ijtimoiy Tarmoqlar</h3>
            <div className="space-y-4">
              <a
                href="mailto:your@email.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={24} />
                <span>your@email.com</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={24} />
                <span>GitHub</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter size={24} />
                <span>Twitter</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Ismingiz</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Xabar</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Xabar Yuborish
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
