import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import { contactInfo } from '../data/menuData'

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Menú', href: '#menu' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-charcoal/90 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-10">
        <a href="#inicio" className="font-display text-2xl font-semibold tracking-wide text-cream-100">
          Kad<span className="text-gold">ō</span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm font-medium uppercase tracking-wide text-cream-100/85 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`https://wa.me/${contactInfo.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-cream-100/25 px-4 py-2.5 text-sm font-medium text-cream-100 transition-colors hover:border-gold hover:text-gold"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <a
            href="#contacto"
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-charcoal shadow-card transition-transform hover:-translate-y-0.5 hover:bg-gold-light"
          >
            Reservar
          </a>
        </div>

        <button
          className="text-cream-100 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú de navegación"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden bg-charcoal lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-body text-base font-medium uppercase tracking-wide text-cream-100/90 hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex gap-3 pb-2">
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-cream-100/25 px-4 py-3 text-sm font-medium text-cream-100"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-full bg-gold px-4 py-3 text-center text-sm font-semibold text-charcoal"
                >
                  Reservar
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
