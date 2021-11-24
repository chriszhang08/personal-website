import "../styles/global.css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Head from "next/head";
import { ChakraProvider, Stack, Flex, theme } from "@chakra-ui/react";
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
      <Flex
        direction={"column"}
        bgGradient="linear(to-b, #3c3b5f, #f06553, #fff474)"
        flexFlow="column"
      >
        <Navbar flexGrow={0} flexShrink={1} flexBasis="auto" />
        {/* fix link css */}
        <Component
          flexGrow={1}
          flexShrink={1}
          flexBasis="auto"
          {...pageProps}
        />
        <Footer flexGrow={0} flexShrink={1} flexBasis="40px" />
      </Flex>
    </ChakraProvider>
  );
}
