import styles from './styles.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <span className="sr-only">
          Steve Norell
        </span>
      </h1>
    </header>
  )
}

export default Header
