import { FC } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from '../styles/global';
import { wrapper } from '../store/store';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Manipulae Front Challenge</title>
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

export default wrapper.withRedux(App);
