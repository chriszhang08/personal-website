import utilStyles from "../styles/utils.module.css";
import {
  ChakraProvider,
  Text,
  Stack,
  Heading,
  Flex,
  ListItem,
  UnorderedList,
  Tooltip,
  Grid,
  GridItem,
  Button,
  Image,
} from "@chakra-ui/react";
import { Fragment } from "react";
import colors from "../styles/config/colors";
import { useState } from "react";
import Modal from "../components/spotify-playlist/modal";

export default function Bio() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <Flex w="100%" justify="center" direction="row" padding={8} wrap="wrap">
        <Grid
          w={["90%", "80%"]}
          templateColumns={["100%", "70% 30%"]}
          templateRows="repeat(15, 100px)"
          bgColor={colors.cloudBlue}
          borderWidth={8}
          borderColor={colors.cloudBlue}
          gap="8px"
          borderRightWidth={[8, 16]}
        >
          <GridItem rowSpan={1} colSpan={2} padding={8}>
            <Heading>Hi! My name is Chris Zhang</Heading>
          </GridItem>
          <GridItem
            rowSpan={5}
            colSpan={1}
            padding={8}
            bgColor={colors.cloudPink}
          >
            <Heading size="md">Personal Statement</Heading>
            <Text>
              Creativity. Persistence. Empathy. These are the core values that
              build my foundation. Upon these values, I build skills like
              computer programming and leadership in order to fulfill my
              personal vision of leaving a positive, lasting impact on the world
              around me. <br />
              Currently, those skills and values have translated into my
              teaching career at theCoderSchool - Plymouth location. I work with
              kids aged 5-18 individually with a personalized STEM curriculum
              that is specifically adapted to their learning styles and
              interests. I find this job especially rewarding as I am able to
              witness childhood curiosity blossom into unique and exciting
              projects. I am especially interested in using machine learning and
              artificial intelligence to find various solutions to the imminent
              climate crisis our generation faces.
            </Text>
          </GridItem>
          <GridItem rowSpan={3} colSpan={1} padding={8}>
            <Image></Image>
          </GridItem>
          <GridItem rowSpan={3} padding={8} bgColor={colors.cloudPink}>
            <Heading size="md">What I'm learning</Heading>
            <Stack direction="row" justify="space-evenly" marginTop={6}>
              <Stack direction="column">
                <Heading size="sm">Fall 2021</Heading>
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
                <Heading size="sm">Winter 2022</Heading>
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
            <Button marginTop={5} size="sm" width="100%">
              View Transcript
            </Button>
          </GridItem>
          <GridItem rowSpan={3} padding={8} bgColor={colors.cloudPink}>
            <Stack>
              <Heading size="md">Other things I love.</Heading>
              <UnorderedList>
                <ListItem>
                  I love music so so much. My favorite piano song to play is
                  "Claire de Lune" by Debussy. I listen to all my music on{" "}
                  <Tooltip label="see what I'm listening to right now">
                    <a
                      style={{ color: "white" }}
                      onClick={() => {
                        setShowModal(!showModal);
                      }}
                    >
                      Spotify
                    </a>
                  </Tooltip>
                  <Modal showModal={showModal} setShowModal={setShowModal} />
                </ListItem>
              </UnorderedList>
            </Stack>
          </GridItem>
        </Grid>
      </Flex>
    </Fragment>
  );
}
