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

let mabypark = `Maby Park and Hotel, Sweden

I think we all like to believe that Sweden is this country that has everything figured out and is just
miles better than the United States. So naturally this puts all of
its facilities under more scrutiny by me. This was my hotel room on
a layover flight in the greater Stockholm area. I thought the
bathroom design choices were so interesting that it warranted itself
as its first entry in a journal about culture and design choices
from around the world. The very first thing I noticed was how the
shower and toilet were detached from the main room, yet it wasn’t a
hostel. I wonder if design choices like this are common in Sweden.
If they are, it would indicate that the culture and economy in
Sweden allows for a clean bathroom where the workforce is ample and
common enough to keep these facilities hygienic. Because the
bathroom was much more hygienic then any hostel bathroom I’ve been
in (save one). The next thing I noticed was that there was no
toilet. The toilet was itself detached from the shower room, and
they were up and down the hall - something uncommon in Western hotel
rooms. Is it like a don’t shit where you eat kind of thing? Next, as
it is for all showers that are not mine, I had to figure out how to
get the hot and cold water working. The awfully unique thing I
noticed was that this shower worked by pressing a button, to which
the water would automatically shut off after 20 or so seconds. I’m
really a fan of this design because it incentives users to take
shorter showers. It is an institutional behavior change design
choice. I suspect that the button would shut off faster if hotter
water was used. Without a doubt, I believe that if such a design
were mandatory world wide, we would save a lot of water in the
shower. The only other thing worth talking about in the bathroom was
how there was no inside handle. There exists a stereotype where all
Scandinavians are these tall blonde models. I wonder, are buildings
here specifically designed for this genetic body type? I’ll put it
this way, if you were under 5’4”, you would struggle to close the
shower door. I think all in all, this facility is much more
sustainable than any comparable facility in the US. Yet, my
experience wasn’t more unenjoyable, and if anything, I found myself
enjoying this kind of design more. There is something to be said
about how my hotel room is the same quality as a Swedish prison
room, or how I’m not sure how I’ll sleep on that narrow ass bed
tonight, but as with any country, there are its pros and cons.`;

export default function Bio() {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta
          name="description"
          content="A gallery for my creative outlets, which include traveling and graphic design."
        />
        <meta
          name="author"
          content="Chris Zhang, born in Ann Arbor, Michigan. Raised in Novi, Michigan, attended 
        Novi High School. Currently living in Ann Arbor, Michigan, attending the University of Michigan. 
        Worked at NextEra Energy, the Energy and Water Innovation Lab for Oracle, and as a Teaching Aide for 
        EECS 280 at Michigan. Passionate about education and energy."
        />
      </Head>
      <Fragment>
        <Flex
          w="100%"
          justify="center"
          direction="column"
          padding={8}
          wrap="wrap"
        >
          <Heading textAlign="center" paddingBottom={6}>
            Movie Poster NFT Collection
          </Heading>
          <Grid templateColumns="1fr 1fr 1fr 1fr" gap={4}>
            <GridItem>
              <Image src="/movieposter/fmrfox.PNG" backgroundSize={"cover"} />
              <Text>
                My favorite Wes Anderson film ever, and my first movie poster
                ever made. I wanted the poster to capture his film style, so I
                centered the tree as is per his cinematography style.
              </Text>
              <Button>Buy</Button>
            </GridItem>
            <GridItem>
              <Image src="/movieposter/coco.PNG" backgroundSize={"cover"} />
            </GridItem>
            <GridItem>
              <Image src="/movieposter/rat.PNG" backgroundSize={"cover"} />
            </GridItem>
            <GridItem>
              <Image src="/movieposter/soul.PNG" backgroundSize={"cover"} />
            </GridItem>
          </Grid>
          <Heading textAlign="center" paddingBottom={6}>
            Travel Collection
          </Heading>
          <Heading as="h3">Sweden</Heading>
          <Text>{mabypark}</Text>
        </Flex>
      </Fragment>
    </>
  );
}
