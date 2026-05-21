import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import { softSkills, technicalSkills } from '../data/portfolio'

type SkillCardProps = {
  title: string
  skills: string[]
}

function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition dark:border-slate-700 dark:bg-slate-900"
    >
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
      <ul className="mt-4 grid gap-3 text-sm text-slate-700 dark:text-slate-200">
        {skills.map((skill) => (
          <li key={skill} className="rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-800">
            {skill}
          </li>
        ))}
      </ul>
    </motion.article>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <SectionTitle eyebrow="Skills" title="Balanced strengths for people, process, and technology" />
      <div className="grid gap-6 md:grid-cols-2">
        <SkillCard title="Soft Skills" skills={softSkills} />
        <SkillCard title="Technical Skills" skills={technicalSkills} />
      </div>
    </section>
  )
}
