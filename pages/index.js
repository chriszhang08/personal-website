import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { Footer } from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <div>
        <Layout home>
          <Head>
            <title>{siteTitle}</title>
          </Head>
          <section className={utilStyles.headingMd}>
            <p>Hi! My name is Chris Zhang. </p>
            <p>
              I love helping people I love helping people I love helping people
              I love helping people I love helping people I love helping people
              I love helping people I love helping people I love helping people
              I love helping people I love helping people I love helping people
              I love helping people I love helping people I love helping people
              I love helping people I love helping people I love helping people
              I love helping people I love helping people I love helping people
              I love helping people I love helping people I love helping people
              I love helping people I love helping people I love helping people
              I love helping people I love helping people I love helping people
              I love helping people I love helping people I love helping people
              I love helping people I love helping people{" "}
              <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
            </p>
          </section>
        </Layout>
        <Footer />
      </div>
    </ChakraProvider>
  );
}
