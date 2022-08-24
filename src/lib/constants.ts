const SMALL_RESOLUTION_WIDTH = 1280;
const TABLET_MIN_WIDTH = 768;
const MOBILE_WIDTH = 960;
const ONLY_MOBILE_WIDTH = 960;
const GTM_ID = '';

const TELEGRAM_URL = 'https://t.me/+RF1nXgWag1o2MTll';
const LINKEDIN_URL = 'https://www.linkedin.com/company/usehandl/';

const DOMAIN = 'https://usehandl.com';
const GLOBAL_META = `Task management app on Slack`;
const GLOBAL_TITLE = `Handl: Task management app on Slack`;

const ORG_SCHEMA = JSON.stringify({
  '@context': 'http://schema.org',
  '@type': 'Organization',
  name: 'handl',
  description: GLOBAL_META,
  url: `https://${DOMAIN}`,
  logo: `https://${DOMAIN}/img/logo.svg`,
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
  TELEGRAM_URL,
  LINKEDIN_URL,
  COLORS,
};
