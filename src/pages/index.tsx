import React from "react";
import Head from "next/head";
import type { NextPage } from "next";

const MetaData: React.FC = () => {
  return (
    <Head>
      <title>Brahmcast</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
  );
};

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <MetaData />
    </React.Fragment>
  );
};

export default Home;