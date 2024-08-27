import utilStyles from "../styles/utils.module.css";
import {
  Text,
  Stack,
  Flex, Image,
} from "@chakra-ui/react";
import React, {Fragment, FC, useState} from "react";
import colors from "../styles/config/colors";
import {motion, useMotionValue, useTransform, useSpring} from "framer-motion";
import Head from "next/head";

const MotionFlex = motion(Flex);
const MotionImage = motion(Image);


export default function Home() {
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
      <div>
        { /* LOGO */}
        <a href="/gallery">
          <MotionImage
            src="/logo.PNG"
            height={75}
            width={150}
            position="absolute"
            bottom="0"
            right="0"
            margin="10px"
            whileTap={{ scale: 0.8 }}
            _hover={{ filter: "brightness(0) invert(1)" }}
          />
        </a>
        <Stack
          direction={"row"}
          justifyContent="space-evenly"
          alignItems="center"
          height="100vh"
        >
          <MotionFlex
            width="275px"
            height="275px"
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
            // onMouseEnter={() => setFlip(false)}
            // onMouseLeave={() => setFlip(true)}
            _hover={{color: "#ffffff"}}
          >
            <Text
              as="a"
              href="/projects"
              fontSize="3xl"
              fontWeight="bold"
              textAlign="center"
            >
              Workshop
            </Text>
          </MotionFlex>
          <MotionFlex
            width="330px"
            height="330px"
            flexDirection="column"
            textAlign="center"
            justifyContent="center"
            borderRadius="50%"
            padding="5"
            boxShadow="lg"
            drag
            dragConstraints={{left: -600, right: 600, top: -100, bottom: 100}}
            bgGradient="linear(to-b, #00cccc, #007c9b)"
            transition={{
              duration: 0.7,
              type: "spring",
              damping: 20,
              stiffness: 80,
            }}
            position="relative"
            top="85px"
            right="10px"
            // onMouseEnter={() => setFlip2(false)}
            // onMouseLeave={() => setFlip2(true)}
            _hover={{color: "#ffffff"}}
          >
            <Text
              as="a"
              href="/save-the-world"
              fontSize="3xl"
              fontWeight="bold"
              textAlign="center"
            >
              Save the World
            </Text>
          </MotionFlex>
          <MotionFlex
            width="200px"
            height="200px"
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
              top: -200,
              bottom: 200,
            }}
            transition={{
              duration: 0.7,
              type: "spring",
              damping: 20,
              stiffness: 80,
            }}
            position="relative"
            top="-150px"
            // onMouseEnter={() => setFlip3(false)}
            // onMouseLeave={() => setFlip3(true)}
            _hover={{color: "#ffffff"}}
          >
            <Text
              as="a"
              href="/bio"
              fontSize="xl"
              fontWeight="bold"
              textAlign="center"
            >
              About me
            </Text>
          </MotionFlex>
        </Stack>
      </div>
    </>
  );
}
