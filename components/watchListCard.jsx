import React from "react";
import Image from "next/image";

export default function WatchListCard({ movies }) {
  const [moviesData, setMoviesData] = React.useState(movies);

  async function HandleDelete(id) {
    let res = await fetch(`http://localhost:8080/watchlist/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    const response = await fetch(`http://localhost:8080/watchlist`);
    const Data = await response.json();
    setMoviesData(Data);
  }

  return (
    <div>
      {" "}
      <h1>Movies</h1>
      {moviesData.map((movie) => (
        <div key={movie.id}>
          <Image src={movie.Images[0]} alt="poster" width={100} height={100} />
          <p>{movie.Title}</p>
          <p>{movie.Year}</p>
          <button
            onClick={() => {
              HandleDelete(movie.id);
            }}>
            Delete
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}
