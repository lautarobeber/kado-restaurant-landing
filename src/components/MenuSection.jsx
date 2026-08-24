import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/animations'
import { signatureMenu } from '../data/menuData'

export default function MenuSection() {
  return (
    <section id="menu" className="bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-14 max-w-2xl md:mb-20"
        >
          <motion.p variants={fadeUp} className="section-eyebrow">
            Nuestro menú
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-3xl font-semibold uppercase leading-tight text-cream-100 sm:text-4xl md:text-5xl"
          >
            Platos que hacen volver a nuestros comensales.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {signatureMenu.map((dish) => (
            <motion.article
              key={dish.id}
              variants={fadeUp}
              className="group flex flex-col overflow-hidden rounded-2xl bg-charcoal-800 shadow-soft ring-1 ring-cream-100/5 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={dish.img}
                  alt={dish.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {dish.badge && (
                  <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-gold px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-wide text-charcoal shadow-card">
                    <Sparkles size={12} />
                    {dish.badge}
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800/80 via-transparent to-transparent" />
              </div>

              <div className="flex flex-1 flex-col gap-2 p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-medium leading-snug text-cream-100">
                    {dish.name}
                  </h3>
                  <span className="whitespace-nowrap font-body text-lg font-semibold text-gold">
                    ${dish.price}
                  </span>
                </div>
                <p className="font-body text-sm leading-relaxed text-cream-100/60">
                  {dish.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
