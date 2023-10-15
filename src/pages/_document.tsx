import React from "react";
import theme from "@/theme";
import Document, { Html, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "@/utils/createEmotionCache";
import { Head } from 'next/document';


export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/Brahmcast-Favicon.svg" type="image/svg+xml" />
          <meta name="emotion-insertion-point" content="" />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta name="msapplication-TileColor" content={theme.palette.primary.main} />
          <meta name="msapplication-TileImage" content="/favicon.ico" />
          <meta name="msapplication-config" content="/favicon.ico" />
          <meta name="apple-mobile-web-app-title" content="Brahmcast" />
          <meta name="application-name" content="Brahmcast Corp." />
          <meta name="description" content="Corporate website of Brahmcast" />
          <meta name="keywords" content="Brahmcast" />
          <meta name="author" content="Brahmware" />
          <meta name="author-website" content="https://brahmware.com" />
          <meta name="author-email" content="hello@brahmware.com" />
          <meta name="contact-us" content="namaste@brahmcast.com" />
          {(this.props as any).emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
};

MyDocument.getInitialProps = async (context) => {

  const originalRenderPage = context.renderPage;
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  context.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(context);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style: any) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};