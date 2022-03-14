import Head from 'next/head';
import Navbar from '../Components/Navbar';
import AppContext from '../Context/AppContext';
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Awesome Blogs</title>
      </Head>
      <AppContext>
        <Navbar />
        <Component {...pageProps} />
      </AppContext>
    </>
  );
}

export default MyApp
