import Link from 'next/link'
import { hstack } from '../../styled-system/patterns'
import { css } from '../../styled-system/css'

const styles = css({})

const listStyles = css({})

export default function Header() {
  return (
    <header>
      Header
      <ul className={hstack({ gap: '6' })}>
        <li>
          <Link href="/">Frontpage</Link>
        </li>
        <li>
          <Link href="/people">People</Link>
        </li>
      </ul>
    </header>
  )
}
