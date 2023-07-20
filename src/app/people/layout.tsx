import '../globals.css'
import type { Metadata } from 'next'
import { css } from '../../../styled-system/css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'People',
  description: 'Testing Next.js and Panda (🐼) CSS'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1 className={css({ fontSize: '2xl', fontWeight: 'bold' })}>People</h1>
      {children}
    </div>
  )
}
