import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { container } from '../../styled-system/patterns'
import { cx } from '../../styled-system/css'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Frontpage',
  description: 'Testing Next.js and Panda (🐼) CSS'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cx(inter.className, container())}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
