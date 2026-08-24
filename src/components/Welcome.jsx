import { motion } from 'framer-motion'
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from '../lib/animations'
import { galleryStrip } from '../data/menuData'

export default function Welcome() {
  return (
    <section id="nosotros" className="bg-cream-100 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-10 md:grid-cols-2 md:gap-16"
        >
          <motion.p variants={fadeUp} className="section-eyebrow md:hidden">
            Bienvenido a Kadō
          </motion.p>

          <motion.div variants={fadeUp}>
            <p className="section-eyebrow hidden md:inline-flex">Bienvenido a Kadō</p>
            <h2 className="mt-5 font-display text-3xl font-semibold uppercase leading-tight text-charcoal sm:text-4xl md:text-5xl">
              Platos de temporada elaborados con pasión y los ingredientes
              más frescos.
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col justify-center gap-6">
            <p className="font-body text-base leading-relaxed text-charcoal/70 md:text-lg">
              Unimos sabores audaces con una hospitalidad cálida. Desde cortes
              selectos hasta especialidades de temporada, cada bocado en
              Kadō está pensado para contar una historia: la del productor,
              la del ingrediente y la de la mesa que lo comparte.
            </p>
            <a
              href="#menu"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-charcoal/20 px-6 py-3 font-body text-sm font-semibold uppercase tracking-wide text-charcoal transition-colors hover:border-gold hover:text-gold"
            >
              Conocer más
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-3 gap-3 md:mt-24 md:grid-cols-6 md:gap-4"
        >
          {galleryStrip.map((img, i) => (
            <motion.div
              key={img.alt}
              variants={scaleIn}
              className={`overflow-hidden rounded-2xl shadow-card ${
                i === 3 ? 'col-span-2 row-span-2 md:col-span-1' : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
