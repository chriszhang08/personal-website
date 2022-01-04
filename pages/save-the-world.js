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

const MotionList = motion(List);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);
const MotionIcon = motion(IconButton);

const toggleArrowVariants = {
  open: { rotate: -90 },
  closed: { rotate: 0, transition: { duration: 0.2 } },
};

export default function SaveTheWorld() {
  const [areOpen, setAreOpen] = useState([false, false, false]);
  const toggleOpenFirst = () =>
    setAreOpen([!areOpen[0], areOpen[1], areOpen[2]]);
  const toggleOpenSecond = () =>
    setAreOpen([areOpen[0], !areOpen[1], areOpen[2]]);
  const toggleOpenThird = () =>
    setAreOpen([areOpen[0], areOpen[1], !areOpen[2]]);

  return (
    <Fragment>
      <Flex
        w="100%"
        justify="center"
        direction="row"
        bg={colors.cloudBlue}
        paddingY={8}
      >
        <Stack w={["90%", "80%", "65%", "50%", "40%"]}>
          <Heading>Climate Change is today's problem.</Heading>
          <Text>
            Our tomorrow is in danger. Temperatures have risen by about 1.1°C
            since the 1850s. At this point, certain extreme weather consequences
            are{" "}
            <Tooltip label="changing rainfall patterns, melting of Arctic ice, acidification of oceans to name a few">
              <a
                href="https://news.un.org/en/story/2021/08/1097362"
                style={{ color: "white" }}
              >
                irreversible
              </a>
            </Tooltip>
            . But there are many extreme climate situations that we can still
            prevent.
          </Text>
          <Heading>Here are things you can do to help save the world.</Heading>
          <AnimateSharedLayout>
            <MotionList
              layout
              onClick={toggleOpenFirst}
              initial={{ borderRadius: 10 }}
            >
              <MotionFlex layout>
                <MotionIcon
                  icon={<AiOutlineDown />}
                  size="24px"
                  variant="unstyled"
                  variants={toggleArrowVariants}
                  initial="open"
                  animate={areOpen[0] ? "closed" : "open"}
                />
                <Heading as="h4" size="md">
                  Eliminate food waste.
                </Heading>
              </MotionFlex>
              <AnimatePresence>
                {areOpen[0] && (
                  <MotionText
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Simply growing the amount of food necessary to feed 7
                    billion people contributes{" "}
                    <Tooltip label="if this waste was its own country, it would be the world's 3rd most polluting country">
                      <a
                        href="https://www.universityofcalifornia.edu/longform/what-you-need-know-about-food-waste-and-climate-change"
                        style={{ color: "white" }}
                      >
                        6.7%
                      </a>
                    </Tooltip>{" "}
                    of the worlds carbon emissions. In the US, 85% of food waste
                    occurs in stores, restaurants and homes. By throwing away
                    food, not only does the energy used to make the food get
                    wasted, but the decay of foods emits more greenhouse gasses.
                    Not to mention, it disrespects the nature of the global food
                    insecurity problem. How hard could it be to just buy and eat
                    what you are able to?
                  </MotionText>
                )}
              </AnimatePresence>
            </MotionList>
            <MotionList
              layout
              onClick={toggleOpenSecond}
              initial={{ borderRadius: 10 }}
            >
              <MotionFlex layout>
                <MotionIcon
                  icon={<AiOutlineDown />}
                  size="24px"
                  variant="unstyled"
                  variants={toggleArrowVariants}
                  initial="open"
                  animate={areOpen[1] ? "closed" : "open"}
                />
                <Heading as="h4" size="md">
                  Know where to throw.
                </Heading>
              </MotionFlex>
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
                    <Tooltip label="recycling plastics has many restrictions, which varies between who collects your recycling">
                      <a
                        href="https://environment.co/how-much-recycling-actually-gets-recycled/"
                        style={{ color: "white" }}
                      >
                        recyclable
                      </a>
                    </Tooltip>{" "}
                    plastic was recycled. The rest of the recyclable plastic
                    gets thrown out. Read up on your local recycling guidelines
                    and take an extra second to properly sort your trash. Ann
                    Arbor's recycling guidelines can be found here.
                  </MotionText>
                )}
              </AnimatePresence>
            </MotionList>
            <MotionList
              layout
              onClick={toggleOpenThird}
              initial={{ borderRadius: 10 }}
            >
              <MotionFlex layout>
                <MotionIcon
                  icon={<AiOutlineDown />}
                  size="24px"
                  variant="unstyled"
                  variants={toggleArrowVariants}
                  initial="open"
                  animate={areOpen[2] ? "closed" : "open"}
                />
                <Heading as="h4" size="md">
                  Reduce energy waste.
                </Heading>
              </MotionFlex>
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
            <MotionList layout>
              <MotionFlex layout>
                <MotionIcon
                  icon={<AiOutlineDown />}
                  size="24px"
                  variant="unstyled"
                  variants={toggleArrowVariants}
                  initial="open"
                  animate={areOpen[3] ? "closed" : "open"}
                />
                <Heading as="h4" size="md">
                  Eat more sustainable food options.
                </Heading>
              </MotionFlex>
            </MotionList>
            <MotionList layout>
              <MotionHeading as="h4" size="md" layout>
                Respect and protect nature.
              </MotionHeading>
            </MotionList>
            <MotionList layout>
              <MotionHeading as="h4" size="md" layout>
                Reduce, reuse and recycle.
              </MotionHeading>
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
  );
}
