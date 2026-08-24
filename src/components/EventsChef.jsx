import { motion } from 'framer-motion'
import { CalendarDays, ChefHat } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/animations'
import { chefTasting, eventsInfo } from '../data/menuData'

export default function EventsChef() {
  return (
    <section id="eventos" className="bg-cream-100 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          variants={staggerContainer(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 lg:grid-cols-2"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-col justify-between gap-8 rounded-3xl bg-blush p-9 shadow-card md:p-12"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-charcoal/90 text-cream-100">
              <CalendarDays size={20} />
            </div>
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-widest2 text-charcoal/60">
                {eventsInfo.eyebrow}
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold uppercase leading-tight text-charcoal sm:text-3xl md:text-4xl">
                {eventsInfo.heading}
              </h3>
              <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-charcoal/70 md:text-base">
                {eventsInfo.text}
              </p>
            </div>
            <a
              href="#contacto"
              className="w-fit rounded-full bg-charcoal px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-cream-100 transition-colors hover:bg-charcoal-700"
            >
              {eventsInfo.cta}
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="relative flex flex-col justify-between gap-8 overflow-hidden rounded-3xl bg-charcoal p-9 shadow-card md:p-12"
          >
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1400&auto=format&fit=crop"
              alt="Chef preparando el menú de degustación"
              className="absolute inset-0 h-full w-full object-cover opacity-30"
              loading="lazy"
            />
            <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gold text-charcoal">
              <ChefHat size={20} />
            </div>
            <div className="relative">
              <p className="font-body text-xs font-semibold uppercase tracking-widest2 text-gold-light">
                {chefTasting.label}
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold uppercase leading-tight text-cream-100 sm:text-3xl md:text-4xl">
                {chefTasting.heading}
              </h3>
              <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-cream-100/75 md:text-base">
                {chefTasting.text}
              </p>
            </div>
            <div className="relative flex flex-wrap items-center gap-4">
              <a
                href="#contacto"
                className="rounded-full bg-gold px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-charcoal transition-transform hover:-translate-y-0.5 hover:bg-gold-light"
              >
                {chefTasting.cta}
              </a>
              <span className="font-body text-sm font-medium text-cream-100/80">
                Desde <strong className="text-gold-light">${chefTasting.price}</strong> por persona
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
