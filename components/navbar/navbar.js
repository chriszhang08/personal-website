import React, { useState } from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
// import { lightTheme, darkTheme, GlobalStyles } from "../../styles/themeConfig";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import colors from "../../styles/config/colors";

// create logo component
// export default function Logo (props) {
//   return (
//     <Box {...props}>
//       <Text fontSize="lg" fontWeight="bold">
//         Logo
//       </Text>
//     </Box>
//   );
// };

// create menutoggle component
const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
};

// create menuitems component
const MenuItem = ({ children, isLast, to = "/" }) => {
  return (
    <Link href={to}>
      <Text display="flex">{children}</Text>
    </Link>
  );
};

// create menulinks component
const MenuLinks = ({ isOpen, children, isLast, ...rest }) => {
  return (
    <Box display={{ base: isOpen ? "block" : "none", md: "block" }}>
      <Stack
        spacing={8}
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={"row"}
        flexGrow={1}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/projects">Projects</MenuItem>
        <MenuItem to="/save-the-world">Save The World</MenuItem>
        <MenuItem to="/bio">About Me</MenuItem>
      </Stack>
    </Box>
  );
};

// Update: Check these awesome headers from Choc UI 👇
// https://choc-ui.tech/docs/elements/headers
const Navbar = (props) => {
  // const [colorMode, toggleColorMode] = useColorMode();
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <Flex
      align="center"
      justify="space-between"
      wrap="wrap"
      position="sticky"
      p={8}
      mb={8}
      w="100%"
      color="black"
      bg={colors.olive}
    >
      {/* can put logo here */}
      <Box mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Logo
        </Heading>
      </Box>
      <MenuLinks isOpen={isOpen} />
      {/* <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          variant="outline"
          _hover={{ bg: "teal.700", borderColor: "teal.700" }}
        >
          Create account
        </Button>
      </Box> */}
      <MenuToggle toggle={handleToggle} isOpen={isOpen} />
    </Flex>
  );
}; // End Header

export default Navbar;
