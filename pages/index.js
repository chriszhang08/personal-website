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

export default function Home() {
  return (
    <Fragment>
      <Flex w="100%" justify="center" direction="row">
        <Stack direction={"column"} w={["90%", "80%", "65%", "50%", "40%"]}>
          <Heading>Hi! My name is Chris Zhang</Heading>
          <Text>
            I love helping people I love helping people I love helping people I
            love helping people I love helping people I love helping people I
            love helping people I love helping people I love helping people I
            love helping people I love helping people I love helping people I
            love helping people I love helping people
          </Text>
        </Stack>
      </Flex>
    </Fragment>
  );
}
