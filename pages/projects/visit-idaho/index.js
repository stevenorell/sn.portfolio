import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

import Footer from '../../../components/Footer';
import ProjectTitle from '../../../components/ProjectTitle';
import ProjectCards from '../../../components/ProjectCards';

import homepageHero from './images/homepage-hero.jpg';
import activity from './images/activity.jpg';
import lodging from './images/lodging.jpg';
import article from './images/article.jpg';
import backpack from './images/backpack.jpg';
import eighteenSummers from './images/18summers.jpg';

export default function ExampleProject() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Visit Idaho | Website UX & Visual Design | Steve Norell</title>
        <meta name="description" content="" />
      </Head>

      <motion.main
        exit={{ opacity: 0 }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 10 }}
      >
        <ProjectTitle
          title="visitidaho.org"
          subtitle="Inspiring families to find memorable adventures in Idaho"
          agency="Drake Cooper"
          agencyUrl="https://drakecooper.com"
        />

        <div className="rounded-lg shadow-xl overflow-hidden">
          <Image
            src={homepageHero}
            layout="responsive"
            width={1160}
            height={622}
            alt="Visit Idaho website homepage, with title Childhood is Short Summer is Shorter"
          />
        </div>

        <div className="grid md:grid-cols-2 text-blue-100 my-20">
          <div className="mb-8">
            <h2 className="text-fuchsia-600 text-xl mb-4">Project Roles</h2>
            <ul className="text-xl">
              <li>Creative Direction</li>
              <li>Technology Direction</li>
              <li>UX Design</li>
              <li>Visual Design</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-fuchsia-600 text-xl mb-4">Key Contributions</h2>
            <ul className="list-disc pl-6">
              <li>Collaborated on UX for a complex system of content relationships between Activites, Activity Resources, Lodging and Articles</li>
              <li>Provided technical direction for the implementation of 3rd party APIs like TripAdvisor</li>
              <li>Provided creative direction for digital advertising campaigns and digital experiences supporting mass media campaigns</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8 lg:mb-20">
          <div className="rounded-lg shadow-xl overflow-hidden">
            <Image
              src={activity}
              layout="responsive"
              width={371}
              height={848}
              alt="Mobile size webpage showing an overview of Kirkham Hot Springs with details"
            />
          </div>
          <div className="rounded-lg shadow-xl overflow-hidden">
            <Image
              src={lodging}
              layout="responsive"
              width={371}
              height={848}
              alt="Mobile size webpage showing a listing for Caribou Lodge with an image of the lodge and description"
            />
          </div>
          <div className="rounded-lg shadow-xl overflow-hidden">
            <Image
              src={article}
              layout="responsive"
              width={371}
              height={848}
              alt="Mobile size webpage showing an article titled 20 Budget-friendly Idaho Advertures for 2020"
            />
          </div>
        </div>

        <div className="rounded-lg img-shadow-inner overflow-hidden mb-8 lg:mb-20">
          <Image
            src={backpack}
            layout="responsive"
            width={1160}
            height={716}
            alt="List of UI cards at a slight right angle showing different articles and activity content items"
          />
        </div>

        <div className="rounded-lg shadow-xl overflow-hidden mb-8 lg:mb-20">
          <Image
            src={eighteenSummers}
            layout="responsive"
            width={1160}
            height={653}
            alt="Website with Visit Idaho logo showing a family taking a selfie in front of a waterfall with a layered 18Summers logo graphic"
          />
        </div>

        <ProjectCards />
        <Footer />

      </motion.main>
    </div>
  )
}
