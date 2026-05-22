import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type SectionTitleProps = {
  eyebrow: string
  title: string
  description?: ReactNode
}

export default function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className="mx-auto mb-10 max-w-3xl text-center"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{description}</p>
      ) : null}
    </motion.div>
  )
}
