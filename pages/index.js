import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import BarChart from "@/components/BarChart";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <BarChart />
      </main>
    </>
  );
}
