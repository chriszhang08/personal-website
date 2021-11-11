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
import colors from "../styles/config/colors";

export default function Home() {
  return (
    <Fragment>
      <Flex w="100%" justify="center" direction="row">
        <Stack direction={"column"} w={["90%", "80%", "65%", "50%", "40%"]}>
          <Heading>Hi! My name is Chris Zhang</Heading>
          <Text>I want to save the world.</Text>
        </Stack>
        <Box
          as="a"
          href="https://chakra-ui.com/"
          p="6"
          m="4"
          borderWidth="1px"
          rounded="lg"
          flexBasis={["auto", "45%"]}
        >
          <Heading as="h3" size="lg" mb="2">
            Chakra UI &rarr;
          </Heading>
          <Text fontSize="lg">
            Build accessible React apps & websites with speed.
          </Text>
        </Box>
      </Flex>
    </Fragment>
  );
}
