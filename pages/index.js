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
      <Stack direction={"row"} justifyContent="space-evenly">
        <Flex
          as="a"
          href="/bio"
          border="1px"
          width="20%"
          flexDirection="column"
          textAlign="center"
          justifyContent="center"
          paddingTop="20%"
          paddingBottom="20%"
        >
          <Text transform="rotate(90deg)" fontSize="3xl" fontWeight="bold">
            Creativity
          </Text>
        </Flex>
        <Flex
          as="a"
          href="/save-the-world"
          border="1px"
          width="20%"
          flexDirection="column"
          textAlign="center"
          justifyContent="center"
          paddingTop="20%"
          paddingBottom="20%"
        >
          <Text transform="rotate(90deg)" fontSize="3xl" fontWeight="bold">
            Empathy
          </Text>
        </Flex>
        <Flex
          as="a"
          href="/projects"
          border="1px"
          width="20%"
          flexDirection="column"
          textAlign="center"
          justifyContent="center"
          paddingTop="20%"
          paddingBottom="20%"
        >
          <Text transform="rotate(90deg)" fontSize="3xl" fontWeight="bold">
            Persistence
          </Text>
        </Flex>

        {/* <Stack
            direction="row"
            width={["90%", "80%", "70%", "80%", "90%"]}
            justifyContent="center"
          >
            <Tooltip label="Learn more about me!">
              <Box
                as="a"
                href="/bio"
                padding="6"
                margin="4"
                borderWidth="1px"
                flexBasis="auto"
                alignItems="stretch"
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
                flexBasis="auto"
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
          <Stack direction={"row"} width={["90%", "80%", "70%", "80%", "90%"]}>
            <Box
              as="a"
              href="/bio"
              p="6"
              m="4"
              borderWidth="1px"
              flexBasis="auto"
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
              flexBasis="auto"
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
          </Stack> */}
      </Stack>
    </Fragment>
  );
}
