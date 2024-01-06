
import { Inter,Lato,Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const lato = Lato ({ 
  subsets: ['latin'],
  variable: "--font-lato",
  weight:"400"
  })
const montserrat = Montserrat ({ 
  subsets: ['latin'],
  variable: "--font-montserrat",
  weight:"200"
  })

export const metadata = {
  title: 'Dr. Who Website',
  description: 'Official website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable}`}>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}
