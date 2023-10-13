import Head from 'next/head';
import { userFromCookie } from '../utils';
import Link from 'next/link';


const Home = ({}) => {

  return (
    <div className="homepagebg">
      <Head>
        <title>LearnQuest</title>
        <meta name='description' content="Apprendre en s'amusant" />
        <link rel='icon' href='/images/faviconlq.png' />
      </Head>

      
          <div className="logo-container">
          <Link href="/profile">
        <a>
            <img src="/images/learnquestslogoandslogan.png" alt="LearnQuest Logo" className="logo" />
            </a>
      </Link>
          </div>
        
      <div id="leaves">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
    </div>
    
  );
};

export default Home;

