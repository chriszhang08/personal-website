import { Box, Stack, StackDivider } from "@chakra-ui/react";
import * as React from "react";
import { Copyright } from "./copyright";
import { LinkGrid } from "./linkGrid";
import { SocialMediaLinks } from "./socialMediaLinks.jsx";
import colors from "../../styles/config/colors";

const Footer = () => (
  <Box
    as="footer"
    role="contentinfo"
    bg={colors.olive}
    height="14vh"
    justifyItems="center"
  >
    <Stack
      direction={{
        base: "column-reverse",
        md: "row",
      }}
      justifyContent="space-between"
      alignItems="center"
      paddingX="10"
      height="100%"
    >
      <Copyright />
      <SocialMediaLinks />
    </Stack>
  </Box>
);

export default Footer;
