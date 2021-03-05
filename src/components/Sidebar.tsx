import React, { ReactElement } from 'react';

import { FiHome, FiLogOut, FiSettings } from 'react-icons/fi';
import styles from '../styles/components/Sidebar.module.css';

export function Sidebar(): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div>
          <img src="https://github.com/guillescas.png" alt="" />
        </div>
        <div>
          <h2>Guilherme Illescas</h2>
        </div>
      </div>

      <div className={styles.options}>
        <button type="button" className={styles.item}>
          <FiHome size={32} />
          <p>Home</p>
        </button>

        <button type="button" className={styles.item}>
          <FiSettings size={32} />
          <p>Configurações</p>
        </button>
      </div>

      <div className={styles.logout}>
        <button type="button" className={styles.item}>
          <FiLogOut size={32} />
          <p>Sair</p>
        </button>
      </div>
    </div>
  );
}
