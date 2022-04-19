import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion';

import Header from '../components/Header';

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
    </>
  )
}

export default MyApp
