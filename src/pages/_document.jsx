import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Front End Developer Portfolio - HTML | CSS | Javascript | React.js | React Native | Wordpress"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="AL Code" />
        <meta
          property="og:image"
          content="https://i.ibb.co/2knz6nH/thumbnail.jpg"
        />
        <meta
          property="og:description"
          content="AL Code Portfolio - HTML | CSS | Javascript | React.js | React Native | Wordpress"
        />
        <meta
          property="og:url"
          content="https://portfolio-git-main-andrelcalado.vercel.app/"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
