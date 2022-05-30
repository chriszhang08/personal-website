import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import {
  chakra,
  ChakraProvider,
  Text,
  Box,
  Stack,
  Heading,
  Link,
  Flex,
} from "@chakra-ui/react";
import { Fragment, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import colors from "../styles/config/colors";
import { useInView } from "react-intersection-observer";

// TODO implement intersection observer
// idk what the fuck is going on here
const MotionFlex = chakra(motion.div);

const cardVariants = {
  offscreen: {
    y: 200,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const ProjectCard = ({ title, description, link }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("onscreen");
    }
  }, [controls, inView]);

  return (
    <MotionFlex
      ref={ref}
      animate={controls}
      initial="offscreen"
      variants={cardVariants}
      paddingBottom="1rem"
    >
      <Heading
        as="a"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        _hover={{ color: "#ffffff" }}
      >
        {title}
      </Heading>
      <Text>{description}</Text>
      {/* <Text>Video demonstration of the app</Text> */}
    </MotionFlex>
  );
};

const fantasyDescription = `Fantasy football is hard. Just last year, I had 5 injured players
on my team! Its a miracle I didn't do my leagues last place
punishment. But how come my team - which was by far the worst -
didn't do a punishment? This project explores that very question
and more. TheFantasyAnalyst is a fantasy football analysis tool
that analyzes your league's data to help you reach innovative
hindsight analysis. It includes metrics like a one-vs-all record,
a combined head-to-head record, an automatic lineup optimizer, a
fantasy redraft, and more. This app fits perfectly into the
multibillion dollar competitive culture that fantasy football
endorses and enables a greater range of fairness in the unjust
world that is sports.`;

const chessDescription = `"Chess is one of the few arts where composition takes place
simultaneously with performance." - Garry Kasparov. Chess is a
beautiful dance of logic, strategy, and symbolism. And it's a
nightmare to code. This project was the culmination of my AP
Computer Science A course, as I explored the universe of
possibility that could be built with a computer. This project was
coded solely in Java, using the Swing library to create a
window-based GUI.`;

const mlmusicDescription = `  Music is one of my extracurricular passions. Having played piano for over 12
years, I've explored various genres and music. The most fascinating aspect of
music, however, is its intersection with math - and hence computer science. I
wanted to explore this intersection further, and use computer science to
analyze the data that makes music so damn good. The project has since changed
direction multiple times since its initial ideation, but has now taken the
form of a full stack website that uses machine learning to categorize and
classify all genres of music. The front end is coded in React.js, while the
backend is coded in Python.`;

const bettingDescription = `  This is the first project that I was contracted to do. This means that it was
my intro class to the complicated world of software engineering. The goal of
the project is to dynamically scrape and aggregate sports betting data across
8 different websites, and compare them on a google sheet. I did this with a
partner, and we were given multiple deadlines - each with its own deliverable.
The hardest, but most rewarding part of the project, was the business-minded
approach we had to integrate into the pseudocode. What is the fastest way to
update the data for the client? How can we make the user interface more
intuitive for a non-engineer? The project was coded in Python, utilizing
Selenium, beautifulSoup, and gspread as libraries.`;

export default function Projects() {
  return (
    <>
      <Head>
        ß<title>Personal Projects</title>
        <meta
          name="description"
          content="List of all computer science personal projects I am doing right now, or have completed."
        />
      </Head>
      <Fragment>
        <Flex w="100%" justify="center" direction="row">
          <Stack direction={"column"} w={["90%", "80%", "65%", "50%", "40%"]}>
            <ProjectCard
              title="BettingScraper"
              description={bettingDescription}
              link="https://github.com/jonahliss/Sports-Betting-Web-Scraper"
            />
            <ProjectCard
              title="ML Music"
              description={mlmusicDescription}
              link="https://github.com/chriszhang08/MLMusic"
            />
            <ProjectCard
              title="TheFantasyAnalyst"
              description={fantasyDescription}
              link="https://github.com/chriszhang08/TheFantasyAnalyst"
            />
            <ProjectCard
              title="Chess GUI"
              description={chessDescription}
              link="https://github.com/chriszhang08/ChessGUI"
            />
            {/* <ProjectCard title="Unfortunately, I don't have any more projects to exhibit :("></ProjectCard> */}
          </Stack>
        </Flex>
      </Fragment>
    </>
  );
}
