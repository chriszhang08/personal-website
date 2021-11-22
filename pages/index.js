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
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);

export default function Home() {
  return (
    <Fragment>
      <Stack direction={"row"} justifyContent="space-evenly">
        <MotionFlex
          as="a"
          href="/bio"
          width="300px"
          height="300px"
          flexDirection="column"
          textAlign="center"
          justifyContent="center"
          borderRadius="50%"
          padding="5"
          bg="white"
          drag
          dragConstraints={{ left: -100, right: 1000, top: -100, bottom: 100 }}
        >
          {/* add button to go to bio page */}
          {/* on click make it flip */}
          <Text fontSize="3xl" fontWeight="bold">
            Creativity
          </Text>
        </MotionFlex>
        <MotionFlex
          as="a"
          href="/save-the-world"
          border="1px"
          width="300px"
          height="300px"
          flexDirection="column"
          textAlign="center"
          justifyContent="center"
          borderRadius="50%"
          drag
          dragConstraints={{ left: -600, right: 600, top: -100, bottom: 100 }}
        >
          <Text fontSize="3xl" fontWeight="bold">
            Empathy
          </Text>
        </MotionFlex>
        <MotionFlex
          as="a"
          href="/projects"
          border="1px"
          width="20%"
          flexDirection="column"
          textAlign="center"
          justifyContent="center"
          borderRadius="50%"
          width="300px"
          height="300px"
          drag
          dragConstraints={{ left: -1000, right: 100, top: -100, bottom: 100 }}
        >
          <Text fontSize="3xl" fontWeight="bold">
            Persistence
          </Text>
        </MotionFlex>

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
