import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <div>
      <div>
        {" "}
        <Link href="/">Home</Link>
        <Link href="/watchlist">Watchlist</Link>
      </div>
    </div>
  );
}
