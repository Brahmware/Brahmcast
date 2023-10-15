import React from "react";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@/utils/createEmotionCache";
import Head from "next/head";
import MUIThemeProvider from "./MuiThemeProvider";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface PageProviderProps {
  emotionCache?: EmotionCache;
  children: React.ReactNode;
};

const PageProvider: React.FC<PageProviderProps> = ({
  children,
  emotionCache = clientSideEmotionCache,
}) => (
  <CacheProvider value={emotionCache}>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <MUIThemeProvider>{children}</MUIThemeProvider>
  </CacheProvider>
);

export default PageProvider;
