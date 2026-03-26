import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gasthaus Kornmesser | Gehobene Küche in Bregenz',
  description: 'Gasthaus Kornmesser – Gehobene österreichische Küche in Bregenz am Kornmarkt. Reservieren Sie Ihren Tisch für ein unvergessliches Dining-Erlebnis.',
  keywords: 'Gasthaus Kornmesser, Restaurant Bregenz, österreichische Küche, feines Essen Bregenz, Kornmarkt Restaurant',
  openGraph: {
    title: 'Gasthaus Kornmesser | Gehobene Küche in Bregenz',
    description: 'Gehobene österreichische Küche am Kornmarkt in Bregenz. Reservierungen unter +43 5574 00000',
    type: 'website',
    locale: 'de_AT',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
