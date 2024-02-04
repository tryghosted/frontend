import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/header'
import Footer from '@/app/components/footer'
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';

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
      <head>
        <ColorSchemeScript />
      </head>
      <body className={font.className}>
        <MantineProvider
          theme={{ fontFamily: font.style.fontFamily }}
          withGlobalStyles>
          <div className='max-w-6xl mx-auto px-6'>
            <Header />
            {children}
          </div>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  )
}
