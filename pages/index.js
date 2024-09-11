import utilStyles from "../styles/utils.module.css";
import {
  Text,
  Stack,
  Flex, Image,
} from "@chakra-ui/react";
import React, {Fragment, FC, useState} from "react";
import colors from "../styles/config/colors";
import {motion, useMotionValue, useTransform, useSpring, useTime} from "framer-motion";
import Head from "next/head";

const MotionFlex = motion(Flex);
const MotionImage = motion(Image);


// Create a custom BackgroundDiv component
const BackgroundDiv = ({children}) => {
  return (
    <div
      style={{
        backgroundImage: "url('/space.jpg')", // Replace with the actual path of the starry background
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        color: "white", // Text color for better visibility
      }}
    >
      {children}
    </div>
  );
};

export default function Home() {

  const transitionValues = {
    duration: 2,
    repeat: Infinity,
  };
  return (
    <>
      <Head>
        <title>Chris Zhang</title>
        <meta
          name="description"
          content="Personal portfolio website for Chris Zhang, a computer science
          graduate from the University of Michigan."
        />
      </Head>
      <BackgroundDiv>
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
            whileTap={{scale: 0.8}}
            _hover={{filter: "brightness(0) invert(1)"}}
          />
        </a>
        <Stack
          direction={"row"}
          justifyContent="space-evenly"
          alignItems="center"
          height="100vh"
        >
          <motion.div
            style={{
              width: "275px",
              height: "275px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              borderRadius: "50%",
              padding: "5px",
              background: "linear-gradient(to bottom, #f0efe2, #8c8c88)",
              boxShadow: "lg",
              cursor: "pointer",
            }}
            transition={{
              y: transitionValues,
            }}
            animate={{
              y: [-10, 10, -10],
            }}
            whileHover={{color: "#ffffff"}}
            whileTap={{scale: 0.95}}
          >
            <a href="/projects" style={{fontSize: "3xl", fontWeight: "bold"}}>
              Workshop
            </a>
          </motion.div>
          <motion.div
            style={{
              width: "330px",
              height: "330px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              borderRadius: "50%",
              padding: "5px",
              boxShadow: "lg",
              background: "linear-gradient(to bottom, #00cccc, #007c9b)",
              position: "relative",
              top: "85px",
              right: "10px",
              cursor: "pointer",
            }}
            transition={{
              y: transitionValues,
            }}
            animate={{
              y: [-10, 10, -10],
            }}
            whileHover={{color: "#ffffff"}}
            whileTap={{scale: 0.95}}
          >
            <a href="/save-the-world" style={{fontSize: "3xl", fontWeight: "bold"}}>
              Save the World
            </a>
          </motion.div>

          {/* Second MotionFlex converted to motion.div */}
          <motion.div
            style={{
              width: "200px",
              height: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              borderRadius: "50%",
              padding: "5px",
              background: "linear-gradient(to bottom, #fff474, #f06553)",
              boxShadow: "lg",
              position: "relative",
              top: "-150px",
              cursor: "pointer",
            }}
            transition={{
              y: transitionValues,
            }}
            animate={{
              y: [-10, 10, -10],
            }}
            whileHover={{color: "#ffffff"}}
            whileTap={{scale: 0.95}}
          >
            <a href="/bio" style={{fontSize: "xl", fontWeight: "bold"}}>
              About me
            </a>
          </motion.div>
        </Stack>
      </BackgroundDiv>
    </>
  );
}
