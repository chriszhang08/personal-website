import "../styles/global.css";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { lightTheme, darkTheme, GlobalStyles } from "../styles/themeConfig";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme == "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Button onClick={toggleTheme}>Switch Theme</Button>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
