import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion';

import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Header />

      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>

      <Footer />
    </>
  )
}

export default MyApp
