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
            whileHover={{ color: "#ffffff" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.location.href = "https://github.com/chriszhang08";
            }}
          >
            <div style={{ fontSize: "3xl", fontWeight: "bold" }}>
              Workshop
            </div>
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
            onClick={() => {
              router.push("/save-the-world");
            }}
          >
            <div style={{fontSize: "3xl", fontWeight: "bold"}}>
              Save the World
            </div>
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
            onClick={() => {
              router.push("/bio");
            }}
          >
            <div style={{fontSize: "xl", fontWeight: "bold"}}>
              About me
            </div>
          </motion.div>
        </Stack>
      </BackgroundDiv>
    </>
  );
}
