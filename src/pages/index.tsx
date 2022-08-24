import Head from 'next/head';
import Image from 'next/image';
// import Link from 'next/link';
import { useRef } from 'react';
// import { BsDiscord } from 'react-icons/bs';
import { FaDiscord, FaInstagram, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
// import { FaExternalLinkAlt, FaTwitter } from 'react-icons/fa';
import { MdCollectionsBookmark, MdMail } from 'react-icons/md';
// import AccordionList from '../components/AccordionList';
import Header from '../components/Header';
// import { faqs } from '../lib/data';

import logo from '../../public/logo.png';
// import JoinDiscordButton from '../components/JoinDiscordButton';
// import JoinTelegramButton from '../components/JoinTelegramButton';
import {
  // DISCORD_URL,
  // INSTAGRAM_URL,
  LINKEDIN_URL,
  TELEGRAM_URL,
  // TWITTER_URL,
} from '../lib/constants';

export default function Home() {
  const faqRef = useRef(null);
  const howRef = useRef(null);

  const onFaqClick = () => {
    if (faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };
  const onHowClick = () => {
    if (howRef.current) {
      howRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <>
      <Head>
        <title>TokenLeague</title>
      </Head>
      <Header onFaqClick={onFaqClick} onHowClick={onHowClick} />
      <main>
        <div className="min-h-screen mx-auto">
          <div className="mt-32 grid grid-cols-9 md:mt-32 pb-12 md:pb-0">
            <div className="z-10 flex flex-col items-center justify-center order-2 px-6 mb-4 col-span-full md:col-span-4 md:items-start md:pl-20 md:px-0 md:-order-1">
              <h1 className="mb-2 text-4xl font-bold text-center md:text-6xl md:text-left leading-snug md:leading-tight md:mb-6">
                <div>Why yet another task management software?</div>
                <div>When you can do it all within Slack?</div>
                {/* <div>
                  win <span className="text-green">₹1 Crore!</span>
                </div> */}
              </h1>
              {/* <p className="md:text-2xl text-center md:text-left font-light mb-4 opacity-70 md:mb-8 md:pr-12">
                First 10,000 users win joining bonus of upto ₹1,00,000 on
                launch.
              </p> */}
              {/* <div className="w-full md:w-4/5 grid grid-cols-2 md:grid-cols-2 gap-x-2 md:gap-x-6">
                <JoinDiscordButton />
                <JoinTelegramButton />
              </div> */}
            </div>
            <div className="col-span-full md:col-span-5">
              <Image
                src="/img/home/tkl-hero.png"
                alt="hero"
                width={1340}
                height={1166}
                layout="responsive"
                priority
              />
            </div>
          </div>
          <div
            className="px-6 py-12 pb-20 md:px-24 md:py-20 bg-gradient-to-b from-purple-dark to-purple"
            ref={howRef}
          >
            <h2 className="mb-12 md:mb-20 text-3xl font-bold leading-relaxed text-center md:text-4xl">
              Just 3 easy steps
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-16">
              <div className="flex flex-col justify-between">
                <div className="mb-4 md:mb-10">
                  <h4 className="mb-3 text-3xl font-bold text-green italic uppercase">
                    Create Tasks
                  </h4>
                  <p className="text-xl font-light">
                    Create tasks with ETA and assign them to your peer.<br></br>
                    Its Easy and Quick! 
                    {/* Join for <span className="font-bold">FREE</span> to play our
                    FUN Crypto Fantasy Leagues. It’s Easy, Secure and Thrilling. */}
                  </p>
                </div>
                <div className="rounded-3xl shadow-2xl">
                  <Image
                    src="/img/home/step-1.png"
                    alt="step 1"
                    width={368}
                    height={406}
                    layout="responsive"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-4 md:mb-10">
                  <h4 className="mb-3 text-3xl font-bold text-green italic uppercase">
                    Track Tasks
                  </h4>
                  <p className="text-xl font-light">
                    Track the progress of the tasks assigned to and by you; all from a slack-native dashboard.
                    {/* Choose a League and{' '}
                    <span className="font-bold">create your portfolio</span>,{' '}
                    learn and show your Crypto knowledge & outsmart your
                    opponents. */}
                  </p>
                </div>
                <div className="rounded-3xl shadow-2xl">
                  <Image
                    src="/img/home/step-2.png"
                    alt="step 2"
                    width={368}
                    height={406}
                    layout="responsive"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-4 md:mb-10">
                  <h4 className="mb-3 text-3xl font-bold text-green italic uppercase">
                    Intelligent Reminders
                  </h4>
                  <p className="text-xl font-light">
                    Get reminded when the ETA of a task is near. Get notifications whenever an important update occurs.
                  </p>
                </div>
                <div className="rounded-3xl shadow-2xl">
                  <Image
                    src="/img/home/step-3.png"
                    alt="step 3"
                    width={368}
                    height={406}
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="px-6 pt-12 pb-20 md:px-20 md:pt-0 md:pb-20">
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="flex items-center text-center col-span-2 md:text-left">
                <h1 className="mb-3 text-2xl font-bold leading-normal md:text-4xl md:leading-tight md:mb-6">
                  Our in-game real time market info gives you the edge, use this
                  intel and win
                </h1>
              </div>

              <div className="col-span-full md:col-span-3 transform scale-125 -translate-x-5 md:-translate-x-8">
                <Image
                  src="/img/home/market.png"
                  alt="market"
                  width={1382}
                  height={1286}
                  layout="responsive"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="px-6 py-0 md:px-20 md:py-12">
            <div className="relative bg-gradient-to-r from-[#8025FB] to-[#5F5CFC] rounded-2xl px-6 md:px-16 pt-8 md:pt-20 pb-0 md:pb-12">
              <div className="w-full mb-12 text-center md:w-1/2 md:text-left md:mb-0 md:pr-12">
                <h1 className="mb-6 text-2xl font-bold leading-normal md:text-6xl">
                  Join now for{' '}
                  <span className="text-green uppercase">free</span>
                </h1>
                <p className="mb-8 font-light md:text-2xl md:opacity-70">
                  Our Game Plan: Token League makes learning about
                  cryptocurrencies easy, secure and fun. When people get rich
                  playing our game, we win.
                </p>
                <div className="w-full md:w-4/5 grid grid-cols-2 gap-x-2 md:gap-x-6">
                  <JoinDiscordButton color="light" />
                  <JoinTelegramButton />
                </div>
              </div>
              <div className="bottom-0 right-0 md:absolute md:w-2/5">
                <Image
                  src="/img/join-banner-bg.png"
                  alt="join banner"
                  width={585}
                  height={420}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
          <div className="px-6 py-12 md:px-24 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-64">
              <div className="flex flex-col justify-center text-center md:text-left mb-8 md:mb-0">
                <h1 className="mb-3 text-2xl font-bold leading-normal md:text-4xl md:leading-tight md:mb-6">
                  0ur community is buzzing 24/7 with events, memes, giveaways,
                  prizes and ₹₹₹
                </h1>
                <p className="md:text-2xl font-light opacity-70 ">
                  Join our community of crypto enthusiasts, gurus and supporters
                  all over the world, to learn, play and earn with Token League.
                </p>
              </div>
              <div className="flex flex-col justify-between h-full py-6">
                <div className="flex mb-8 space-x-4 md:space-x-8 md:mb-12">
                  <FaTelegramPlane className="w-12 h-12 shrink-0" />
                  <div className="">
                    <a
                      className="flex items-center font-semibold md:text-2xl"
                      href={TELEGRAM_URL}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Community Chat{' '}
                      <FaExternalLinkAlt className="ml-2 text-base" />
                    </a>
                    <p className="text-sm font-light opacity-50 md:text-base">
                      Ask general questions and chat with the worldwide
                      community on Telegram.
                    </p>
                  </div>
                </div>
                <div className="flex mb-8 space-x-4 md:space-x-8 md:mb-12">
                  <BsDiscord className="w-12 h-12 shrink-0" />
                  <div className="">
                    <a
                      className="flex items-center font-semibold md:text-2xl"
                      href={DISCORD_URL}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Discord Hangout{' '}
                      <FaExternalLinkAlt className="ml-2 text-base" />
                    </a>
                    <p className="text-sm font-light opacity-50 md:text-base">
                      Chill with like minded folk, read the latest news, guffaw
                      at the latest memes on Dicord.
                    </p>
                  </div>
                </div>
                <div className="flex mb-8 space-x-4 md:space-x-8 md:mb-12">
                  <FaTwitter className="w-12 h-12 shrink-0" />
                  <div className="">
                    <a
                      className="flex items-center font-semibold md:text-2xl"
                      href={TWITTER_URL}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Community Chat{' '}
                      <FaExternalLinkAlt className="ml-2 text-base" />
                    </a>
                    <p className="text-sm font-light opacity-50 md:text-base">
                      Our twitter is chirping, tell the world what you think is
                      the next big thing on Twitter.
                    </p>
                  </div>
                </div>

                <div className="flex space-x-4 md:space-x-8">
                  <MdCollectionsBookmark className="w-12 h-12 shrink-0" />
                  <div className="">
                    <a
                      className="flex items-center font-semibold md:text-2xl"
                      href={INSTAGRAM_URL}
                      rel="noreferrer"
                      target="_blank"
                    >
                      Instagram <FaExternalLinkAlt className="ml-2 text-base" />
                    </a>
                    <p className="text-sm font-light opacity-50 md:text-base">
                      Reels, info graphics and latest news, find it all on our
                      totally happening Insta channel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="px-6 pb-8 mx-auto md:w-1/2 md:pb-20 md:px-0"
            ref={faqRef}
          >
            <h2 className="mb-12 text-2xl font-bold leading-relaxed text-center md:text-4xl md:mb-12">
              Frequently asked questions
            </h2>
            <div className="mb-8 md:mb-12">
              <AccordionList
                data={faqs.slice(0, 4)}
                setHeight={true}
                showLastDivider={true}
                isContentTextColorSet={false}
              />
            </div>
            <div className="text-center">
              <Link href="/faqs" passHref>
                <p className="inline cursor-pointer hover:underline">
                  View All
                </p>
              </Link>
            </div>
          </div>
          <div className="px-8 pt-8 pb-20 mx-auto md:w-1/2">
            <h2 className="mb-8 text-3xl font-bold leading-relaxed text-center md:text-4xl">
              Our <span className="text-purple-light">partners</span>
            </h2>
            <div className="flex flex-wrap justify-between h-16 space-y-8 gap-y-6">
              <Image
                src="/img/payment/paytm-logo.svg"
                alt="paytm"
                width={121}
                height={38}
              />
              <Image
                src="/img/payment/phonepe-logo.svg"
                alt="phonepe"
                width={140}
                height={38}
              />
              <Image
                src="/img/payment/gpay-logo.svg"
                alt="gpay"
                width={95.7}
                height={38}
              />
              <Image
                src="/img/payment/upi-logo.svg"
                alt="upi"
                width={107.5}
                height={38}
              />
            </div>
          </div>
          <div className="pb-12 mx-auto md:w-1/2">
            <div className="w-12 h-12 mx-auto mb-2">
              <Image
                src="/img/payment/shield.svg"
                alt="shield"
                width={1}
                height={1}
                layout="responsive"
              />
            </div>

            <h2 className="text-3xl font-bold leading-relaxed text-center md:text-4xl md:mb-2">
              Super <span className="text-green">Secure</span>
            </h2>
          </div> */}
          <div className="h-1 mt-8 md:mt-8 bg-gradient"></div>
          <div className="flex flex-col md:flex-row justify-between px-6 md:px-40 pt-20 pb-40 space-y-8 md:space-y-0">
            <div className="w-full md:w-[28%] -mt-2">
              <div className="w-3/4 mx-auto md:ml-0">
                <Image src={logo} alt="logo" />
              </div>
              <p className="pl-2 text-center md:text-left">
                TokenLeague is a fantasy gaming league where friends learn
                stocks, predict trends, and earn real money rewards with low to
                no risk.{' '}
              </p>
            </div>
            {/* <div className="flex flex-col space-y-4">
              <Link href="/privacy-policy" passHref>
                <a className="hover:underline text-center md:text-left">
                  Privacy Policy
                </a>
              </Link>
              <Link href="/terms" passHref>
                <a className="hover:underline text-center md:text-left">
                  Terms & conditions
                </a>
              </Link>
              <Link href="/fairplay-policy" passHref>
                <a className="hover:underline text-center md:text-left">
                  Fairplay policy
                </a>
              </Link>
            </div> */}
            <div className="pr-0 md:pr-8">
              <p className="font-bold opacity-60 text-center md:text-left">
                Get in touch:
              </p>
              <div className="flex items-center justify-center md:justify-start text-purple-light font-bold mb-6 text-center md:text-left">
                <MdMail className="mr-2" /> :&nbsp;&nbsp;hello@tokenleague.xyz
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-4 col-span-full md:bottom-0">
                <a
                  href={LINKEDIN_URL}
                  className=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="w-8 h-8" />
                </a>
                <a
                  href={TELEGRAM_URL}
                  className=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTelegramPlane className="w-8 h-8" />
                </a>
                {/* <a
                  href={INSTAGRAM_URL}
                  className=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="w-8 h-8" />
                </a>
                <a
                  href={DISCORD_URL}
                  className=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaDiscord className="w-8 h-8" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
