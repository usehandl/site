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

import logo from '../../public/img/logo-with-title.svg';
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
        <title>handl</title>
      </Head>
      <Header onFaqClick={onFaqClick} onHowClick={onHowClick} />
      <main>
        <div className="min-h-screen mx-auto">
          <div className="mt-32 grid grid-cols-9 md:mt-32 pb-12 md:pb-0">
            <div className="z-10 flex flex-col items-center justify-center order-2 px-6 mb-4 col-span-full md:col-span-4 md:items-start md:pl-20 md:px-0 md:-order-1">
              <h1 className="mb-2 text-4xl font-bold text-center md:text-6xl md:text-left leading-snug md:leading-tight md:mb-6">
                <div>Why yet another task management software?</div>
                <div>When you can do it all within Slack?</div>
              </h1>
            </div>
            {/* <div className="col-span-full md:col-span-5">
              <Image
                src="/img/home/tkl-hero.png"
                alt="hero"
                width={1340}
                height={1166}
                layout="responsive"
                priority
              />
            </div> */}
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
          <div className="h-1 mt-8 md:mt-8 bg-gradient"></div>
          <div className="flex flex-col md:flex-row justify-between px-6 md:px-40 pt-20 pb-40 space-y-8 md:space-y-0">
            <div className="w-full md:w-[28%] -mt-2">
              <div className="w-3/4 mx-auto md:ml-0">
                <Image src={logo} alt="logo" />
              </div>
              <p className="pl-2 text-center md:text-left">
                Handl is a task management tool built on top of Slack.{' '}
              </p>
            </div>
            <div className="pr-0 md:pr-8">
              <p className="font-bold opacity-60 text-center md:text-left">
                Get in touch:
              </p>
              <div className="flex items-center justify-center md:justify-start text-purple-light font-bold mb-6 text-center md:text-left">
                <MdMail className="mr-2" /> :&nbsp;&nbsp;atmosengg@gmail.com
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
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
