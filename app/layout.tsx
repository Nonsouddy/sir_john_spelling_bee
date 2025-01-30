import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

//Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

//Styles
import './Style/globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spelling Bee',
  description: 'Sit John Spelling Bee Web App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
