'use client'
import useSWR from 'swr'
import { css } from '../../styled-system/css'
import styles from './page.module.css'
import { API_PATHS, getPeople } from '@/api'
import { useEffect } from 'react'

export default function Home() {
  const { data, isLoading } = useSWR(API_PATHS.PEOPLE, getPeople)

  return (
    <main className={styles.main}>
      <p className={css({ fontSize: '2xl', fontWeight: 'bold' })}>
        Next.js testing
      </p>
      {isLoading ? <p>Loading</p> : null}
    </main>
  )
}