import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { Box } from "@mui/material";
import HomeLayout from "@/layouts/HomeLayout";
import DisplayFeature from "@/containers/DisplayFeature";

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
      <HomeLayout>
        <Box sx={{ backgroundColor: "greenyellow" }}>
          <h1>Main Content</h1>
        </Box>
        <DisplayFeature />
      </HomeLayout>
    </React.Fragment>
  );
};

export default Home;