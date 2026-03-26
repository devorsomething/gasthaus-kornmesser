'use client'

import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Reservierungsanfrage gesendet! Wir melden uns kurzfristig bei Ihnen.')
    setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: '2', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <main className="min-h-screen">
      {/* ═══════════════════════════════════════════ HERO ═══════════════════════════════════════════ */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/60 via-charcoal-900/40 to-charcoal-900/70" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <div className="gold-divider" />
          </div>
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 hero-text-shadow">
            Gasthaus Kornmesser
          </h1>
          <p className="font-playfair text-xl md:text-2xl lg:text-3xl text-cream-200 italic mb-8 hero-text-shadow">
            Gehobene Küche · Klassische Werte
          </p>
          <p className="text-cream-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Österreichische Fine-Dining-Kultur inmitten von Bregenz – wo Gemütlichkeit 
            auf kulinarische Exzellenz trifft.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#reservierung"
              className="inline-block bg-burgundy-600 hover:bg-burgundy-700 text-white font-semibold px-8 py-4 rounded transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Tisch reservieren
            </a>
            <a 
              href="#speisekarte"
              className="inline-block bg-transparent border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-charcoal-800 font-semibold px-8 py-4 rounded transition-all duration-300"
            >
              Speisekarte entdecken
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-cream-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ INFO STRIP ═══════════════════════════════════════════ */}
      <section className="bg-burgundy-600 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-cream-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Kornmarktstr. 5, 6900 Bregenz</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+43 5574 00000</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Di–So: 18:00 – 23:00 Uhr</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ WILLKOMMEN ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-32 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold-500 rounded-lg" />
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
                alt="Eleganter Restaurant-Innenraum"
                className="relative rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="gold-divider" />
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal-800">
                Willkommen im Kornmesser
              </h2>
              <p className="text-charcoal-500 text-lg leading-relaxed">
                Im Herzen von Bregenz, nur wenige Schritte vom Kornmarkt entfernt, 
                empfängt Sie unser Gasthaus mit einer Philosophie: beste österreichische 
                Produkte, meisterhaft zubereitet.
              </p>
              <p className="text-charcoal-500 text-lg leading-relaxed">
                Unser Küchenteam verbindet klassische Rezepturen mit modernen Techniken – 
                traditionelles Wiener Schnitzel neben innovativen Kreationen, erlesene 
                Weine aus österreichischen Top-Regionen im Einklang mit saisonalen Zutaten.
              </p>
              <p className="text-charcoal-500 text-lg leading-relaxed">
                Ob auf unserer beheizten Terrasse unter freiem Himmel oder im eleganten 
                Gastraum – erleben Sie Gemütlichkeit auf höchstem Niveau.
              </p>
              <div className="pt-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[1,2,3,4].map(i => (
                      <svg key={i} className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span className="text-charcoal-500">4.2 auf Yelp (21 Bewertungen)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ SPEISEKARTE ═══════════════════════════════════════════ */}
      <section id="speisekarte" className="py-20 lg:py-32 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
              Unsere Speisekarte
            </h2>
            <p className="text-cream-300 text-lg max-w-2xl mx-auto">
              Saisonal inspiriert, klassisch österreichisch – mit Zutaten von höchster Qualität
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Vorspeisen */}
            <div className="bg-charcoal-700 rounded-lg p-8 hover:bg-charcoal-600 transition-colors">
              <h3 className="font-playfair text-2xl text-gold-500 mb-6 pb-3 border-b border-gold-500/30">
                Vorspeisen
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-cream-100 font-medium">Wiener Saure Suppn</p>
                    <p className="text-cream-300 text-sm">mit Schnittlauch-Einlage</p>
                  </div>
                  <p className="text-gold-500 font-semibold">€12</p>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-cream-100 font-medium">Tiroler Grammelschmalz</p>
                    <p className="text-cream-300 text-sm">mit Bauernbrot & Sprossen</p>
                  </div>
                  <p className="text-gold-500 font-semibold">€14</p>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-cream-100 font-medium">Rindertartar</p>
                    <p className="text-cream-300 text-sm">hausgemacht, mit Wachtelei</p>
                  </div>
                  <p className="text-gold-500 font-semibold">€18</p>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-cream-100 font-medium">Kürbiscremesuppe</p>
                    <p className="text-cream-300 text-sm">mit Kernöl & Kürbiskernen</p>
                  </div>
                  <p className="text-gold-500 font-semibold">€13</p>
                </div>
              </div>
            </div>

            {/* Hauptspeisen */}
            <div className="bg-burgundy-600 rounded-lg p-8 hover:bg-burgundy-500 transition-colors">
              <h3 className="font-playfair text-2xl text-gold-400 mb-6 pb-3 border-b border-gold-400/30">
                Hauptspeisen
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-cream-100 font-medium">Wiener Schnitzel</p>
                    <p className="text-cream-200 text-sm">vom Kalb, klassisch paniert</p>
                  </div>
                  <p className="text-gold-400 font-semibold">€36</p>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-cream-100 font-medium">Geschmorte Rinderbacke</p>
                    <p className="text-cream-200 text-sm">Rotweinsoße, Spätzle, Gemüse</p>
                  </div>
                  <p className="text-gold-400 font-semibold">€32</p>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-cream-100 font-medium">Konrad Ente</p>
                    <p className="text-cream-200 text-sm">knusprig, mit Maronen & Rotkohl</p>
                  </div>
                  <p className="text-gold-400 font-semibold">€34</p>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-cream-100 font-medium">Zwiebelrostbraten</p>
                    <p className="text-cream-200 text-sm">Burgunderzwiebeln, Rösti</p>
                  </div>
                  <p className="text-gold-400 font-semibold">€38</p>
                </div>
              </div>
            </div>

            {/* Fisch */}
            <div className="bg-charcoal-700 rounded-lg p-8 hover:bg-charcoal-600 transition-colors">
              <h3 className="font-playfair text-2xl text-gold-500 mb-6 pb-3 border-b border-gold-500/30">
                Fisch & Meeresfrüchte
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-cream-100 font-medium">Gebratenes Saiblingsfilet</p>
                    <p className="text-cream-300 text-sm">Bregenzerwache, Zitronen-Dill</p>
                  </div>
                  <p className="text-gold-500 font-semibold">€32</p>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-cream-100 font-medium">Zander auf Steinpilzrisotto</p>
                    <p className="text-cream-300 text-sm">Trüffelöl, microgreens</p>
                  </div>
                  <p className="text-gold-500 font-semibold">€36</p>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-cream-100 font-medium">Forelle Müllerin</p>
                    <p className="text-cream-300 text-sm">mit Mandelbutter & Petersilienkartoffeln</p>
                  </div>
                  <p className="text-gold-500 font-semibold">€28</p>
                </div>
              </div>
            </div>

            {/* Dessert */}
            <div className="bg-charcoal-700 rounded-lg p-8 hover:bg-charcoal-600 transition-colors">
              <h3 className="font-playfair text-2xl text-gold-500 mb-6 pb-3 border-b border-gold-500/30">
                Dessert
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-cream-100 font-medium">Mohnpalatschinken</p>
                    <p className="text-cream-300 text-sm">mit Vanilleeis & Zwetschgenröster</p>
                  </div>
                  <p className="text-gold-500 font-semibold">€12</p>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-cream-100 font-medium">Kaiserschmarrn</p>
                    <p className="text-cream-300 text-sm">mit Apfelmus & Sultaninen</p>
                  </div>
                  <p className="text-gold-500 font-semibold">€14</p>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-cream-100 font-medium">Schokoladenfondant</p>
                    <p className="text-cream-300 text-sm">mit flüssigem Kern & Sauerrahm</p>
                  </div>
                  <p className="text-gold-500 font-semibold">€13</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-cream-300 mt-10 text-sm">
            Alle Gerichte auch in halben Portionen verfügbar. Allergien & Unverträglichkeiten bitte vorab angeben.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ WEINKARTE ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-32 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="gold-divider" />
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal-800">
                Erlesene Weine
              </h2>
              <p className="text-charcoal-500 text-lg leading-relaxed">
                Unsere Weinkarte umfasst über 120 Positionen aus den besten 
                österreichischen Weinregionen – von der Wachau über die Steiermark 
                bis nach Vorarlberg.
              </p>
              <p className="text-charcoal-500 text-lg leading-relaxed">
                Unser Sommelier berät Sie gerne bei der Auswahl des perfekten 
                Weins zu Ihrem Gericht – ob klassischer Grüner Veltliner, 
                eleganter Riesling oder kräftiger Blaufränkisch.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <p className="text-burgundy-600 font-semibold mb-2">Weißwein ab</p>
                  <p className="font-playfair text-3xl text-charcoal-800">€8<span className="text-lg">/Glas</span></p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <p className="text-burgundy-600 font-semibold mb-2">Rotwein ab</p>
                  <p className="font-playfair text-3xl text-charcoal-800">€10<span className="text-lg">/Glas</span></p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <img 
                src="https://images.unsplash.com/photo-1474722883778-792e7990302f?q=80&w=2000&auto=format&fit=crop"
                alt="Weinauswahl"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-burgundy-600 text-white p-6 rounded-lg shadow-xl">
                <p className="font-playfair text-xl">Sommelier-Empfehlung</p>
                <p className="text-cream-200 text-sm mt-1">2019 Smaragd – Loimer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ AMBIANCE ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-32 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
              Atmosphäre & Ambiente
            </h2>
            <p className="text-cream-300 text-lg max-w-2xl mx-auto">
              Mehr als nur ein Restaurant – ein Ort für unvergessliche Momente
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=2070&auto=format&fit=crop"
                alt="Candlelight Dinner"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-playfair text-xl text-white mb-2">Kerzenlicht & Genuss</h3>
                <p className="text-cream-300 text-sm">Romantische Abende zu zweit</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=2074&auto=format&fit=crop"
                alt="Terrasse"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-playfair text-xl text-white mb-2">Terrasse am Kornmarkt</h3>
                <p className="text-cream-300 text-sm">Genießen Sie unter freiem Himmel</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?q=80&w=2070&auto=format&fit=crop"
                alt="Eleganter Gastraum"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-playfair text-xl text-white mb-2">Klassischer Gastraum</h3>
                <p className="text-cream-300 text-sm">Warme Holzakzente & Gemütlichkeit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ RESERVIERUNG ═══════════════════════════════════════════ */}
      <section id="reservierung" className="py-20 lg:py-32 bg-burgundy-600">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
              Tischreservierung
            </h2>
            <p className="text-cream-200 text-lg">
              Sichern Sie sich Ihren Platz für einen unvergesslichen Abend
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 lg:p-12 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-charcoal-700 font-medium mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-charcoal-200 rounded focus:outline-none focus:border-burgundy-500 focus:ring-1 focus:ring-burgundy-500 transition-colors"
                  placeholder="Ihr vollständiger Name"
                />
              </div>
              <div>
                <label className="block text-charcoal-700 font-medium mb-2">E-Mail *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-charcoal-200 rounded focus:outline-none focus:border-burgundy-500 focus:ring-1 focus:ring-burgundy-500 transition-colors"
                  placeholder="ihre@email.at"
                />
              </div>
              <div>
                <label className="block text-charcoal-700 font-medium mb-2">Telefon</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-charcoal-200 rounded focus:outline-none focus:border-burgundy-500 focus:ring-1 focus:ring-burgundy-500 transition-colors"
                  placeholder="+43 5574 00000"
                />
              </div>
              <div>
                <label className="block text-charcoal-700 font-medium mb-2">Personen *</label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-charcoal-200 rounded focus:outline-none focus:border-burgundy-500 focus:ring-1 focus:ring-burgundy-500 transition-colors bg-white"
                >
                  {[1,2,3,4,5,6,7,8].map(n => (
                    <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'Personen'}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-charcoal-700 font-medium mb-2">Datum *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-charcoal-200 rounded focus:outline-none focus:border-burgundy-500 focus:ring-1 focus:ring-burgundy-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-charcoal-700 font-medium mb-2">Uhrzeit *</label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-charcoal-200 rounded focus:outline-none focus:border-burgundy-500 focus:ring-1 focus:ring-burgundy-500 transition-colors bg-white"
                >
                  <option value="">Bitte wählen</option>
                  <option value="18:00">18:00 Uhr</option>
                  <option value="18:30">18:30 Uhr</option>
                  <option value="19:00">19:00 Uhr</option>
                  <option value="19:30">19:30 Uhr</option>
                  <option value="20:00">20:00 Uhr</option>
                  <option value="20:30">20:30 Uhr</option>
                  <option value="21:00">21:00 Uhr</option>
                  <option value="21:30">21:30 Uhr</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-charcoal-700 font-medium mb-2">Besondere Wünsche</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 border border-charcoal-200 rounded focus:outline-none focus:border-burgundy-500 focus:ring-1 focus:ring-burgundy-500 transition-colors resize-none"
                placeholder="Allergien, besondere Anlässe, Sitzplatzwünsche..."
              />
            </div>
            <div className="mt-8 text-center">
              <button
                type="submit"
                className="bg-burgundy-600 hover:bg-burgundy-700 text-white font-semibold px-12 py-4 rounded transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Reservierung anfragen
              </button>
              <p className="text-charcoal-400 text-sm mt-4">
                Wir bestätigen Ihre Reservierung innerhalb von 24 Stunden per E-Mail
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ BEWERTUNGEN ═══════════════════════════════════════════ */}
      <section className="py-20 lg:py-32 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal-800 mb-4">
              Das sagen unsere Gäste
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[1,2,3,4].map(i => (
                  <svg key={i} className="w-6 h-6 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg className="w-6 h-6 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="text-charcoal-500">4.2 / 5 auf Yelp</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-charcoal-600 italic mb-6">
                "Das Wiener Schnitzel war das beste, das ich je gegessen habe! 
                Die Atmosphäre ist gemütlich und elegant zugleich. Wir kommen definitiv wieder."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-burgundy-100 rounded-full flex items-center justify-center">
                  <span className="text-burgundy-600 font-semibold">MK</span>
                </div>
                <div>
                  <p className="font-semibold text-charcoal-800">Maria K.</p>
                  <p className="text-charcoal-400 text-sm">Lustenau</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4].map(i => (
                  <svg key={i} className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-charcoal-600 italic mb-6">
                "Perfekt für unseren Hochzeitstag! Die Terrasse am Abend, der exzellente 
                Service und das fantastische Essen machten es zu einem unvergesslichen Abend."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-burgundy-100 rounded-full flex items-center justify-center">
                  <span className="text-burgundy-600 font-semibold">TH</span>
                </div>
                <div>
                  <p className="font-semibold text-charcoal-800">Thomas & Heidi</p>
                  <p className="text-charcoal-400 text-sm">Dornbirn</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-5 h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-charcoal-600 italic mb-6">
                "Die Weinkarte ist beeindruckend und der Sommelier hat uns großartig beraten. 
                Das Zanderfilet war brillant. Very recommendable!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-burgundy-100 rounded-full flex items-center justify-center">
                  <span className="text-burgundy-600 font-semibold">PS</span>
                </div>
                <div>
                  <p className="font-semibold text-charcoal-800">Peter S.</p>
                  <p className="text-charcoal-400 text-sm">München, DE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ LOCATION & KONTAKT ═══════════════════════════════════════════ */}
      <section id="kontakt" className="py-20 lg:py-32 bg-charcoal-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="gold-divider mx-auto mb-6" />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
              Finden Sie uns
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-charcoal-700 rounded-lg overflow-hidden h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2686.8449827767747!2d9.74714!3d47.50497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b117111111111%3A0x1111111111111111!2sKornmarktstr.%205%2C%206900%20Bregenz!5e0!3m2!1sde!2sat!4v1700000000000!5m2!1sde!2sat"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gasthaus Kornmesser auf der Karte"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-playfair text-2xl text-gold-500 mb-4">Adresse</h3>
                <p className="text-cream-100 text-lg">
                  Gasthaus Kornmesser<br />
                  Kornmarktstr. 5<br />
                  6900 Bregenz<br />
                  Österreich
                </p>
              </div>

              <div>
                <h3 className="font-playfair text-2xl text-gold-500 mb-4">Öffnungszeiten</h3>
                <div className="space-y-2 text-cream-100">
                  <div className="flex justify-between">
                    <span>Dienstag – Sonntag</span>
                    <span>18:00 – 23:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Montag</span>
                    <span>Ruhetag</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-playfair text-2xl text-gold-500 mb-4">Kontakt</h3>
                <div className="space-y-3">
                  <a href="tel:+43557400000" className="flex items-center gap-3 text-cream-100 hover:text-gold-500 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+43 5574 00000</span>
                  </a>
                  <a href="mailto:info@gasthaus-kornmesser.at" className="flex items-center gap-3 text-cream-100 hover:text-gold-500 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info@gasthaus-kornmesser.at</span>
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-cream-300 text-sm">
                  Parkmöglichkeiten finden Sie in der Tiefgarage Kornmarkt (2 Min. zu Fuß) 
                  oder am Pfänderbahn-Parkplatz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ FOOTER ═══════════════════════════════════════════ */}
      <footer className="bg-charcoal-900 border-t border-charcoal-700">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <h3 className="font-playfair text-2xl text-white mb-4">Gasthaus Kornmesser</h3>
              <p className="text-cream-300 mb-6 max-w-md">
                Gehobene österreichische Küche inmitten von Bregenz – wo Tradition 
                auf moderne Kulinarik trifft.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-charcoal-700 rounded-full flex items-center justify-center hover:bg-burgundy-600 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-charcoal-700 rounded-full flex items-center justify-center hover:bg-burgundy-600 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Navigation</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-cream-300 hover:text-gold-500 transition-colors">Startseite</a></li>
                <li><a href="#speisekarte" className="text-cream-300 hover:text-gold-500 transition-colors">Speisekarte</a></li>
                <li><a href="#reservierung" className="text-cream-300 hover:text-gold-500 transition-colors">Reservierung</a></li>
                <li><a href="#kontakt" className="text-cream-300 hover:text-gold-500 transition-colors">Kontakt</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-cream-300 hover:text-gold-500 transition-colors">Impressum</a></li>
                <li><a href="#" className="text-cream-300 hover:text-gold-500 transition-colors">Datenschutz</a></li>
                <li><a href="#" className="text-cream-300 hover:text-gold-500 transition-colors">AGB</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-charcoal-700 mt-12 pt-8 text-center">
            <p className="text-cream-400 text-sm">
              © 2026 Gasthaus Kornmesser. Alle Rechte vorbehalten. | 
              <a href="https://github.com/gasthaus-kornmesser/website" className="hover:text-gold-500 ml-1">Website by miro.media</a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
