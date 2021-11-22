import { Heading, Text, Link, Stack, Flex } from "@chakra-ui/react";
import { Fragment } from "react";

export default function SaveTheWorld() {
  return (
    <Fragment>
      <Flex w="100%" justify="center" direction="row">
        <Stack w={["90%", "80%", "65%", "50%", "40%"]}>
          <Heading>Climate Change is irreversible.</Heading>
          <Text>
            And our future is in danger. In just the past few decades, we have
            experienced worsened extreme weather events, an uptick in endangered
            species, and more mosquitos! Here's 100 sources proving and
            detailing the severity of this problem.
          </Text>
          <Heading>
            Even though this issue is huge, every little bit helps
          </Heading>
          <Text>Eliminate food waste.</Text>
          <Text>Reduce energy waste.</Text>
          <Text>Eat more sustainable food options.</Text>
          <Text>Respect and protect nature.</Text>
          <Text>Reduce, reuse and recycle.</Text>
          <Text>
            Please consider donating to{" "}
            <Link href="https://theoceancleanup.com/donate/">
              The Ocean Cleanup
            </Link>
          </Text>
        </Stack>
      </Flex>
    </Fragment>
  );
}
