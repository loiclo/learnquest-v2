import { useCookies } from 'react-cookie';
import Footer from './Footer';
import Header from './Header';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const router = useRouter();

  return (
    <div className='flex flex-col'>
      <Header />
      <main>{children}</main>
      {router.pathname !== '/' && <Footer />}
    </div>
  );
}
