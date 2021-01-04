import '../styles/global.scss';
import NavBar from '../components/NavBar';
import Head from 'next/head';
import SideBar from '../components/SideBar';
import FollowBar from '../components/FollowBar';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [path, setPath] = useState('/');

  useEffect(() => {
    if (window) setPath(window.location.pathname);
  });

  return (
    <div id='App'>
      <Head>
        <title>Verbin</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavBar />

      {path !== '/authentication' ? (
        <>
          <div id='SideWrapper'>
            <SideBar />
          </div>
          <div id='FollowWrapper'>
            <FollowBar />
          </div>
        </>
      ) : null}

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
