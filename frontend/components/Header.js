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
     
    </>
  );
}
