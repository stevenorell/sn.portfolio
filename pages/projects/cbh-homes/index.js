import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Footer from '../../../components/Footer';
import ProjectTitle from '../../../components/ProjectTitle';
import ProjectCards from '../../../components/ProjectCards';

import homefinder from './images/homefinder.jpg';
import listing from './images/listing.jpg';
import quizResults from './images/quiz-results.jpg';
import profile from './images/profile.jpg';
import filters from './images/filters.jpg';


export default function Project() {
  return (
    <div>
      <Head>
        <title>CBH Homes | Website UX & Visual Design | Steve Norell</title>
        <meta name="description" content="" />
      </Head>

      <motion.main
        exit={{ opacity: 0 }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <ProjectTitle
          title="cbhhomes.com"
          subtitle="Matching Idahoans with their Shiny, Awesome Dream Home"
          agency="Drake Cooper"
          agencyUrl="https://drakecooper.com"
        />

        <div className="rounded-lg shadow-xl overflow-hidden">
          <Image
            src={homefinder}
            layout="responsive"
            width={1160}
            height={654}
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
              <li>Lead multiple UI and platform refreshes</li>
              <li>Designed a match score algorithm based on user preferences</li>
              <li>Lead integration with Salesforce CRM</li>
              <li>Launched e-commerce reservation system</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8 lg:mb-20">
          <div className="rounded-lg shadow-xl overflow-hidden">
            <Image
              src={listing}
              layout="responsive"
              width={371}
              height={802}
              alt="Mobile size webpage showing an overview of Kirkham Hot Springs with details"
            />
          </div>
          <div className="rounded-lg shadow-xl overflow-hidden">
            <Image
              src={quizResults}
              layout="responsive"
              width={371}
              height={802}
              alt="Mobile size webpage showing a listing for Caribou Lodge with an image of the lodge and description"
            />
          </div>
          <div className="rounded-lg shadow-xl overflow-hidden">
            <Image
              src={profile}
              layout="responsive"
              width={371}
              height={802}
              alt="Mobile size webpage showing an article titled 20 Budget-friendly Idaho Advertures for 2020"
            />
          </div>
        </div>

        <div className="shadow-xl overflow-hidden mb-8 lg:mb-20">
          <Image
            src={filters}
            layout="responsive"
            width={1160}
            height={197}
            alt="Visit Idaho website homepage, with title Childhood is Short Summer is Shorter"
          />
        </div>

        <ProjectCards />
        <Footer />

      </motion.main>
    </div>
  )
}
