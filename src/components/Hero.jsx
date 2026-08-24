import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { fadeUp, staggerContainer } from '../lib/animations'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100vh] items-end overflow-hidden bg-charcoal"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2000&auto=format&fit=crop"
          alt="Corte de carne servido con salsa reducida en Kadō"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/25" />
        <div className="absolute inset-0 bg-charcoal/20" />
      </div>

      <motion.div
        variants={staggerContainer(0.15, 0.1)}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-40 md:px-10 md:pb-28"
      >
        <motion.p variants={fadeUp} className="section-eyebrow text-gold-light">
          Cocina de autor &amp; coctelería de firma
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mt-5 max-w-3xl font-display text-4xl font-semibold uppercase leading-[1.05] text-cream-100 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Saboreá los sabores que cuentan una historia
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-lg font-body text-base leading-relaxed text-cream-100/80 md:text-lg"
        >
          Platos hechos a mano y tragos de autor, elaborados con ingredientes
          frescos y servidos con pasión en cada mesa.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
          <a
            href="#contacto"
            className="rounded-full bg-gold px-7 py-3.5 font-body text-sm font-semibold uppercase tracking-wide text-charcoal shadow-card transition-transform hover:-translate-y-0.5 hover:bg-gold-light"
          >
            Reservar mesa
          </a>
          <a
            href="#menu"
            className="rounded-full border border-cream-100/40 px-7 py-3.5 font-body text-sm font-semibold uppercase tracking-wide text-cream-100 transition-colors hover:border-gold hover:text-gold"
          >
            Ver el menú
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#nosotros"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 right-8 z-10 hidden items-center gap-2 text-cream-100/70 md:flex"
      >
        <span className="rotate-90 font-body text-xs uppercase tracking-widest2">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  )
}
