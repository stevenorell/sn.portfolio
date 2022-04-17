import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.legal}>&copy; always</span>
      <a className={styles.link} href="/steve-norell-resume-2022.pdf" download>resume</a>
      <a className={styles.link} href="https://www.linkedin.com/in/stevenorell/" target="_blank" rel="noopener noreferrer">linkedin</a>
    </footer>
  )
}

export default Footer;
