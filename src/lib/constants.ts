const SMALL_RESOLUTION_WIDTH = 1280;
const TABLET_MIN_WIDTH = 768;
const MOBILE_WIDTH = 960;
const ONLY_MOBILE_WIDTH = 960;
const GTM_ID = '';

// const DISCORD_URL = 'https://discord.gg/93P8SmzyHM';
const TELEGRAM_URL = 'https://t.me/+RF1nXgWag1o2MTll';
const LINKEDIN_URL = 'https://www.linkedin.com/company/usehandl/';
// const INSTAGRAM_URL = 'https://instagram.com/tokenleague_xyz';
// const TWITTER_URL = 'https://twitter.com/tokenleaguexyz/';

const DOMAIN = 'https://usehandl.com';
const GLOBAL_META = `Task management app on Slack`;
const GLOBAL_TITLE = `Handl: Task management app on Slack`;

const GOOGLE_CLIENT_ID =
  '823656330152-ao70hrftbb5avcuht7oalkm3h46lhccv.apps.googleusercontent.com';
const FB_CLIENT_ID = '';
const TWITTER_CLIENT_ID = '';
const DEFAULT_CURRENCY = 'USD';

const ORG_SCHEMA = JSON.stringify({
  '@context': 'http://schema.org',
  '@type': 'Organization',
  name: 'handl',
  description: GLOBAL_META,
  url: `https://${DOMAIN}`,
  logo: `https://${DOMAIN}/logo.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Business Bay',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
  },
  sameAs: [],
});

const COLORS = ['#56CCF2', '#F2C94C', '#6FCF97', '#BB6BD9'];

export {
  DOMAIN,
  GTM_ID,
  TABLET_MIN_WIDTH,
  SMALL_RESOLUTION_WIDTH,
  MOBILE_WIDTH,
  ONLY_MOBILE_WIDTH,
  ORG_SCHEMA,
  GLOBAL_META,
  GLOBAL_TITLE,
  // DISCORD_URL,
  TELEGRAM_URL,
  LINKEDIN_URL,
  // INSTAGRAM_URL,
  // TWITTER_URL,
  GOOGLE_CLIENT_ID,
  FB_CLIENT_ID,
  TWITTER_CLIENT_ID,
  DEFAULT_CURRENCY,
  COLORS,
};
