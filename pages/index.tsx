import type { NextPage } from "next";

import Head from "next/head";
import { MainTemplate } from "src/components";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Inkr Project</title>
        <meta name="description" content="Inkr Project" />
      </Head>

      <MainTemplate />
    </div>
  );
};

export default Home;
