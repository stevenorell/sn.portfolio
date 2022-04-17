import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

import Header from '../components/Header';
import SocialNav from '../components/SocialNav';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Steve Norell | Digital Creative Director</title>
        <meta name="description" content="Digital Creative Director, UX Designer, and Front-end Developer in Boise, ID" />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <small>Steve is a </small>
          <strong>
            Digital Creative Director <span className={styles.highlight}>/</span><br />
            Experience Designer <span className={styles.highlight}>/</span><br />
            Creative Developer</strong>
        </section>

        <section className={styles.contact}>
          <a className={styles.email} href="mailto:design@stevenorell.com">design@stevenorell.com</a>
          <SocialNav />
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
