import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  <Head>
    <title>My page title</title>
    <link rel="shortcut icon" href="/favicon.ico" />
  </Head>
  return <Component {...pageProps} />
}

export default MyApp