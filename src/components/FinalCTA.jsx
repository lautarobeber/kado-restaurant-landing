import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from '../lib/animations'
import { contactInfo } from '../data/menuData'

export default function FinalCTA() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-cream-100 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-center md:gap-10"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl font-semibold uppercase leading-none text-charcoal sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Tu mesa
          </motion.h2>

          <motion.div
            variants={scaleIn}
            className="h-24 w-40 overflow-hidden rounded-2xl shadow-card sm:h-28 sm:w-48 md:h-32 md:w-56"
          >
            <img
              src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=800&auto=format&fit=crop"
              alt="Mesa preparada esperando comensales"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl font-semibold uppercase leading-none text-charcoal sm:text-5xl md:text-6xl lg:text-7xl"
          >
            te está esperando
          </motion.h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-12 flex max-w-xl flex-col items-center gap-6 text-center"
        >
          <p className="font-body text-base leading-relaxed text-charcoal/70 md:text-lg">
            Reservá tu lugar en Kadō y viví una experiencia gastronómica que
            combina tradición, temporada y hospitalidad genuina.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 font-body text-sm font-semibold uppercase tracking-wide text-charcoal shadow-card transition-transform hover:-translate-y-0.5 hover:bg-gold-light"
            >
              <MessageCircle size={17} />
              Pedir por WhatsApp
            </a>
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
              className="rounded-full border border-charcoal/20 px-7 py-3.5 font-body text-sm font-semibold uppercase tracking-wide text-charcoal transition-colors hover:border-gold hover:text-gold"
            >
              Llamar para reservar
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
