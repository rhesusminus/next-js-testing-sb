'use client'
import useSWR from 'swr'
import { API_PATHS, getPeople } from '@/api'

export default function Peope() {
  const { data, isLoading } = useSWR(API_PATHS.PEOPLE, getPeople)

  return (
    <div>
      People
      {isLoading ? <p>Loading</p> : null}
    </div>
  )
}
