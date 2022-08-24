import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { MdDehaze as Hamburger, MdClose as Close } from 'react-icons/md';

import logo from '../../public/img/logo-with-title.svg';
import { useScroll } from '@use-gesture/react';

const Header = ({
  hideTicker = false,
  onFaqClick = null,
  onHowClick = null,
}) => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const router = useRouter();

  const links = [
    {
      title: 'How it works',
      link: '/how-it-works',
      onClick: onHowClick,
    },
    {
      title: 'FAQs',
      link: '/faqs',
      onClick: onFaqClick,
    },
  ];

  const onHamburgerClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.height = '100vh';
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.height = '';
      document.body.style.overflowY = 'scroll';
    }
  }, [open]);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setExpanded(false);
    }
  };

  useScroll(
    (state) => {
      const {
        direction: [, dy],
        xy: [, y],
      } = state;
      if (dy === -1) {
        setExpanded(true);
      }
      if (dy === 1 && y > window.innerHeight) {
        setExpanded(false);
      }
    }
    // { target: window }
  );

  return (
    <div className="fixed top-0 z-50 w-screen overflow-hidden shadow-md">
      <div className="relative bg-black flex items-center justify-between w-full h-[72px] px-4 md:px-8">
        <div className="relative flex items-center h-full">
          <Link href="/" passHref>
            <a className="relative block h-12 w-44">
              <Image src={logo} alt="logo" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
