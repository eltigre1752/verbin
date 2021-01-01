import '../styles/global.scss';
import NavBar from '../components/NavBar';
import Head from 'next/head';
import SideBar from '../components/SideBar';
import FollowBar from '../components/FollowBar';

function MyApp({ Component, pageProps }) {
  return (
    <div id='App'>
      <Head>
        <title>Verbin</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavBar />

      <div id='SideWrapper'>
        <SideBar />
      </div>
      <div id='FollowWrapper'>
        <FollowBar />
      </div>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
