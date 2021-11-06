import "../styles/global.css";
import Navbar from "../components/navbar/navbar";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      {/* fix link css */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
