import type { Metadata } from 'next'
import './globals.css'
import { Roboto, Montserrat } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Providers from '@/lib/providers'
import AppProvider from './AppProvider'
import { cookies } from 'next/headers'
import { CartProvider } from '@/context/CartContext'
// import { Header } from '@/components/header-top'

const roboto = Roboto({
  subsets: ['vietnamese'],
  weight: ['300', '400', '500', '700']
})

const montserrat = Montserrat({
  subsets: ['vietnamese'],
  weight: ['300', '400', '500', '700']
})

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
    <html lang='vi'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
      </head>
      {/* <body className={montserrat.className}> */}
      <body className={montserrat.className}>
        <Providers>
          <CartProvider>
            {/* Bao bọc ứng dụng bằng CartProvider */}
            <Header />
            <AppProvider initialSessionToken={sessionToken}>
              {children}
            </AppProvider>
            <Footer />
          </CartProvider>
        </Providers>
      </body>
    </html>
  )
}
