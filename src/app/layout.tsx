import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from './layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jeppistä',
  description: 'Testing Next.js and Panda (🐼) CSS'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  )
}
