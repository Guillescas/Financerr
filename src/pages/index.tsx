import React, { ReactElement } from 'react';
import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';
import { Sidebar } from '../components/Sidebar';

export default function Home(): ReactElement {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard | Financerr</title>
      </Head>

      <Sidebar />
    </div>
  );
}
