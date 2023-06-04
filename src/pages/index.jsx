import React from "react";
import Head from "next/head";
import Header from "../components/header";
import HomeScreen from "../screens/home";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>AL code.</title>
      </Head>
      <Header />

      <HomeScreen />

      <Footer />
    </>
  );
}
