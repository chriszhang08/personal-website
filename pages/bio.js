import utilStyles from "../styles/utils.module.css";
import {
  ChakraProvider,
  Text,
  Box,
  Stack,
  Heading,
  Flex,
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
        </Stack>
      </Flex>
    </Fragment>
  );
}
