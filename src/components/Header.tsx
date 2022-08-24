import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { MdDehaze as Hamburger, MdClose as Close } from 'react-icons/md';

import logo from '../../public/logo.png';
import { useScroll } from '@use-gesture/react';
// import PriceTicker from './PriceTicker';
// import { FaDiscord } from 'react-icons/fa';
// import { DISCORD_URL } from '../lib/constants';

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
      {/* {!hideTicker && (
        <div className="">
          <PriceTicker />
        </div>
      )} */}
      <div className="relative bg-black flex items-center justify-between w-full h-[72px] px-4 md:px-8">
        <div className="relative flex items-center h-full">
          <Link href="/" passHref>
            <a className="relative block h-8 w-44">
              <Image src={logo} alt="logo" />
            </a>
          </Link>
        </div>
        {/* <div
          className={`bg-black md:hidden tablet:flex fixed -z-1 min-h-screen w-full p-8 left-0 top-0 flex flex-col transform transition-transform ease-in-out duration-150 ${
            open ? 'translate-y-16' : '-translate-y-full'
          }`}
        >
          {links.map((link, index) => {
            if (link.onClick) {
              return (
                <a
                  className={`text-white text-lg mb-6 ml-4 cursor-pointer ${
                    router.route === link.link && 'text-gradient font-semibold'
                  }`}
                  key={index}
                  onClick={link.onClick}
                >
                  {link.title}
                </a>
              );
            }
            return (
              <a
                href={link.link}
                className={`text-white text-lg mb-6 ml-4 ${
                  router.route === link.link && 'text-gradient font-semibold'
                }`}
                key={index}
              >
                {link.title}
              </a>
            );
          })}
        </div> */}
        {/* <div className="absolute hidden font-light md:flex w-max left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-8 2xl:gap-16 lg:gap-8">
          {links.map((link, index) => {
            if (link.onClick) {
              return (
                <a
                  className={`text-white cursor-pointer ${
                    router.route === link.link && 'text-gradient font-semibold'
                  }`}
                  key={index}
                  onClick={link.onClick}
                >
                  {link.title}
                </a>
              );
            }
            return (
              <Link href={link.link} key={index} passHref>
                <a
                  className={`text-white ${
                    router.route === link.link && 'text-gradient font-semibold'
                  }`}
                  key={index}
                >
                  {link.title}
                </a>
              </Link>
            );
          })}
        </div> */}
        {/* <div className="flex items-center md:hidden top-4 left-4">
          <a href={DISCORD_URL} target="_blank" rel="noreferrer">
            <button className="btn-primary">Join Discord</button>
          </a>
          <a onClick={onHamburgerClick} className="z-10">
            {!open ? (
              <Hamburger className="inline-block w-8 h-8 text-white md:w-10 md:h-10" />
            ) : (
              <Close className="inline-block w-8 h-8 text-white md:w-10 md:h-10" />
            )}
          </a>
        </div> */}
        {/* <div className="items-center hidden md:flex gap-2 2xl:gap-8 lg:gap-4">
          <a href={DISCORD_URL} target="_blank" rel="noreferrer">
            <button className="flex items-center font-light btn-primary">
              Join us on <FaDiscord className="ml-2 mr-1 text-2xl" />{' '}
              <span className="font-bold">Discord</span>
            </button>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
