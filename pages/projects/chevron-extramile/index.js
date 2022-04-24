import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

import Footer from '../../../components/Footer';
import ProjectTitle from '../../../components/ProjectTitle';
import ProjectCards from '../../../components/ProjectCards';

import homepageHero from './images/homepage-hero.jpg';
import deals from './images/deals.jpg';
import coffee from './images/coffee.jpg';
import extraman from './images/extraman.jpg';

export default function Project() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chevron ExtraMile | Website Creative Direction | Steve Norell</title>
        <meta name="description" content="Creative and technology direction for a new website for chevronextramile.com" />
      </Head>

      <motion.main
        exit={{ opacity: 0 }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <ProjectTitle
          title="chevronextramile.com"
          subtitle="Clean Convenience"
          agency="Drake Cooper"
          agencyUrl="https://drakecooper.com"
        />

        <div className="rounded-lg shadow-xl overflow-hidden">
          <Image
            src={homepageHero}
            layout="responsive"
            width={1160}
            height={654}
            alt="Website UI showing a Chevron ExtraMile logo, navigation, and promo message with title EARN FREEBIES and a superhero character holding a phone with ExtraMile Extras Join the Club"
          />
        </div>

        <div className="grid md:grid-cols-2 text-blue-100 my-20">
          <div className="mb-8">
            <h2 className="text-fuchsia-600 text-xl mb-4">Project Roles</h2>
            <ul className="text-xl">
              <li>Creative Direction</li>
              <li>Technology Direction</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-fuchsia-600 text-xl mb-4">Key Contributions</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Migrated to a content management system</li>
              <li>Implemented new product portfolio</li>
              <li>Lead coordination with multiple stakeholders, translation, and location finder API</li>
            </ul>
            <p><a href="https://chevronextramile.com" target="_blank" rel="noopener noreferrer" className="text-fuchsia-600 underline">View Live Site</a></p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8 lg:mb-20">
          <div className="rounded-lg shadow-xl overflow-hidden">
            <Image
              src={deals}
              layout="responsive"
              width={370}
              height={800}
              alt="Mobile size webpage showing a carousel of promotional offers"
            />
          </div>
          <div className="rounded-lg shadow-xl overflow-hidden">
            <Image
              src={coffee}
              layout="responsive"
              width={370}
              height={800}
              alt="Mobile size webpage showing a coffee cups with ExtraMile branding"
            />
          </div>
          <div className="rounded-lg shadow-xl overflow-hidden">
            <Image
              src={extraman}
              layout="responsive"
              width={370}
              height={800}
              alt="Mobile size webpage showing an introduction to ExtraMan"
            />
          </div>
        </div>

        <ProjectCards />
        <Footer />

      </motion.main>
    </div>
  )
}
