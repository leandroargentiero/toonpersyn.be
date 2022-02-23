import Head from 'next/head';

const Meta = () => {
  return (
    <Head>
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon-16x16.png"
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/images/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content="Belgian Director Of Photography that focuses on narratives, documentary and commercials. Based in Mechelen."
      />
      <meta
        property="og:image"
        content="https://images.prismic.io/website-toonpersyn/14dcd26b-eab8-49bf-8902-9b397225744a_share_toonpersyn.jpeg?auto=compress,format"
      />
    </Head>
  );
};

export default Meta;
