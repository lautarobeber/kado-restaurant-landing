import { motion } from 'framer-motion'
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from '../lib/animations'
import { bentoDishes } from '../data/menuData'

export default function SignatureDishes() {
  const [first, ...rest] = bentoDishes

  return (
    <section className="bg-cream-100 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <motion.p variants={fadeUp} className="section-eyebrow">
              Platos insignia
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-5 max-w-xl font-display text-3xl font-semibold uppercase leading-tight text-charcoal sm:text-4xl md:text-5xl"
            >
              Platos insignia para cada ocasión.
            </motion.h2>
          </div>
          <motion.a
            variants={fadeUp}
            href="#contacto"
            className="w-fit rounded-full border border-charcoal/20 px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-charcoal transition-colors hover:border-gold hover:text-gold"
          >
            Ver carta completa
          </motion.a>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:[grid-template-rows:repeat(2,minmax(220px,1fr))]"
        >
          <motion.div
            variants={scaleIn}
            className="group relative overflow-hidden rounded-2xl shadow-card lg:row-span-2"
          >
            <BentoTile dish={first} tall />
          </motion.div>

          {rest.map((dish) => (
            <motion.div
              key={dish.id}
              variants={scaleIn}
              className="group relative overflow-hidden rounded-2xl shadow-card"
            >
              <BentoTile dish={dish} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function BentoTile({ dish, tall = false }) {
  return (
    <div className={`relative h-full w-full ${tall ? 'min-h-[320px]' : 'min-h-[220px]'}`}>
      <img
        src={dish.img}
        alt={dish.name}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
        <h3 className="font-display text-base font-medium leading-snug text-cream-100 sm:text-lg">
          {dish.name}
        </h3>
        <span className="whitespace-nowrap rounded-full bg-cream-100/95 px-3 py-1 font-body text-sm font-semibold text-charcoal">
          ${dish.price}
        </span>
      </div>
    </div>
  )
}
