import Head from 'next/head';
import Image from 'next/image';
import styles from './styles.module.css';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ProjectTitle from '../../../components/ProjectTitle';

import homepageHero from './images/homepage-hero.jpg';

export default function ExampleProject() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Visit Idaho | Website UX & Visual Design | Steve Norell</title>
        <meta name="description" content="" />
      </Head>

      <Header />

      <main>
        <ProjectTitle
          title="visitidaho.org"
          subtitle="Inspiring families to find memorable adventures in Idaho"
          agency="Drake Cooper"
          agencyUrl="https://drakecooper.com"
        />

        <div className="rounded shadow">
          <Image
            src={homepageHero}
            layout="responsive"
            width={1160}
            height={622}
          />
        </div>

        <div className="columns-2 text-blue-100">
          <div>Left col</div>
          <div>Right col</div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
