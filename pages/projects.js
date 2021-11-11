import Head from "next/head";
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

export default function Projects() {
  return (
    <Fragment>
      <Flex w="100%" justify="center" direction="row">
        <Stack direction={"column"} w={["90%", "80%", "65%", "50%", "40%"]}>
          <Heading>TheFantasyAnalyst</Heading>
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
        </Stack>
      </Flex>
    </Fragment>
  );
}
