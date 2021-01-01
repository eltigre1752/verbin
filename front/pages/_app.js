import NavBar from '../components/NavBar';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div >
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
