import utilStyles from "../styles/utils.module.css";
import {
  ChakraProvider,
  Text,
  Box,
  Stack,
  Heading,
  Flex,
  Link,
  Tooltip,
} from "@chakra-ui/react";
import Image from "next/image";
import { Fragment } from "react";
import colors from "../styles/config/colors";

export default function Home() {
  return (
    <Fragment>
      <Flex w="100%" justify="center" direction="row">
        <Stack direction={"column"} w={["90%", "80%", "65%", "50%", "40%"]}>
          <Stack direction={"row"} w={["90%", "80%", "65%", "50%", "40%"]}>
            <Tooltip label="Learn more about me!">
              <Box
                as="a"
                href="/bio"
                p="6"
                m="4"
                borderWidth="1px"
                flexBasis={["auto", "0"]}
              >
                <Heading>Hi! My name is Chris Zhang</Heading>
                <Text>
                  I want to{" "}
                  <Link href="/save-the-world" color={colors.blue}>
                    save the world.
                  </Link>
                </Text>
              </Box>
            </Tooltip>
            <Tooltip label="See my projects!">
              <Box
                as="a"
                href="/projects"
                p="6"
                m="4"
                borderWidth="1px"
                flexBasis={["auto", "0"]}
              >
                <Heading as="h3" size="lg" mb="2">
                  TheFantasyAnalyst &larr;
                </Heading>
                <Text fontSize="lg">
                  I suck at fantasy football. So I made an app that tells me why
                  I suck at fantasy football. <br /> <br />
                  It's filled with innovative metrics like an automatic lineup
                  optimizer, an adjusted one-vs-all record, and a full-league
                  redraft.
                </Text>
              </Box>
            </Tooltip>
          </Stack>
          <Stack direction={"row"} w={["90%", "80%", "65%", "50%", "40%"]}>
            <Box
              as="a"
              href="/bio"
              p="6"
              m="4"
              borderWidth="1px"
              flexBasis={["auto", "0"]}
            >
              <Heading>The World is Dying</Heading>
              <Text>
                I want to{" "}
                <Link href="/save-the-world" color={colors.blue}>
                  save the world.
                </Link>
              </Text>
            </Box>
            <Box
              as="a"
              href="/projects"
              p="6"
              m="4"
              borderWidth="1px"
              flexBasis={["auto", "0"]}
            >
              <Heading as="h3" size="lg" mb="2">
                TheFantasyAnalyst &larr;
              </Heading>
              <Text fontSize="lg">
                I suck at fantasy football. So I made an app that tells me why I
                suck at fantasy football. <br /> <br />
                It's filled with innovative metrics like an automatic lineup
                optimizer, an adjusted one-vs-all record, and a full-league
                redraft.
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Flex>
    </Fragment>
  );
}
