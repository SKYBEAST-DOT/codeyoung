import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import AchievementsSection from './components/AchievementsSection'
import ResumeSection from './components/ResumeSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((prev) => !prev)} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
