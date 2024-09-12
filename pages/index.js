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
import {useRouter} from "next/navigation";
import Logo from "../components/Logo";

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

  const router = useRouter();

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
        <Logo/>
        <Stack
          direction={"row"}
          justifyContent="space-evenly"
          alignItems="center"
          height="100vh"
        >
          <motion.div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              boxShadow: "lg",
              cursor: "pointer",
            }}
            transition={{
              y: transitionValues,
            }}
            animate={{
              y: [-10, 10, -10],
            }}
            whileHover={{ color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.location.href = "https://github.com/chriszhang08";
            }}
          >
            <Image
              src="/moon.svg"
              alt="Moon Icon"
              width={250}  // Adjust as necessary
              height={250}  // Adjust as necessary
            />
            <div style={{ fontSize: "3xl", fontWeight: "bold" }}>
              Workshop
            </div>
          </motion.div>
          <motion.div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "lg",
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
            whileHover={{ color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              router.push("/save-the-world");
            }}
          >
            <Image
              src="/earth.svg"
              alt="Earth Icon"
              width={350}  // Adjust as necessary
              height={350}  // Adjust as necessary
            />
            <div style={{ fontSize: "3xl", fontWeight: "bold" }}>
              Save the World
            </div>
          </motion.div>

          {/* Second MotionFlex converted to motion.div */}
          <motion.div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
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
            onClick={() => {
              router.push("/bio");
            }}
          >
            <Image
              src="/sun.svg"
              alt="Sun Icon"
              width={200}  // Adjust as necessary
              height={200}  // Adjust as necessary
            />
            <div style={{ fontSize: "3xl", fontWeight: "bold" }}>
              About Me
            </div>
          </motion.div>
        </Stack>
      </BackgroundDiv>
    </>
  );
}
