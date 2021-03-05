import React, { ReactElement } from 'react';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: any): ReactElement {
  return <Component {...pageProps} />;
}

export default MyApp;
