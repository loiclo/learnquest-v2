import Head from 'next/head';
import { userFromCookie } from '../utils';

const Home = ({}) => {
  return (
    <div className="homepagebg">
      <Head>
        <title>LearnQuest</title>
        <meta name='description' content="Apprendre en s'amusant" />
        <link rel='icon' href='/images/faviconlq.png' />
      </Head>
      <div className="logo-container">
        <img src="/images/learnquestslogoandslogan.png" alt="LearnQuest Logo" className="logo" />
      </div>
    </div>
  );
};

export default Home;
