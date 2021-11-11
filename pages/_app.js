import "../styles/global.css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Head from "next/head";
import { ChakraProvider, Stack, theme } from "@chakra-ui/react";
import colors from "../styles/config/colors";

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    purple: "#692ba8",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
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
