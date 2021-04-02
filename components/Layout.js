import Head from "next/head";

const siteTitle = "Ali Sequeira Dev";
function Layout({ children }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Ali Sequeira Software Developer Website"
        />
        <title>{siteTitle}</title>
        <meta name="og:title" content={siteTitle} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;1,100&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;1,100;1,300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      {children}
      <style jsx>
        {`
          .container {
            margin: 0 auto;
          }
        `}
      </style>
    </>
  );
}

export default Layout;
