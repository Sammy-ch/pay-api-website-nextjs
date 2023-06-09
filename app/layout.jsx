import './globals.scss'
import { P_sans } from './font'
import Footer from '@/components/Footer'
import Provider from '@/components/Provider'


export const metadata = {
  title: 'PayApi Website',
  description: 'Access to fast secure APIs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={P_sans.className}>
        <Provider>{children}</Provider>
      <Footer/>
      </body>
      
    </html>
  )
}
