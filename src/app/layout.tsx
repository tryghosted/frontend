import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import './globals.css'
import Header from './components/header'
import Footer from './components/footer'

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: 'Ghosted AI',
  description: 'Completing the interview feedback loop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👻</text></svg>"></link>
      <body className={roboto_mono.variable}>
        <div className='max-w-6xl mx-auto px-6'>
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
