import '../styles/globals.css';
import '../styles/homepage.css';
import '../styles/leaves.css';
import '../styles/background.css';
import '../styles/transition.css';
import { CookiesProvider } from 'react-cookie';
import { Toaster } from 'react-hot-toast';
import Layout from '/components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <CookiesProvider>
      <Toaster />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CookiesProvider>
  );
}

export default MyApp;
