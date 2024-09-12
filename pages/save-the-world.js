import {
  Heading,
  Text,
  Link,
  Stack,
  Flex,
  Tooltip,
  List,
  IconButton,
} from "@chakra-ui/react";
import { Fragment, useEffect, useState } from "react";
import Script from "next/script";
import Head from "next/head";
import Blog from "../components/blog/Blog";
import Typography from "@mui/material/Typography";
import Logo from "../components/Logo";

export default function SaveTheWorld() {
  const [showClimateClock, setShowClimateClock] = useState(false);

  useEffect(() => {
    setShowClimateClock(true);
  }, []);

  return (
    <>
      <Logo/>
      <Flex w="100%" justify="center" direction="row" paddingY={8} bgColor="#000000">
        <Stack w={["90%", "80%", "65%", "50%", "40%"]} spacing={8}>
          {/* Climate Change Section */}
          <Typography variant="h3" color="#ffffff" align="center">
            Climate Change is today's problem.
          </Typography>
          {showClimateClock && (
            <Fragment>
              <Script
                src="https://climateclock.world/widget-v2.js"
                async
              ></Script>
              <climate-clock />
            </Fragment>
          )}

          {/* Blog Section */}
          <Heading as="h2" size="lg" color="#ffffff" textAlign="center" mt={8}>
            Blog Section
          </Heading>
          <Blog />
        </Stack>
      </Flex>
    </>
  );
}
