import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="kontakt" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Kontakt</h2>
            <p className="mt-2 text-slate-600">Antwort innerhalb von 24 Stunden. Oder rufen Sie uns direkt an.</p>
            <div className="mt-4 space-y-1 text-slate-700">
              <p>Telefon: <a href="tel:+49123456789" className="font-semibold hover:underline">+49 123 456 789</a></p>
              <p>E-Mail: <a href="mailto:kontakt@elektro-meister.de" className="font-semibold hover:underline">kontakt@elektro-meister.de</a></p>
              <p>Öffnungszeiten: Mo–Fr 8–17 Uhr</p>
            </div>
          </div>
          <div>
            <motion.form 
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-600">Name</label>
                  <input type="text" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-500 focus:ring-slate-500" placeholder="Max Mustermann" />
                </div>
                <div>
                  <label className="block text-sm text-slate-600">E-Mail</label>
                  <input type="email" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-500 focus:ring-slate-500" placeholder="max@example.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-slate-600">Telefon</label>
                  <input type="tel" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-500 focus:ring-slate-500" placeholder="+49..." />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-slate-600">Anliegen</label>
                  <textarea rows="4" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-500 focus:ring-slate-500" placeholder="Wie können wir helfen?" />
                </div>
              </div>
              <button type="submit" className="mt-4 inline-flex bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold px-5 py-3 rounded-md shadow">Jetzt Termin anfragen</button>
            </motion.form>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-10"
        >
          <iframe
            title="Standort"
            className="w-full h-64 rounded-xl border border-slate-200"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999320113596!2d2.292292615673608!3d48.8583730086627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUxJzMwLjEiTiAywrAxNSczMi4yIkU!5e0!3m2!1sde!2sde!4v1615555555555!5m2!1sde!2sde"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
}
