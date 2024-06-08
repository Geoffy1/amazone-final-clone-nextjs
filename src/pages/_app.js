import { Provider } from 'react-redux';
import { store } from '../app/store';
import '../styles/globals.css';
//import Appbar from '../components/Appbar';
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
//import { Provider as AuthProvider } from "next-auth/react";

export default function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <SessionProvider>
        <Provider store={store}>
          
          {/*<Appbar />*/}
          <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    );
  }
}
