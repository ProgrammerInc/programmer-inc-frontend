import Head from 'next/head'
import useMedia from 'use-media';

import Nav from './nav'

const defaultTitle = '<programmer>._'
const defaultDescription = 'nothing to see here, move along.'
const defaultOGURL = ''
const defaultOGImage = ''

interface ILayoutProps {
  title?: string
  description?: string
  url?: string
  ogImage?: string
  children?: any
  categories?: any
}

const Layout = ({ title, description, url, ogImage, children, categories }: ILayoutProps) => {
  const isDarkMode = useMedia('(prefers-color-scheme: dark)');

  console.log(isDarkMode)

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>{title || defaultTitle}</title>
        <meta
          name="description"
          content={description || defaultDescription}
        />
        {isDarkMode ? (
          <>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-icon-dark-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/static/apple-icon-dark-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-icon-dark-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-icon-dark-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-icon-dark-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-icon-dark-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-icon-dark-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-icon-dark-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-icon-dark-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192"  href="/static/android-icon-dark-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-dark-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-dark-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-dark-16x16.png" />
            <link rel="manifest" href="/static/manifest.json" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/static/ms-icon-dark-144x144.png" />
            <meta name="theme-color" content="#ffffff" />
            <link rel="mask-icon" href="/static/favicon-dark-mask.svg" color="#49B882" />
            <link rel="icon" href="/static/favicon-dark.ico" />
          </>
        ) : (
          <>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/static/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192"  href="/static/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
            <link rel="manifest" href="/static/manifest.json" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/static/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ffffff" />
            <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
            <link rel="icon" href="/static/favicon.ico" />
          </>
        )}
        <meta property="og:url" content={url || defaultOGURL} />
        <meta property="og:title" content={title || ''} />
        <meta
          property="og:description"
          content={description || defaultDescription}
        />
        <meta name="twitter:site" content={url || defaultOGURL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage || defaultOGImage} />
        <meta property="og:image" content={ogImage || defaultOGImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Staatliches"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-177858408-1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-177858408-1');
              `,
          }}
        />
      </Head>
      <Nav categories={categories} />
      {children}
    </>
  )
}

export default Layout
