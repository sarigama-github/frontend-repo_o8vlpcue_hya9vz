import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="ueber-uns" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Über uns</h2>
            <p className="mt-3 text-slate-600">Wir sind ein regionaler Meisterbetrieb für Elektrotechnik mit Fokus auf moderne, sichere und effiziente Lösungen – für Privatkunden, Gewerbe und Bauträger.</p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-slate-700">
              <li>• Meistertitel & regelmäßige Fortbildungen</li>
              <li>• Zertifizierungen nach VDE/ÖVE/EN</li>
              <li>• Verlässliche Partner im Handwerk</li>
              <li>• Eigener Notdienst</li>
            </ul>
            <a href="#kontakt" className="mt-6 inline-flex bg-slate-900 text-white px-5 py-3 rounded-md font-semibold hover:bg-slate-800">Mehr erfahren</a>
          </motion.div>
          <div className="relative">
            <motion.img 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1600&auto=format&fit=crop" 
              alt="Teamfoto" 
              className="w-full h-80 object-cover rounded-xl border border-slate-200 shadow" 
            />
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="pointer-events-none absolute -z-10 -bottom-6 -right-6 h-40 w-40 rounded-full bg-cyan-300/20 blur-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
