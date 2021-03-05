import React, { ReactElement } from 'react';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';

import styles from '../styles/components/ValueBox.module.css';

interface IValueBoxProps {
  type: string;
}

export function ValueBox({ type }: IValueBoxProps): ReactElement {
  return (
    <>
      {type === 'income' ? (
        <div className={`${styles.container} ${styles.income}`}>
          <div className={styles.title}>
            <FiArrowDown size={34} />
            <h2>Entradas</h2>
          </div>

          <div className={styles.value}>
            <p>Valor total</p>
            <span>R$ 8.947,31</span>
          </div>
        </div>
      ) : (
        <div className={`${styles.container} ${styles.outcome}`}>
          <div className={styles.title}>
            <FiArrowUp size={34} />
            <h2>Saídas</h2>
          </div>

          <div className={styles.value}>
            <p>Valor total</p>
            <span>R$ 3.217,99</span>
          </div>
        </div>
      )}
    </>
  );
}
