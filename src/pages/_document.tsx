import { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default function Document() {
  const getInitialProps = async function (
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  
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
