'use client'
import Link from 'next/link'
import { css } from '../../styled-system/css'

export default function Home() {
  return (
    <>
      <p className={css({ fontSize: '2xl', fontWeight: 'bold' })}>
        Next.js testing
      </p>
      <ul>
        <li>
          <Link href="/people">People</Link>
        </li>
      </ul>
    </>
  )
}
