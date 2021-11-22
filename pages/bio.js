import utilStyles from "../styles/utils.module.css";
import {
  ChakraProvider,
  Text,
  Box,
  Stack,
  Heading,
  Flex,
  List,
  ListItem,
  UnorderedList,
  Tooltip,
} from "@chakra-ui/react";
import { Fragment } from "react";

export default function Bio() {
  return (
    <Fragment>
      <Flex w="100%" justify="center" direction="row">
        <Stack direction={"column"} w={["90%", "80%", "65%", "50%", "40%"]}>
          <Heading>Hi! My name is Chris Zhang</Heading>
          <Text>
            Creativity. Persistence. Empathy. These are the core values that
            build my foundation. Upon these values, I build skills like computer
            programming and leadership in order to fulfill my personal vision of
            leaving a positive, lasting impact on the world around me. I look
            forward to building more skills and gaining new experiences to
            better enable me to fulfill my personal vision. Currently, those
            skills and values have translated into my teaching career at
            theCoderSchool - Plymouth location. I work with kids aged 5-18
            individually with a personalized STEM curriculum that is
            specifically adapted to their learning styles and interests. I find
            this job especially rewarding as I am able to witness childhood
            curiosity blossom into unique and exciting projects. I am especially
            interested in using machine learning and artificial intelligence to
            find various solutions to the imminent climate crisis our generation
            faces.
          </Text>
          <Heading>What I'm learning</Heading>
          <Stack direction="row" justify="space-evenly">
            <Stack direction="column">
              <Heading as="h2" size="md">
                Fall 2021
              </Heading>
              <UnorderedList>
                <Tooltip
                  label="Programming and Intro to Data Structures"
                  placement="left"
                >
                  <ListItem>EECS 280</ListItem>
                </Tooltip>
                <Tooltip label="Discrete Mathematics" placement="left">
                  <ListItem>EECS 203</ListItem>
                </Tooltip>
                <Tooltip label="Introduction to Sociology" placement="left">
                  <ListItem>SOC 100</ListItem>
                </Tooltip>
                <Tooltip
                  label="Introduction to Intergroup Dialogues"
                  placement="left"
                >
                  <ListItem>SOC 122</ListItem>
                </Tooltip>
              </UnorderedList>
            </Stack>
            <Stack direction="column">
              <Heading as="h2" size="md">
                Winter 2022
              </Heading>
              <UnorderedList>
                <Tooltip
                  label="Data Structures and Algorithms"
                  placement="left"
                >
                  <ListItem>EECS 281</ListItem>
                </Tooltip>
                <Tooltip label="Statics and Dynamics" placement="left">
                  <ListItem>CEE 211</ListItem>
                </Tooltip>
                <Tooltip
                  label="Sustainable Engineering Principles"
                  placement="left"
                >
                  <ListItem>CEE 265</ListItem>
                </Tooltip>
                <Tooltip label="Organic Chemistry I" placement="left">
                  <ListItem>CHEM 210</ListItem>
                </Tooltip>
              </UnorderedList>
            </Stack>
          </Stack>
          <Heading>Hobbies, twitch.</Heading>
          <Heading>Acknowledgements</Heading>
          <Text>
            I wouldn't be who I am without these very influential people in my
            life. My parents. Raj Patel. Mrs. Maguire. Mrs. Franchi.
          </Text>
          <Heading>What I'm listening to right now</Heading>
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1EpApgs18Dj6HV?utm_source=generator&amp;theme=0"
            width="100%"
            height="380"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </Stack>
      </Flex>
    </Fragment>
  );
}
