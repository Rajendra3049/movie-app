import React from "react";
import Image from "next/image";

export default function Movie({ movie }) {
  async function HandleOnclick(movie) {
    let res = await fetch(`http://localhost:8080/watchlist`, {
      method: "post",
      body: JSON.stringify(movie),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
  }
  return (
    <div>
      <div key={movie.id}>
        <Image src={movie.Images[0]} alt="poster" width={100} height={100} />
        <p>{movie.Title}</p>
        <p>{movie.Year}</p>
        <button
          onClick={() => {
            HandleOnclick(movie);
          }}>
          Add to Watchlist
        </button>
      </div>
    </div>
  );
}
export async function getStaticPaths() {
  let response = await fetch(` http://localhost:8080/data`);
  let data = await response.json();
  return {
    paths: data.map((e) => ({ params: { id: String(e.id) } })),
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const { id } = context.params;
  let response = await fetch(` http://localhost:8080/data/${id}`);
  let data = await response.json();

  return {
    props: {
      movie: data,
    },
  };
}
