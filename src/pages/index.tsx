import React, { ReactElement } from 'react';
import Head from 'next/head';

import { FiChevronRight, FiPlus } from 'react-icons/fi';
import styles from '../styles/pages/Home.module.css';
import { Sidebar } from '../components/Sidebar';
import { ValueBox } from '../components/ValueBox';

export default function Home(): ReactElement {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard | Financerr</title>
      </Head>

      <Sidebar />

      <section className={styles.content}>
        <div className={styles.cards}>
          <ValueBox type="income" />
          <ValueBox type="outcome" />
        </div>

        <div className={styles.tableTitles}>
          <p />
          <p>Nome</p>
          <p>Tipo</p>
          <p>Valor</p>
          <p>Ação</p>
        </div>

        <form onSubmit={() => console.log('oi')}>
          <div className={styles.line}>
            <div>
              <FiPlus size={22} />
            </div>

            <input
              required
              name="name"
              type="text"
              placeholder="Pneus novos para o carro"
            />

            <select required name="type" placeholder="Selecione">
              <option selected disabled value="">
                Selecione
              </option>
              <option value="income">Entrada</option>
              <option value="outcome">Saída</option>
            </select>

            <input required name="value" type="tetx" placeholder="123,45" />

            <button type="submit">Adicionar</button>
          </div>
        </form>

        <div className={styles.history}>
          <h2>Histórico</h2>

          <div className={styles.line}>
            <div>
              <FiChevronRight size={22} />
            </div>

            <p>Leite, pão e bolacha</p>

            <p className={styles.outcome}>Saída</p>

            <p>R$ 17,90</p>
          </div>

          <div className={styles.line}>
            <div>
              <FiChevronRight size={22} />
            </div>

            <p>Aula particular</p>

            <p className={styles.income}>Entrada</p>

            <p>R$ 270,00</p>
          </div>

          <div className={styles.line}>
            <div>
              <FiChevronRight size={22} />
            </div>

            <p>Leite, pão e bolacha</p>

            <p className={styles.outcome}>Saída</p>

            <p>R$ 17,90</p>
          </div>
        </div>
      </section>
    </div>
  );
}
