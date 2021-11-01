import Head from "next/head";
import Layout from "../components/layout";

import Link from "next/link";

export default function SaveTheWorld() {
  return (
    <Layout>
      <h1 className="title">
        Read{" "}
        <Link href="https://greatlakes.org/">
          <a>donate here!</a>
        </Link>
      </h1>
    </Layout>
  );
}
