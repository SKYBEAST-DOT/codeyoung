import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

const contacts = [
  { label: 'Email', value: 'sagar.kumar@email.com', href: 'mailto:sagar.kumar@email.com', icon: Mail },
  { label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210', icon: Phone },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sagarkumar',
    href: 'https://www.linkedin.com/in/',
    icon: ExternalLink,
  },
  {
    label: 'GitHub',
    value: 'github.com/SKYBEAST-DOT',
    href: 'https://github.com/SKYBEAST-DOT',
    icon: ExternalLink,
  },
  { label: 'Location', value: 'India', href: '#', icon: MapPin },
]

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <SectionTitle eyebrow="Contact" title="Let’s connect for opportunities in sales and operations" />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-3">
          {contacts.map((item) => (
            <motion.a
              key={item.label}
              whileHover={{ x: 4 }}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm transition hover:border-sky-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              <item.icon size={16} className="text-sky-600" aria-hidden="true" />
              <span className="font-semibold">{item.label}:</span>
              <span>{item.value}</span>
            </motion.a>
          ))}
        </div>

        <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900" aria-label="Contact form">
          <div className="grid gap-4">
            <label className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
              Name
              <input
                type="text"
                name="name"
                required
                className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-sky-500 transition focus:ring-2 dark:border-slate-600 dark:bg-slate-800"
              />
            </label>
            <label className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
              Email
              <input
                type="email"
                name="email"
                required
                className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-sky-500 transition focus:ring-2 dark:border-slate-600 dark:bg-slate-800"
              />
            </label>
            <label className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
              Message
              <textarea
                name="message"
                rows={4}
                required
                className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-sky-500 transition focus:ring-2 dark:border-slate-600 dark:bg-slate-800"
              />
            </label>
            <button
              type="submit"
              className="inline-flex justify-center rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
