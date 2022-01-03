import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import {
  ChakraProvider,
  Text,
  Box,
  Stack,
  Heading,
  Link,
  Flex,
} from "@chakra-ui/react";
import { Fragment, useEffect } from "react";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// idk what the fuck is going on here
const MotionFlex = motion(Flex);
const MotionStack = motion(Stack);
const scrollVariants = {
  hidden: { opacity: 0, y: 1000 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

// function ProjectCard() {
//   const controls = useAnimation();
//   const [ref, inView] = useInView();
//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);
//   return (
//     <MotionFlex>
//       <Heading
//         as="a"
//         href="https://github.com/chriszhang08/MLMusic"
//         ref={ref}
//         animate={controls}
//         initial="hidden"
//         variants={squareVariants}
//       >
//         ML Music
//       </Heading>
{
  /* <Text>
  Music is one of my extracurricular passions. Having played piano for over 14
  years, I've explored various genres and music. The most fascinating aspect of
  music, however, is its intersection with math - and hence computer science. I
  wanted to explore this intersection further, and use computer science to
  analyze the data that makes music so damn good. The project has since changed
  direction multiple times since its initial ideation, but has now taken the
  form of a full stack website that uses machine learning to categorize and
  classify all genres of music. The front end is coded in React.js, while the
  backend is coded in Python.
</Text>; */
}
{
  /* <Text>
  This is the first project that I was contracted to do. This means that it was
  my intro class to the complicated world of software engineering. The goal of
  the project is to dynamically scrape and aggregate sports betting data across
  8 different websites, and compare them on a google sheet. I did this with a
  partner, and we were given multiple deadlines - each with its own deliverable.
  The hardest, but most rewarding part of the project, was the business-minded
  approach we had to integrate into the pseudocode. What is the fastest way to
  update the data for the client? How can we make the user interface more
  intuitive for a non-engineer? The project was coded in Python, utilizing
  Selenium, beautifulSoup, and gspread as libraries.
</Text>; */
}
//     </MotionFlex>
//   );
// }

export default function Projects() {
  return (
    <Fragment>
      <Flex w="100%" justify="center" direction="row">
        <MotionStack
          direction={"column"}
          w={["90%", "80%", "65%", "50%", "40%"]}
          variants={scrollVariants}
          initial="hidden"
          animate="visible"
        >
          <Heading
            as="a"
            href="https://github.com/chriszhang08/TheFantasyAnalyst"
          >
            TheFantasyAnalyst
          </Heading>
          <Text>
            Fantasy football is hard. Just last year, I had 5 injured players on
            my team! Its a miracle I didn't do my leagues last place punishment.
            But how come my team - which was by far the worst - didn't do a
            punishment? This project explores that very question and more.
            TheFantasyAnalyst is a fantasy football analysis tool that analyzes
            your league's data to help you reach innovative hindsight analysis.
            It includes metrics like a one-vs-all record, a combined
            head-to-head record, an automatic lineup optimizer, a fantasy
            redraft, and more. This app fits perfectly into the multibillion
            dollar competitive culture that fantasy football endorses and
            enables a greater range of fairness in the unjust world that is
            sports.
          </Text>
          <Text>Video demonstration of the app</Text>
          <Heading as="a" href="https://github.com/chriszhang08/ChessGUI">
            Chess GUI
          </Heading>
          <Text>
            "Chess is one of the few arts where composition takes place
            simultaneously with performance." - Garry Kasparov. Chess is a
            beautiful dance of logic, strategy, and symbolism. And it's a
            nightmare to code. This project was the culmination of my AP
            Computer Science A course, as I explored the universe of possibility
            that could be built with a computer. This project was coded solely
            in Java, using the Swing library to create a window-based GUI.
          </Text>
          <Heading>
            Unfortunately, I don't have any more projects to exhibit :(
          </Heading>
        </MotionStack>
      </Flex>
    </Fragment>
  );
}
