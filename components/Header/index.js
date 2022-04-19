import styles from './styles.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link
        href="/"
        scroll={false}
      >
        <a>
          <h1 className={styles.logo}>
            <span className="sr-only">
              Steve Norell
            </span>
          </h1>
        </a>
      </Link>
    </header>
  )
}

export default Header;
