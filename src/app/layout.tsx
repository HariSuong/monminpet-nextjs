import type { Metadata } from 'next'
// import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Providers from '@/lib/providers'
import AppProvider from './AppProvider'
import { cookies } from 'next/headers'
// import { Header } from '@/components/header-top'

// const montserrat = Montserrat({ subsets: ['vietnamese'] })

export const metadata: Metadata = {
  title: 'Monminpet',
  description: 'Gia đình - nơi có những người bạn bốn chân!'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookie = cookies()
  const sessionToken = cookie.get('sessionToken')?.value

  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'
          rel='stylesheet'
        />
      </head>
      {/* <body className={montserrat.className}> */}
      <body>
        <Providers>
          <Header />
          <AppProvider initialSessionToken={sessionToken}>
            {children}
          </AppProvider>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
