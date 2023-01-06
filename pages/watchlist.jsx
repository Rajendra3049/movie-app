import React from "react";
import WatchListCard from "../components/watchListCard";
export default function Watchlist({ watchlistData }) {
  return (
    <div>
      <h1>Watchlist</h1>
      <WatchListCard movies={watchlistData} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:8080/watchlist`);
  const data = await res.json();
  return {
    props: { watchlistData: data }, // will be passed to the page component as props
  };
}
