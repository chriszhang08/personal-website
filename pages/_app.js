import "../styles/global.css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Head from "next/head";
import { ChakraProvider, Stack } from "@chakra-ui/react";
import colors from "../styles/config/colors";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>Chris Zhang</title>
      </Head>
      <Stack direction={"column"} spacing={8} bg={colors.khaki}>
        <Navbar />
        {/* fix link css */}
        <Component {...pageProps} />
        <Footer />
      </Stack>
    </ChakraProvider>
  );
}
