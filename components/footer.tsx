export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-[#0b0b0b] py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-medium">LuxVerse</h3>
            <p className="text-sm text-white/60">
              Where luxury meets digital. Experience the pinnacle of craftsmanship and exclusivity.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-wider">Collections</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="#" className="transition-colors hover:text-[#bfa77f]">
                  Leather
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#bfa77f]">
                  Fragrances
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#bfa77f]">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#bfa77f]">
                  Limited Editions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="#" className="transition-colors hover:text-[#bfa77f]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#bfa77f]">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#bfa77f]">
                  Craftsmanship
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#bfa77f]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="#" className="transition-colors hover:text-[#bfa77f]">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#bfa77f]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#bfa77f]">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-[#bfa77f]">
                  Returns & Exchanges
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-8 md:flex-row">
          <p className="mb-4 text-sm text-white/60 md:mb-0">&copy; {currentYear} WHOZAIFA. All rights reserved.</p>

          <div className="flex space-x-6">
            <a href="#" className="text-white/60 transition-colors hover:text-[#bfa77f]">
              Instagram
            </a>
            <a href="#" className="text-white/60 transition-colors hover:text-[#bfa77f]">
              Twitter
            </a>
            <a href="#" className="text-white/60 transition-colors hover:text-[#bfa77f]">
              Facebook
            </a>
            <a href="#" className="text-white/60 transition-colors hover:text-[#bfa77f]">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
