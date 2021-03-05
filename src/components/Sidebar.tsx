import React, { ReactElement } from 'react';
import { useTheme } from 'next-themes';

import { FiHome, FiLogOut, FiMoon, FiSettings, FiSun } from 'react-icons/fi';
import styles from '../styles/components/Sidebar.module.css';

export function Sidebar(): ReactElement {
  const { theme, setTheme } = useTheme();

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
          <FiHome size={28} />
          <p>Home</p>
        </button>

        <button type="button" className={styles.item}>
          <FiSettings size={28} />
          <p>Configurações</p>
        </button>

        {theme === 'light' ? (
          <button
            type="button"
            className={styles.item}
            onClick={() => setTheme('dark')}
          >
            <FiMoon size={28} />
            <p>Dark mode</p>
          </button>
        ) : (
          <button
            type="button"
            className={styles.item}
            onClick={() => setTheme('light')}
          >
            <FiSun size={28} />
            <p>Light mode</p>
          </button>
        )}
      </div>

      <div className={styles.logout}>
        <button type="button" className={styles.item}>
          <FiLogOut size={28} />
          <p>Sair</p>
        </button>
      </div>
    </div>
  );
}
