import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'react-feather';
import { useUser } from '../store/user';
import { Button } from './shared';
import { useCookies } from 'react-cookie';

export default function Header() {
  const { nextRailsUser: user, addUser } = useUser();
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const [_cookies, _setCookie, removeCookie] = useCookies(['nextRailsUser']);

  const signOut = () => {
    removeCookie('nextRailsUser');
    addUser(null);
  };

  return (
    <>
      <header className='w-full flex items-center justify-between py-2 px-5 bg-slate-800 text-white'>

        <Menu className='visible md:hidden' onClick={toggleMenu} />
        {/* La navbar suivante a été exclue */}
      </header>
      {showMenu && (
        <nav className='py-5 font-semibold bg-yellow-200'>
          <ul className='flex flex-col items-end space-y-2'>
            <li>
              <Link href='/dashboard'>
                <a className='px-3 py-2 underline tracking-wider'>Dashboard</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a className='px-3 py-1 underline tracking-wider'>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
