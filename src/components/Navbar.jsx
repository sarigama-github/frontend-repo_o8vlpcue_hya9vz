import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { motion } from 'framer-motion'

const navItems = [
  { label: 'Start', href: '#start' },
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Über uns', href: '#ueber-uns' },
  { label: 'Projekte', href: '#projekte' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header 
      initial={{ y: -40, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 border-b ${scrolled ? 'bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-slate-100 shadow-sm' : 'bg-transparent border-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#start" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center">
              <span className="text-yellow-400 font-black">⚡</span>
            </div>
            <span className="text-slate-900 font-semibold tracking-tight">Elektro Meisterbetrieb</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-700 hover:text-slate-900 transition font-medium">
                {item.label}
              </a>
            ))}
            <a href="#kontakt" className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-md shadow-sm hover:bg-slate-800 transition">
              <Phone className="h-4 w-4" /> Jetzt Termin
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-md border border-slate-200" onClick={() => setOpen(!open)} aria-label="Menü">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -8 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="md:hidden pb-4"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-slate-700 hover:text-slate-900 transition font-medium">
                  {item.label}
                </a>
              ))}
              <a href="#kontakt" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-md shadow-sm">
                <Phone className="h-4 w-4" /> Jetzt Termin
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
