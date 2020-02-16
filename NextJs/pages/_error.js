import React from "react";
import Link from "next/link";

const errorpage = () => (
  <div>
    <h1>Oops, something went wrong!</h1>
    <p>
      Go to
      <Link href="/">
        <a> Go back</a>
      </Link>
    </p>
  </div>
);

export default errorpage;
