import Head from 'next/head'
import Image from 'next/image'
import styles from '../../index.module.css'

import Header from '../../../components/Header'

export default function ExampleProject() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Steve Norell | Digital Creative Director</title>
        <meta name="description" content="Digital Creative Director, UX Designer, and Front-end Developer in Boise, ID" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1>This is an example project</h1>
      </main>
    </div>
  )
}
