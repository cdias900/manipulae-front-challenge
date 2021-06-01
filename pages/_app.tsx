import { FC } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from 'react-redux';

import Menu from '../components/Menu';
import GlobalStyle from '../styles/global';
import { wrapper } from '../store/store';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const store = useStore();

  return (
    <>
      <Head>
        <title>Manipulae Front Challenge</title>
      </Head>
      <GlobalStyle />
      <PersistGate persistor={(store as any).__persistor} loading={<div>Loading...</div>}>
        <Menu />
        <Component {...pageProps} />
      </PersistGate>
    </>
  );
};

export default wrapper.withRedux(App);
