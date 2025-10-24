export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Men Haqimda</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/computer-engineering-student-ai-technology.jpg"
              alt="Computer engineering student"
              className="rounded-lg w-full shadow-lg"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-primary/20 to-accent/20 pointer-events-none"></div>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Men computer engineering yo'nalishida o'qiyotgan talabaman. Mening asosiy qiziqishlari - Artificial
              Intelligence, Machine Learning va Web Development. Men har bir loyihada innovation va quality ni birinchi
              o'ringa qo'yaman.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Men Python, JavaScript, TypeScript, React, Next.js va boshqa zamonaviy texnologiyalardan foydalanib
              professional loyihalar yarataman. Mening maqsadim - texnologiya orqali dunyoni o'zgartirish.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mening kuchli tomonlarim: problem-solving, teamwork, va continuous learning. Men har doim yangi
              texnologiyalarni o'rganishga va o'z ko'nikmalarini oshirishga tayyor.
            </p>
            <div className="flex gap-6 pt-4">
              <a
                href="#"
                className="text-primary hover:text-accent transition-colors font-semibold flex items-center gap-2"
              >
                GitHub →
              </a>
              <a
                href="#"
                className="text-primary hover:text-accent transition-colors font-semibold flex items-center gap-2"
              >
                LinkedIn →
              </a>
              <a
                href="#"
                className="text-primary hover:text-accent transition-colors font-semibold flex items-center gap-2"
              >
                Twitter →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
