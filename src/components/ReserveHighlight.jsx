import { motion } from 'framer-motion'
import { Quote, Star, Wine } from 'lucide-react'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/animations'
import { testimonialCards } from '../data/menuData'

const TONE_STYLES = {
  blush: 'bg-blush',
  mint: 'bg-mint',
}

export default function ReserveHighlight() {
  return (
    <section className="bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-14 max-w-2xl md:mb-20"
        >
          <motion.p variants={fadeUp} className="section-eyebrow">
            Maridajes recomendados
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-5 font-display text-3xl font-semibold uppercase leading-tight text-cream-100 sm:text-4xl md:text-5xl"
          >
            Historias que nacen en cada maridaje.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {testimonialCards.map((card) => (
            <motion.article
              key={card.id}
              variants={fadeUp}
              className={`flex flex-col justify-between gap-7 rounded-3xl p-9 shadow-card md:p-11 ${TONE_STYLES[card.tone]}`}
            >
              <div className="flex items-center justify-between">
                <Quote className="text-charcoal/40" size={28} />
                <div className="flex gap-1 text-gold-dark">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
              </div>

              <p className="font-display text-lg leading-relaxed text-charcoal sm:text-xl">
                “{card.quote}”
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-charcoal/10 pt-5">
                <div>
                  <p className="font-body text-sm font-semibold text-charcoal">{card.name}</p>
                  <p className="font-body text-xs text-charcoal/60">{card.role}</p>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-charcoal/90 px-4 py-2 text-cream-100">
                  <Wine size={14} />
                  <span className="font-body text-xs font-medium">{card.dish}</span>
                  <span className="font-body text-xs font-semibold text-gold-light">
                    ${card.price}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
