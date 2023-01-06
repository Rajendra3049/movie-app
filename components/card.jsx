import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function MovieCard({ movies }) {
  return (
    <div>
      {" "}
      <h1>Movies</h1>
      {movies.map((movie) => (
        <Link href={`/${movie.id}`} key={movie.id}>
          <div>
            <Image
              src={movie.Images[0]}
              alt="poster"
              width={100}
              height={100}
            />
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>
            <hr />
          </div>
        </Link>
      ))}
    </div>
  );
}
