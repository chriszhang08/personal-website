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
  Button,
} from "@chakra-ui/react";
import { Fragment, FC, useState } from "react";
import colors from "../styles/config/colors";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Head from "next/head";

const MotionFlex = motion(Flex);

export default function Home() {
  const [flip, setFlip] = useState(true);
  const [flip2, setFlip2] = useState(true);
  const [flip3, setFlip3] = useState(true);
  const x = useMotionValue(100);

  return (
    <>
      <Head>
        <title>Chris Zhang</title>
        <meta
          name="description"
          content="Personal portfolio website for Chris Zhang, a computer science 
          environmental engineering major at the University of Michigan."
        />
      </Head>
      <Fragment>
        <Stack
          direction={"row"}
          justifyContent="space-evenly"
          alignItems="center"
          height="66vh"
        >
          <MotionFlex
            width="300px"
            height="300px"
            flexDirection="column"
            textAlign="center"
            justifyContent="center"
            borderRadius="50%"
            padding="5"
            bgGradient="linear(to-b, #f0efe2, #8c8c88)"
            boxShadow="lg"
            drag
            dragConstraints={{
              left: -100,
              right: 1000,
              top: -100,
              bottom: 100,
            }}
            transition={{
              duration: 0.7,
              type: "spring",
              damping: 20,
              stiffness: 80,
            }}
            // TODO: add infinite velocity and bouncing animation
            onMouseEnter={() => setFlip(false)}
            onMouseLeave={() => setFlip(true)}
            _hover={{ color: "#ffffff" }}
          >
            <MotionFlex
              alignSelf="center"
              position="relative"
              top="22%"
              transition={{ duration: 0.7 }}
              initial={{ rotateY: 0 }}
              animate={{ rotateY: flip ? 0 : 180 }}
              sx={{ backfaceVisibility: "hidden" }}
            >
              <Text
                as="a"
                href="/bio"
                fontSize="3xl"
                fontWeight="bold"
                textAlign="center"
              >
                Creativity
              </Text>
            </MotionFlex>
            <MotionFlex
              position="relative"
              top="-5%"
              transition={{ duration: 0.7 }}
              initial={{ rotateY: 180 }}
              animate={{ rotateY: flip ? 180 : 0 }}
              sx={{ backfaceVisibility: "hidden" }}
            >
              <Text
                as="a"
                href="/bio"
                fontSize="sm"
                fontWeight="bold"
                textAlign="center"
              >
                Creativity is an integral part of innovation, and it is the
                foundation of my passions and work interests. Learn more about
                my creative self here.
              </Text>
            </MotionFlex>
          </MotionFlex>
          <MotionFlex
            width="300px"
            height="300px"
            flexDirection="column"
            textAlign="center"
            justifyContent="center"
            borderRadius="50%"
            padding="5"
            boxShadow="lg"
            drag
            dragConstraints={{ left: -600, right: 600, top: -100, bottom: 100 }}
            bgGradient="linear(to-b, #00cccc, #007c9b)"
            transition={{
              duration: 0.7,
              type: "spring",
              damping: 20,
              stiffness: 80,
            }}
            onMouseEnter={() => setFlip2(false)}
            onMouseLeave={() => setFlip2(true)}
            _hover={{ color: "#ffffff" }}
          >
            <MotionFlex
              alignSelf="center"
              position="relative"
              top="22%"
              transition={{ duration: 0.7 }}
              initial={{ rotateY: 0 }}
              animate={{ rotateY: flip2 ? 0 : 180 }}
              sx={{ backfaceVisibility: "hidden" }}
            >
              <Text
                as="a"
                href="/save-the-world"
                fontSize="3xl"
                fontWeight="bold"
                textAlign="center"
              >
                Empathy
              </Text>
            </MotionFlex>
            <MotionFlex
              position="relative"
              top="-5%"
              transition={{ duration: 0.7 }}
              initial={{ rotateY: 180 }}
              animate={{ rotateY: flip2 ? 180 : 0 }}
              sx={{ backfaceVisibility: "hidden" }}
            >
              <Text
                as="a"
                href="/save-the-world"
                fontSize="sm"
                fontWeight="bold"
                textAlign="center"
              >
                Empathy is the heart of my character. My sole purpose in life is
                to help others, and inevitably, this planet. Learn more about
                the climate crisis here.
              </Text>
            </MotionFlex>
          </MotionFlex>
          <MotionFlex
            width="300px"
            height="300px"
            flexDirection="column"
            textAlign="center"
            justifyContent="center"
            borderRadius="50%"
            padding="5"
            bgGradient="linear(to-b, #fff474, #f06553)"
            boxShadow="lg"
            drag
            dragConstraints={{
              left: -1000,
              right: 100,
              top: -100,
              bottom: 100,
            }}
            transition={{
              duration: 0.7,
              type: "spring",
              damping: 20,
              stiffness: 80,
            }}
            onMouseEnter={() => setFlip3(false)}
            onMouseLeave={() => setFlip3(true)}
            _hover={{ color: "#ffffff" }}
          >
            <MotionFlex
              alignSelf="center"
              position="relative"
              top="22%"
              transition={{ duration: 0.7 }}
              initial={{ rotateY: 0 }}
              animate={{ rotateY: flip3 ? 0 : 180 }}
              sx={{ backfaceVisibility: "hidden" }}
            >
              <Text
                as="a"
                href="/projects"
                fontSize="3xl"
                fontWeight="bold"
                textAlign="center"
              >
                Persistence
              </Text>
            </MotionFlex>
            <MotionFlex
              position="relative"
              top="-5%"
              transition={{ duration: 0.7 }}
              initial={{ rotateY: 180 }}
              animate={{ rotateY: flip3 ? 180 : 0 }}
              sx={{ backfaceVisibility: "hidden" }}
            >
              <Text
                as="a"
                href="/projects"
                fontSize="sm"
                fontWeight="bold"
                textAlign="center"
              >
                Persistence is the cornerstone of my work ethic. This translates
                notably into my personal passion projects. Learn more about
                these projects here.
              </Text>
            </MotionFlex>
          </MotionFlex>
        </Stack>
      </Fragment>
    </>
  );
}
