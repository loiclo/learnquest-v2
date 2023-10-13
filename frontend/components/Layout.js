import { useCookies } from 'react-cookie';
import Footer from './Footer';
import Header from './Header';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { PageTransition } from 'next-page-transitions';

const transitionStyles = {
  enter: {
    opacity: 0,
  },
  enterActive: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Layout({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const router = useRouter();

  return (
    <PageTransition
      timeout={500}
      classNames="page-transition"
      monkeyPatchScrolling
      loadingDelay={500}
      loadingTimeout={{
        enter: 500,
        exit: 0,
      }}
      loadingClassNames="loading-indicator"
    >
      <motion.div
        key={router.route}
        initial="enter"
        animate="enterActive"
        exit="exit"
        variants={transitionStyles}
      >
        <div className='flex flex-col'>
          <Header />
          <main>{children}</main>
          {/* {router.pathname !== '/' && <Footer />} */}
        </div>
      </motion.div>
    </PageTransition>
  );
}
