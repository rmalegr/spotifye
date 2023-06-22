import Sidebar from '@/components/Sidebar'
import Header from './Header'
import './globals.css'
import { Figtree } from 'next/font/google'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Clone',
  description: 'Listen to music',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
     
      <body className={font.className}>
         <Sidebar>
               {children}
         </Sidebar>
       </body>
    </html>
  )
}
