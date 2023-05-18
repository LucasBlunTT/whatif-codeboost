import { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../styles';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <style
          id="stiches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        ></style>

        <meta name="title" content="Marvel's WHAT IF... ?" />
        <meta name="description" content="Um projeto desenvolvido no curso codeboost" />


        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://whatif-codeboost-iota.vercel.app/" />
        <meta property="og:title" content="Marvel's WHAT IF... ?" />
        <meta property="og:description" content="Um projeto desenvolvido no curso codeboost" />
        <meta property="og:image" content="../../public/meta.png" />


        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://whatif-codeboost-iota.vercel.app/" />
        <meta property="twitter:title" content="Marvel's WHAT IF... ?" />
        <meta property="twitter:description" content="Um projeto desenvolvido no curso codeboost" />
        <meta property="og:image" content="../../public/meta.png" />
      </Head>
      <body>
        <Main />
        <NextScript />

        <script>AOS.init();</script>
      </body>
    </Html>
  );
}
