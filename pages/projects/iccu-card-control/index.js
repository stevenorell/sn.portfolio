import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
// import YouTube from 'react-youtube';
import ReactPlayer from 'react-player';

import Footer from '../../../components/Footer';
import ProjectTitle from '../../../components/ProjectTitle';
import ProjectCards from '../../../components/ProjectCards';

export default function Project() {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  return (
    <div>
      <Head>
        <title>ICCU Card Control | Product Page Design & Dev | Steve Norell</title>
        <meta name="description" content="A product launch landing page for Idaho Central Credit Union's Card Control app." />
      </Head>

      <motion.main
        exit={{ opacity: 0 }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <ProjectTitle
          title="iccu.com/cardcontrol"
          subtitle="Showcasing the benefits of being in control"
          agency="Drake Cooper"
          agencyUrl="https://drakecooper.com"
        />

        {hasWindow &&
          <div className="rounded overflow-hidden shadow-xl">
            <ReactPlayer
              url="https://res.cloudinary.com/dgjxzo056/video/upload/v1650343774/card-control-animation-demo_dcnjsw.mp4"
              muted={true}
              volume={0}
              loop={true}
              playing={true}
              width="100%"
              height="auto"
            />
          </div>
        }

        <div className="grid md:grid-cols-2 text-blue-100 my-20">
          <div className="mb-8">
            <h2 className="text-fuchsia-600 text-xl mb-4">Project Roles</h2>
            <ul className="text-xl">
              <li>Concept</li>
              <li>Visual Design</li>
              <li>Development</li>
              <li>Animation</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-fuchsia-600 text-xl mb-4">Key Contributions</h2>
            <p>As part of a launch campaign for Card Control, a new mobile banking app that gives ICCU members more control over their debit and credit cards, we built an immersive animated landing page to highlight the features and benefits. Using scroll position as the main interaction, we created visual representations of the key app features in along with an app UI demo to show it in action.</p>
          </div>
        </div>



        <ProjectCards />
        <Footer />

      </motion.main>
    </div>
  )
}
