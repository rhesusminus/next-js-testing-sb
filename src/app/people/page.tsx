'use client'
import Link from 'next/link'
import useSWR from 'swr'
import { API_PATHS, getPeople } from '@/api'

export default function Peope() {
  const { data, isLoading } = useSWR(API_PATHS.PEOPLE, getPeople)

  return (
    <div>
      People
      <ul>
        <li>
          <Link href="/">Frontpage</Link>
        </li>
      </ul>
      {isLoading ? <p>Loading</p> : null}
    </div>
  )
}
