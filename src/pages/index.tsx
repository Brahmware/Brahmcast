import React from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { Box } from "@mui/material";

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
      <Box sx={{ height: "100%", width: "100%", background: 'aquamarine' }}>
      </Box>
    </React.Fragment>
  );
};

export default Home;