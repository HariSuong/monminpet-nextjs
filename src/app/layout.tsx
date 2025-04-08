import type { Metadata } from 'next'
import './globals.css'
import { Roboto, Montserrat } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Providers from '@/lib/providers'
import AppProvider from './AppProvider'
import { cookies } from 'next/headers'
import { CartProvider } from '@/context/CartContext'
import { CouponProvider } from '@/context/coupon-context'
import { Toaster } from '@/components/ui/sonner'
// import { Header } from '@/components/header-top'

const montserrat = Montserrat({
  subsets: ['vietnamese'],
  weight: ['300', '400', '500', '700']
})

export const metadata: Metadata = {
  title: {
    default: 'Monminpet',
    template: '%s | Monminpet'
  },
  description: 'Gia đình - nơi có những người bạn bốn chân!',
  icons: {
    icon: '/logo/fav-monminpet.png'
  }
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
        <link
          rel='icon'
          href='/logo/fav-monminpet.png'
          sizes='32x32'
          type='image/png'
        />
        <link rel='apple-touch-icon' href='/logo/fav-monminpet.png' />
      </head>
      {/* <body className={montserrat.className}> */}
      <body className={montserrat.className}>
        <Providers>
          <CouponProvider>
            <CartProvider>
              {/* Bao bọc ứng dụng bằng CartProvider */}
              <Header />
              <AppProvider initialSessionToken={sessionToken}>
                {children}
                <Toaster position='top-right' richColors closeButton />
              </AppProvider>
              <Footer />
            </CartProvider>
          </CouponProvider>
        </Providers>
      </body>
    </html>
  )
}
