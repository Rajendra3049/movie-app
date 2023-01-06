import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MovieCard from "../components/card";

import { useRouter } from "next/router";

export default function Home({ movies }) {
  let Route = useRouter();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Home</h1>
        <div>
          <MovieCard movies={movies} />
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  let response = await fetch(` http://localhost:8080/data`);
  let data = await response.json();
  return {
    props: {
      movies: data,
    },
  };
}
