import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/header'
import Footer from '@/app/components/footer'

const font = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400'], display: 'swap' })

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
      {/* TODO: Add head and favicon element. */}
      <body className={font.className}>
        <div className='max-w-6xl mx-auto px-6'>
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
