import Link from 'next/link'

import styles from './styles.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>
          <span className="sr-only">
            Steve Norell
          </span>
        </a>
      </Link>
    </header>
  )
}

export default Header
