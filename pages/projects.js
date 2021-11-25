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
import { useInView } from "react-intersection-observer";

const MotionFlex = motion(Flex);
const squareVariants = {
  visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

function ProjectCard() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <MotionFlex>
      <Heading
        as="a"
        href="https://github.com/chriszhang08/MLMusic"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
      >
        ML Music
      </Heading>
      <Text>
        Fantasy football is hard. Just last year, I had 5 injured players on my
        team! Its a miracle I didn't do my leagues last place punishment. But
        how come my team - which was by far the worst - didn't do a punishment?
        This project explores that very question and more. TheFantasyAnalyst is
        a fantasy football analysis tool that analyzes your league's data to
        help you reach innovative hindsight analysis. It includes metrics like a
        one-vs-all record, a combined head-to-head record, an automatic lineup
        optimizer, a fantasy redraft, and more. This app fits perfectly into the
        multibillion dollar competitive culture that fantasy football endorses
        and enables a greater range of fairness in the unjust world that is
        sports.
      </Text>
    </MotionFlex>
  );
}

export default function Projects() {
  return (
    <Fragment>
      <Flex w="100%" justify="center" direction="row">
        <Stack direction={"column"} w={["90%", "80%", "65%", "50%", "40%"]}>
          <ProjectCard />
          <Heading
            as="a"
            href="https://github.com/chriszhang08/TheFantasyAnalyst"
          >
            TheFantasyAnalyst
          </Heading>
          // add gif of fantasy football?
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
        </Stack>
      </Flex>
    </Fragment>
  );
}
