import { useEffect } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { globalStyles } from '../styles/global';
import AOS from 'aos';
import 'aos/dist/aos.css';

globalStyles();

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
