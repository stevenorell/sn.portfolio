import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

import Footer from '../../../components/Footer';
import ProjectTitle from '../../../components/ProjectTitle';
import ProjectCards from '../../../components/ProjectCards';

import homepageHero from './images/homepage-hero.jpg';
import vodkas from './images/vodkas.jpg';
import recipes from './images/recipes.jpg';

export default function Project() {
  return (
    <div className={styles.container}>
      <Head>
        <title>44&ordm; North Vodka | Website Design | Steve Norell</title>
        <meta name="description" content="UX and UI design for a premier vodka." />
      </Head>

      <motion.main
        exit={{ opacity: 0 }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <ProjectTitle
          title="44northvodka.com"
          subtitle="Vodka Grown in Idaho"
          agency="Drake Cooper"
          agencyUrl="https://drakecooper.com"
        />

        <div className="rounded-lg shadow-xl overflow-hidden">
          <Image
            src={homepageHero}
            layout="responsive"
            width={1160}
            height={654}
            alt="Website UI showing homepage of 44northvodka.com, with layered image of nectarines and 44º North Vodka Sunnyslope Nectarine bottle"
          />
        </div>

        <div className="grid md:grid-cols-2 text-blue-100 my-20">
          <div className="mb-8">
            <h2 className="text-fuchsia-600 text-xl mb-4">Project Roles</h2>
            <ul className="text-xl">
              <li>UX/UI Design</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-fuchsia-600 text-xl mb-4">Key Contributions</h2>
            <p>Based on some truely stunning brand collateral and advertising design, I worked with our development team to bring a fresh and interactive UI to the 44&ordm; North Vodka brand.</p>
          </div>
        </div>

        <div className="rounded-lg shadow-xl overflow-hidden mb-20">
          <Image
            src={vodkas}
            layout="responsive"
            width={1160}
            height={654}
            alt="Menu showing the various 44º North Vodka bottles"
          />
        </div>

        <div className="rounded-lg shadow-xl overflow-hidden mb-20">
          <Image
            src={recipes}
            layout="responsive"
            width={1160}
            height={654}
            alt="Grid of cocktail recipes with one card flipped over to reveal recipe details"
          />
        </div>

        <ProjectCards />
        <Footer />

      </motion.main>
    </div>
  )
}
