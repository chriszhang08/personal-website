import { Heading, Text, Link, Stack, Flex } from "@chakra-ui/react";
import { Fragment } from "react";

export default function SaveTheWorld() {
  return (
    <Fragment>
      <Flex w="100%" justify="center" direction="row">
        <Stack w={["90%", "80%", "65%", "50%", "40%"]}>
          <Heading>Climate Change is irreversible.</Heading>
          <Text>
            And our future is in danger. Here's 100 sources proving and
            detailing the severity of this problem.
          </Text>
          <Heading>
            Even though this issue is huge, every little bit helps
          </Heading>
          <Text>List of small things you can do to help. </Text>
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
