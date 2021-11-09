import Head from "next/head";

import Link from "next/link";
import { Fragment } from "react";

export default function SaveTheWorld() {
  return (
    <Fragment>
      <h1 className="title">
        Read{" "}
        <Link href="https://greatlakes.org/">
          <a>donate here!</a>
        </Link>
      </h1>
    </Fragment>
  );
}
