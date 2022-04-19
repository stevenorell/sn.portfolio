import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './index.module.css';

import Footer from '../components/Footer';
import SocialNav from '../components/SocialNav';
import ProjectCards from '../components/ProjectCards';

export default function Home() {
  return (
    <>
      <Head>
        <title>Steve Norell | Digital Creative Director</title>
        <meta name="description" content="Digital Creative Director, UX Designer, and Front-end Developer in Boise, ID" />
      </Head>

      <motion.main
        exit={{ opacity: 0 }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 10 }}
      >
        <section className={styles.hero}>
          <h1>Steve Norell is a </h1>
          <ul>
            <li>Digital Creative Director</li>
            <li>Experience Designer</li>
            <li>Creative Developer</li>
          </ul>
        </section>

        <section className={styles.contact}>
          <a className={styles.email} href="mailto:design@stevenorell.com">design@stevenorell.com</a>
          <SocialNav />
        </section>

        <ProjectCards />
        <Footer />

      </motion.main>
    </>
  )
}
