import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { projects } from '../data/portfolio'

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <SectionTitle
        eyebrow="Featured Projects"
        title="Practical projects with clear value and outcomes"
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            whileHover={{ y: -5 }}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900"
          >
            <img src={project.image} alt={`${project.title} preview`} className="h-44 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-700 dark:bg-sky-900/40 dark:text-sky-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-700 dark:border-slate-600 dark:text-slate-200"
                >
                  <ExternalLink size={14} /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-sky-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-sky-700"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
