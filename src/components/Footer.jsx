import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { contactInfo } from '../data/menuData'

export default function Footer() {
  return (
    <footer className="bg-charcoal pt-16 pb-8 text-cream-100">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid grid-cols-1 gap-12 border-b border-cream-100/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl font-semibold text-cream-100">
              Kad<span className="text-gold">ō</span>
            </p>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-cream-100/60">
              Cocina de autor y coctelería de firma. Sabores que cuentan una
              historia, servidos con pasión en cada mesa.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram de Kadō"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-100/20 transition-colors hover:border-gold hover:text-gold"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook de Kadō"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-100/20 transition-colors hover:border-gold hover:text-gold"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div>
            <p className="font-body text-sm font-semibold uppercase tracking-widest2 text-gold-light">
              Navegación
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 font-body text-sm text-cream-100/70">
              <li><a href="#inicio" className="hover:text-gold">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-gold">Nosotros</a></li>
              <li><a href="#menu" className="hover:text-gold">Menú</a></li>
              <li><a href="#eventos" className="hover:text-gold">Eventos</a></li>
              <li><a href="#contacto" className="hover:text-gold">Contacto</a></li>
            </ul>
          </div>

          <div>
            <p className="font-body text-sm font-semibold uppercase tracking-widest2 text-gold-light">
              Contacto
            </p>
            <ul className="mt-4 flex flex-col gap-3 font-body text-sm text-cream-100/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                {contactInfo.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-gold" />
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="hover:text-gold">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-gold" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-gold">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-body text-sm font-semibold uppercase tracking-widest2 text-gold-light">
              Horarios
            </p>
            <ul className="mt-4 flex flex-col gap-3 font-body text-sm text-cream-100/70">
              {contactInfo.hours.map((h) => (
                <li key={h.day} className="flex items-start gap-2">
                  <Clock size={16} className="mt-0.5 shrink-0 text-gold" />
                  <span>
                    {h.day}
                    <br />
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="pt-6 text-center font-body text-xs text-cream-100/40">
          © {new Date().getFullYear()} Kadō. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
