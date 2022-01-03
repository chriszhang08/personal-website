import React, { useState } from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  Link,
  useDisclosure,
  Image,
} from "@chakra-ui/react";

// import { lightTheme, darkTheme, GlobalStyles } from "../../styles/themeConfig";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import colors from "../../styles/config/colors";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

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
    <Link href={to} textDecoration="none">
      <Text display="flex" _hover={{ color: "#ffffff" }}>
        {children}
      </Text>
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
      paddingX={8}
      paddingY={4}
      w="100%"
      color="black"
    >
      {/* can put logo here */}
      <Link href="/">
        <MotionImage
          src="/logo.png"
          height={75}
          width={150}
          whileTap={{ scale: 0.8 }}
        />
      </Link>
      <MenuLinks isOpen={isOpen} />
      <MenuToggle toggle={handleToggle} isOpen={isOpen} />
    </Flex>
  );
}; // End Header

export default Navbar;
