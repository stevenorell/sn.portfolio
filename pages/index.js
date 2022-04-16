import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.css'

import Header from '../components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Steve Norell | Digital Creative Director</title>
        <meta name="description" content="Digital Creative Director, UX Designer, and Front-end Developer in Boise, ID" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <small>I&rsquo;m a </small>
          <strong>Digital Creative Director <span className={styles.highlight}>/</span><br /> Creative Developer</strong>
        </section>

        <section className={styles.contact}>
          <small>I&rsquo;m on</small>
          <strong>
            <a href="https://dribbble.com/stevenorell" target="_blank" rel="noreferrer">Dribbble</a>&nbsp;<span className={styles.highlight}>/</span>&nbsp;
            <a href="https://github.com/stevenorell" target="_blank" rel="noreferrer">Github</a>&nbsp;<span className={styles.highlight}>/</span>&nbsp;
            <a href="https://medium.com/@stevenorell" target="_blank" rel="noreferrer">Medium</a>
          </strong>
        </section>

        <section>
          <Link href="/projects/example-project">
            <a>Example Project</a>
          </Link>
        </section>
      </main>
    </div>
  )
}
