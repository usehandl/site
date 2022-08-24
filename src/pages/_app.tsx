import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/index.css';

import 'react-toastify/dist/ReactToastify.min.css';

import { GTMPageView } from '../services/ga';

import {
  DOMAIN,
  GLOBAL_TITLE,
  GLOBAL_META,
  ORG_SCHEMA,
} from '../lib/constants';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Initiate GTM
  useEffect(() => {
    const handleRouteChange = (url: URL) => GTMPageView(url);

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const ogImage = `https://${DOMAIN}/img/logo.svg`;

  const Layout = Component.Layout || (({ children }) => <>{children}</>);
  return (
    <>
      <Head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="handl-x" />
        <meta name="apple-mobile-web-app-title" content="handl-x" />
        <meta name="theme-color" content="#0C0047" />
        <meta name="msapplication-navbutton-color" content="#0C0047" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-starturl" content="/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="twitter:title"
          content={pageProps?.ogTitle ?? GLOBAL_TITLE}
        />
        <meta
          name="twitter:description"
          content={pageProps?.ogDescription ?? GLOBAL_META}
        />
        <meta name="twitter:image" content={pageProps?.ogImage ?? ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@" />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:url"
          content={`https://${DOMAIN}`}
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:title"
          content={pageProps?.ogTitle ?? GLOBAL_TITLE}
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:description"
          content={pageProps?.ogDescription ?? GLOBAL_META}
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:image"
          content={pageProps?.ogImage ?? ogImage}
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:image:secure_url"
          content={pageProps?.ogImage ?? ogImage}
        />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="562" />
        <meta property="og:image:alt" content={GLOBAL_TITLE} />
        <meta property="og:site_name" content="handl-x" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ORG_SCHEMA }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/logo.svg" />
        <link
          rel="preload"
          href="/fonts/poppins-v15-latin-300.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/poppins-v15-latin-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/poppins-v15-latin-500.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/poppins-v15-latin-600.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/poppins-v15-latin-900.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        {pageProps?.metaDescription && (
          <meta name="description" content={pageProps?.metaDescription} />
        )}
        {pageProps?.canonicalUrl && (
          <link
            rel="canonical"
            href={pageProps?.canonicalUrl}
            key="canonical-page-prop"
          />
        )}
        {(pageProps?.preLoadImages ?? []).map((image, index: number) => (
          <link rel="preload" href={image} as="image" key={`image${index}`} />
        ))}
        {pageProps?.ldJson && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: pageProps.ldJson }}
          />
        )}
      </Head>
      <Layout countryCode={pageProps?.countryCode || 'US'}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
