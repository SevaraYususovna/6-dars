export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Portfolio</h3>
            <p className="opacity-80">Prompt engineering va AI texnologiyalari bo'yicha professional websaytlar</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Tezkor Havolalar</h3>
            <ul className="space-y-2 opacity-80">
              <li>
                <a href="#about" className="hover:opacity-100 transition-opacity">
                  Men Haqimda
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:opacity-100 transition-opacity">
                  Loyihalarim
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:opacity-100 transition-opacity">
                  Ko'nikmalarim
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-100 transition-opacity">
                  Bog'lanish
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Ijtimoiy Tarmoqlar</h3>
            <ul className="space-y-2 opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center opacity-80">
          <p>&copy; {currentYear} Portfolio. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}
