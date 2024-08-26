import "../styles/global.css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Head from "next/head";
import {ChakraProvider, Stack, Flex, theme, Image} from "@chakra-ui/react";
import colors from "../styles/config/colors";
import React from "react";
import { motion } from "framer-motion";

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    purple: "#692ba8",
  },
};

const MotionImage = motion(Image);

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction={"column"} bgColor={colors.sageL} flexFlow="column">
        { /* LOGO */}
        <a href="/gallery">
          <MotionImage
              src="/logo.PNG"
              height={75}
              width={150}
              position="absolute"
              whileTap={{ scale: 0.8 }}
          />
        </a>
        {/* fix link css */}
        <Component
          {...pageProps}
        />
        {/*<Footer flexGrow={0} flexShrink={1} flexBasis="40px" />*/}
      </Flex>
    </ChakraProvider>
  );
}
