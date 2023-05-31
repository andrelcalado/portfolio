import Head from "next/head";
import Header from "../components/header";
import HomeScreen from "../screens/home";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>AL code.</title>
        <meta
          name="description"
          content="Front End Developer - Web | React.js | React Native"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <HomeScreen />

      <Footer />
    </>
  );
}
