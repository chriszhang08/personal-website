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
import { motion } from "framer-motion";
import Modal from "../components/spotify-playlist/modal";
import Head from "next/head";

const MotionFlex = motion(Flex);

const CircleDiv = ({
  showShadow,
  setShowShadow,
  radius,
  text,
  textSize,
  color,
  topX,
  leftX,
}) => {
  return (
    <MotionFlex
      borderRadius="50%"
      width={radius}
      height={radius}
      justifyContent="center"
      position="relative"
      top={topX}
      left={leftX}
      bg={color}
      // make box shadow only if the box is hovered
      boxShadow={showShadow ? "md" : ""}
      drag
      dragConstraints={{
        left: -2,
        right: 2,
        top: -2,
        bottom: 2,
      }}
      whileHover={{ scale: 1.2 }}
      // make the div stack on hover
      zIndex={showShadow ? 1 : 0}
      onMouseEnter={() => setShowShadow(true)}
      onMouseLeave={() => setShowShadow(false)}
    >
      <Text alignSelf="center" textAlign="center" fontSize={textSize}>
        {text}
      </Text>
    </MotionFlex>
  );
};

export default function Bio() {
  const [showModal, setShowModal] = useState(false);
  const [showShadow0, setShowShadow0] = useState(false);
  const [showShadow1, setShowShadow1] = useState(false);
  const [showShadow2, setShowShadow2] = useState(false);
  const [showShadow3, setShowShadow3] = useState(false);
  const [showShadow4, setShowShadow4] = useState(false);
  const [showShadow5, setShowShadow5] = useState(false);
  const [showShadow6, setShowShadow6] = useState(false);
  const [showShadow7, setShowShadow7] = useState(false);

  return (
    <>
      <Head>
        <title>About Me</title>
        <meta
          name="description"
          content="More about my passions and interests, and other academic pursuits."
        />
        <meta
          name="author"
          content="Chris Zhang, born in Ann Arbor, Michigan. Raised in Novi, Michigan, attended 
      Novi High School. Currently living in Ann Arbor, Michigan, attending the University of Michigan."
        />
      </Head>
      <Fragment>
        <Flex w="100%" justify="center" direction="row" padding={8} wrap="wrap">
          <Grid
            w={["90%", "1100px"]}
            templateColumns={["100%", "65% 35%"]}
            templateRows="repeat(10, 100px)"
            bgColor={colors.rifle}
            borderWidth={8}
            borderColor={colors.rifle}
            gap="8px"
            borderRightWidth={[8, 16]}
          >
            <GridItem rowSpan={1} colSpan={2} padding={8}>
              <Heading color={colors.sageL}>Hi! My name is Chris Zhang</Heading>
            </GridItem>
            <GridItem
              rowSpan={5}
              colSpan={1}
              padding={8}
              bgColor={colors.khaki}
            >
              <Heading size="md">Personal Statement</Heading>
              <Text paddingTop={3}>
                Creativity. Persistence. Empathy. These are the core values that
                build my foundation. Upon these values, I build skills like
                computer programming and communication in order to fulfill my
                personal vision of leaving a helpful, lasting impact on the
                world around me.
              </Text>
              <Text paddingTop={3}>
                Currently, those skills and values have translated into my
                education at the University of Michigan: College of Engineering.
                I am blessed to be apart of a like-minded community of scholars
                and partiers, ripe with opportunities that allow me to pursue my
                various passions.
              </Text>
              <Text paddingTop={3}>
                I am most passionate about the perilous and imminent climate
                crisis our generation faces. I have set out on a personal
                mission to lower the carbon footprint of businesses and
                governments in a practical and efficient manner. I strongly
                believe in using machine learning and artificial intelligence to
                optimize waste, but I want to learn more about other tools that
                can help us "save the world".
              </Text>
            </GridItem>
            <GridItem rowSpan={3} colSpan={1}>
              <Flex borderWidth={5} borderColor={colors.khaki}>
                <Image src="/propic.PNG" backgroundSize={"cover"} />
              </Flex>
            </GridItem>
            <GridItem rowSpan={3} padding={8} bgColor={colors.khaki}>
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
              <a
                href="https://drive.google.com/file/d/1C8SvnXeyqVhEltF6J4vyvygP-seUyLKh/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  marginTop={5}
                  size="sm"
                  width="100%"
                  bgColor={colors.rifle}
                  textColor={colors.sageL}
                >
                  View Transcript
                </Button>
              </a>
            </GridItem>
            <GridItem rowSpan={4} padding={8} bgColor={colors.khaki}>
              <Stack>
                <Heading size="md">Other things I love.</Heading>
                <UnorderedList>
                  <ListItem paddingTop={2}>
                    I love music so so much. My favorite piano song to play is
                    "Claire de Lune" by Debussy. I listen to all my music on{" "}
                    <Tooltip label="see what I'm listening to right now">
                      <a
                        style={{ color: "white" }}
                        onClick={() => {
                          setShowModal(!showModal);
                        }}
                      >
                        Spotify.
                      </a>
                    </Tooltip>
                    <Modal showModal={showModal} setShowModal={setShowModal} />
                  </ListItem>
                  <ListItem paddingTop={2}>
                    I love watching and playing sports. I am a proud and sad
                    Detroit Lions football fan. Some sports I enjoy playing are
                    football, soccer, and tennis.
                  </ListItem>
                  <ListItem paddingTop={2}>
                    I love video games and board games. I particularly enjoy
                    games that require strategy, like chess and Valorant.
                    Sometimes, I stream what I'm playing on{" "}
                    <Tooltip label="fair warning, I have not streamed in 8 months">
                      <a
                        style={{ color: "white" }}
                        href="https://www.twitch.tv/agentguffy"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Twitch.
                      </a>
                    </Tooltip>
                  </ListItem>
                  <ListItem paddingTop={2}>
                    I love watching movies, especially critically acclaimed
                    thrillers. My favorite movies of all time are "Parasite" and
                    "Looper". They really inspire my artistic{" "}
                    <Tooltip label="by this I mean my home YouTube videos">
                      <a
                        style={{ color: "white" }}
                        href="https://www.youtube.com/channel/UCSfZUAvCvrXOw_VNY4WIVnA"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        side.
                      </a>
                    </Tooltip>
                  </ListItem>
                </UnorderedList>
              </Stack>
            </GridItem>
            <GridItem rowSpan={3} padding={8} bgColor={colors.khaki}>
              {/* TODO make different showShadows */}
              <CircleDiv
                showShadow={showShadow0}
                setShowShadow={setShowShadow0}
                radius={"135px"}
                text="empathy"
                textSize={"2xl"}
                color={colors.rifle}
                topX={"60px"}
                leftX={"95px"}
              ></CircleDiv>
              <CircleDiv
                showShadow={showShadow1}
                setShowShadow={setShowShadow1}
                radius={"116px"}
                text="creativity"
                textSize={"2xl"}
                color={colors.oliveD}
                topX={"-80px"}
                leftX={"-5px"}
              ></CircleDiv>
              <CircleDiv
                showShadow={showShadow2}
                setShowShadow={setShowShadow2}
                radius={"118px"}
                text="persistance"
                textSize={"xl"}
                color={colors.olive}
                topX={"-210px"}
                leftX={"210px"}
              ></CircleDiv>
              <CircleDiv
                showShadow={showShadow3}
                setShowShadow={setShowShadow3}
                radius={"80px"}
                text="sustainability"
                textSize={"xs"}
                color={colors.sage}
                topX={"-220px"}
                leftX={"50px"}
              ></CircleDiv>
              <CircleDiv
                showShadow={showShadow4}
                setShowShadow={setShowShadow4}
                radius={"75px"}
                text="justice"
                color={colors.oliveL}
                topX={"-300px"}
                leftX={"210px"}
              ></CircleDiv>
              <CircleDiv
                showShadow={showShadow5}
                setShowShadow={setShowShadow5}
                radius={"90px"}
                text="advancement"
                textSize={"xs"}
                color={colors.sageL}
                topX={"-525px"}
                leftX={"155px"}
              ></CircleDiv>
              <CircleDiv
                showShadow={showShadow6}
                setShowShadow={setShowShadow6}
                radius={"55px"}
                text="curiosity"
                textSize={"xs"}
                color={colors.sageD}
                topX={"-580px"}
                leftX={"80px"}
              ></CircleDiv>
              <CircleDiv
                showShadow={showShadow7}
                setShowShadow={setShowShadow7}
                radius={"55px"}
                text="accountability"
                textSize={"8px"}
                color={colors.laurel}
                topX={"-640px"}
                leftX={"-5px"}
              ></CircleDiv>
            </GridItem>
          </Grid>
        </Flex>
      </Fragment>
    </>
  );
}
