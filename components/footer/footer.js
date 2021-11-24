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
    marginTop="80px"
    py="6"
    px={{
      base: "4",
      md: "8",
    }}
    bg={colors.oceanBlue}
  >
    <Stack spacing="10" divider={<StackDivider />}>
      <Stack
        direction={{
          base: "column-reverse",
          md: "row",
        }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Copyright />
        <SocialMediaLinks />
      </Stack>
    </Stack>
  </Box>
);

export default Footer;
