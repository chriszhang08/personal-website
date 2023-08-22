import {
  Heading,
  Text,
  Link,
  Stack,
  Flex,
  Tooltip,
  List,
  IconButton,
} from "@chakra-ui/react";
import { Fragment, useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import colors from "../styles/config/colors";
import { AiOutlineDown } from "react-icons/ai";
import Head from "next/head";

const MotionList = motion(List);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);
const MotionIcon = motion(IconButton);

const toggleArrowVariants = {
  open: { rotate: -90 },
  closed: { rotate: 0, transition: { duration: 0.2 } },
};

const ArrowHeading = ({ heading, isOpen }) => {
  return (
    <>
      <MotionFlex layout>
        <MotionIcon
          icon={<AiOutlineDown />}
          size="24px"
          variant="unstyled"
          variants={toggleArrowVariants}
          initial="open"
          animate={isOpen ? "closed" : "open"}
        />
        <Heading as="h4" size="md">
          {heading}
        </Heading>
      </MotionFlex>
    </>
  );
};

const LinkedTooltip = ({ link, label, content }) => {
  return (
    <Tooltip as="a" label={label}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "white" }}
      >
        {content}
      </a>
    </Tooltip>
  );
};

export default function SaveTheWorld() {
  const [areOpen, setAreOpen] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const toggleOpen1 = () =>
    setAreOpen([
      !areOpen[0],
      areOpen[1],
      areOpen[2],
      areOpen[3],
      areOpen[4],
      areOpen[5],
    ]);
  const toggleOpen2 = () =>
    setAreOpen([
      areOpen[0],
      !areOpen[1],
      areOpen[2],
      areOpen[3],
      areOpen[4],
      areOpen[5],
    ]);
  const toggleOpen3 = () =>
    setAreOpen([
      areOpen[0],
      areOpen[1],
      !areOpen[2],
      areOpen[3],
      areOpen[4],
      areOpen[5],
    ]);
  const toggleOpen4 = () =>
    setAreOpen([
      areOpen[0],
      areOpen[1],
      areOpen[2],
      !areOpen[3],
      areOpen[4],
      areOpen[5],
    ]);
  const toggleOpen5 = () =>
    setAreOpen([
      areOpen[0],
      areOpen[1],
      areOpen[2],
      areOpen[3],
      !areOpen[4],
      areOpen[5],
    ]);
  const toggleOpen6 = () =>
    setAreOpen([
      areOpen[0],
      areOpen[1],
      areOpen[2],
      areOpen[3],
      areOpen[4],
      !areOpen[5],
    ]);

  return (
    <>
      <Head>
        <title>Save the World</title>
        <meta
          name="description"
          content="Personal blog on climate change. Also gives tips on things to lower carbon footprint."
        />
      </Head>
      <Fragment>
        <Flex w="100%" justify="center" direction="row" paddingY={8}>
          <Stack w={["90%", "80%", "65%", "50%", "40%"]}>
            <Heading>Climate Change is today's problem.</Heading>
            <script
              src="https://climateclock.world/widget-v2.js"
              async
            ></script>
            <climate-clock />
            <Text>
              Our tomorrow is in danger. Temperatures have risen by about 1.1°C
              since the 1850s. At this point, certain extreme weather
              consequences are{" "}
              <LinkedTooltip
                link="https://news.un.org/en/story/2021/08/1097362"
                label="changing rainfall patterns, melting of Arctic ice, acidification of oceans to name a few"
                content="irreversible"
              />
              . But there are many extreme climate situations that we can still
              prevent.
            </Text>
            <Heading>
              Here are things you can do to help save the world.
            </Heading>
            <AnimateSharedLayout>
              <MotionList
                layout
                onClick={toggleOpen1}
                initial={{ borderRadius: 10 }}
              >
                <ArrowHeading
                  heading="Eliminate food waste"
                  isOpen={areOpen[0]}
                />
                <AnimatePresence>
                  {areOpen[0] && (
                    <MotionText
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Just the amount of food waste we produce contributes to{" "}
                      <LinkedTooltip
                        link="https://www.universityofcalifornia.edu/longform/what-you-need-know-about-food-waste-and-climate-change"
                        label="if this waste was its own country, it would be the world's 3rd most polluting country"
                        content="6.7%"
                      />{" "}
                      of the worlds carbon emissions. In the US, 85% of food
                      waste occurs in stores, restaurants and homes; the rest of
                      the waste is from farming and distribution. By throwing
                      away food, not only does the energy used to make the food
                      get wasted, but the decay of foods emits{" "}
                      <LinkedTooltip
                        link="https://www.factcheck.org/2018/09/how-potent-is-methane/"
                        label="methane is at least 25 times more potent than carbon dioxide"
                        content="methane"
                      />
                      .
                      <LinkedTooltip
                        link="https://www.healthline.com/nutrition/composting-beginners-guide"
                        label="see if your local municipality has a composting service"
                        content="Composting"
                      />{" "}
                      is a great way to reduce the amount of food waste, and
                      it's pretty easy to do. The most effective way, however,
                      is just to buy what you can eat and watch out for those
                      expiration dates.
                    </MotionText>
                  )}
                </AnimatePresence>
              </MotionList>
              <MotionList
                layout
                onClick={toggleOpen2}
                initial={{ borderRadius: 10 }}
              >
                <ArrowHeading
                  heading="Know where to throw"
                  isOpen={areOpen[1]}
                />
                <AnimatePresence>
                  {areOpen[1] && (
                    <MotionText
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      While recycling is a great way to conserve natural
                      resources, if not done properly, it can actually harm the
                      environment. In 2018, just over 8 percent of the{" "}
                      <LinkedTooltip
                        link="https://www.epa.gov/facts-and-figures-about-materials-waste-and-recycling/plastics-material-specific-data"
                        label="recycling plastics has many restrictions, which varies between who collects your recycling"
                        content="recyclable"
                      />{" "}
                      plastic was recycled. The rest of the recyclable plastic
                      gets thrown out. Read up on your local recycling
                      guidelines and take an extra second to properly sort your
                      trash. Ann Arbor's recycling guidelines can be found{" "}
                      <LinkedTooltip
                        link="https://www.recycleannarbor.org/a-z-recycling-guide"
                        label="red solo cups and many other plastic types are NOT recyclable in Ann Arbor"
                        content="here"
                      />
                      .
                    </MotionText>
                  )}
                </AnimatePresence>
              </MotionList>
              <MotionList
                layout
                onClick={toggleOpen3}
                initial={{ borderRadius: 10 }}
              >
                <ArrowHeading
                  heading="Reduce energy waste."
                  isOpen={areOpen[2]}
                />
                <AnimatePresence>
                  {areOpen[2] && (
                    <MotionText
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Household energy and utility usage accounts for 13% of US
                      greenhouse emissions.{" "}
                    </MotionText>
                  )}
                </AnimatePresence>
              </MotionList>
              <MotionList
                layout
                onClick={toggleOpen4}
                initial={{ borderRadius: 10 }}
              >
                <ArrowHeading
                  heading="Eat more sustainable food options"
                  isOpen={areOpen[3]}
                />
              </MotionList>
              <MotionList
                layout
                onClick={toggleOpen5}
                initial={{ borderRadius: 10 }}
              >
                <ArrowHeading
                  heading="Respect and protect nature"
                  isOpen={areOpen[4]}
                />
                <AnimatePresence>
                  {areOpen[4] && (
                    <MotionText
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Thankfully, 13% of US greenhouse gas emissions are
                      actually sucked up by US{" "}
                      <LinkedTooltip
                        link="https://drawdown.org/sectors/land-sinks#:~:text=Land%20can%20therefore%20be%20a,caused%20emissions%20to%20Earth%E2%80%94literally"
                        label="land sinks sequester 24% of global emissions"
                        content="forests and other lands"
                      />
                      . Carbon sequestration is a great way for us to fix the
                      climate crisis forever, but part of that means we have to
                      let nature be nature. Just like we are in a global
                      economy, ecosystems are interconnected and delicate in
                      their own way. Littering in Ann Arbor can lead to
                      pollution of protected{" "}
                      <LinkedTooltip
                        link="https://www.michigan.gov/egle/about/organization/Water-Resources/Wetlands"
                        label="disruption of these ecosystems can lead to ripple effects of ecosystems around the world"
                        content="wetlands"
                      />{" "}
                      - one of the most productive ecosystems in the world. And
                      of course, you have to save the turtles.
                    </MotionText>
                  )}
                </AnimatePresence>
              </MotionList>
              <MotionList
                layout
                onClick={toggleOpen6}
                initial={{ borderRadius: 10 }}
              >
                <ArrowHeading
                  heading="Reduce, reuse and recycle."
                  isOpen={areOpen[5]}
                />
              </MotionList>
              <MotionText layout>
                Please consider donating to{" "}
                <Link href="https://theoceancleanup.com/donate/">
                  The Ocean Cleanup
                </Link>
              </MotionText>
            </AnimateSharedLayout>
          </Stack>
        </Flex>
      </Fragment>
    </>
  );
}
