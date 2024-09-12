import "../styles/global.css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Head from "next/head";
import { ChakraProvider, Flex, theme as chakraTheme } from "@chakra-ui/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { motion } from "framer-motion";

// Custom Chakra UI theme
const customChakraTheme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    purple: "#692ba8", // Custom color override
  },
};

// Custom Material-UI theme
const customMuiTheme = createTheme({
  palette: {
    mode: "light", // Or 'dark' depending on preference
    primary: {
      main: "#692ba8", // Custom primary color
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customChakraTheme}>
      <ThemeProvider theme={customMuiTheme}>
        <CssBaseline />
        <Flex direction={"column"} flexFlow="column" minHeight="100vh">
          <Head>
            <title>Your Website</title>
            <meta name="description" content="Description of your website" />
          </Head>
          {/* Main content */}
          <Component {...pageProps} />
        </Flex>
      </ThemeProvider>
    </ChakraProvider>
  );
}
