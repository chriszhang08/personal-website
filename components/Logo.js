// components/Logo.js
import { motion } from "framer-motion";
import { Image } from "@chakra-ui/react";

const MotionImage = motion(Image);

const Logo = () => {
  return (
    <a href="/">
      <MotionImage
        src="/logo.PNG"
        height={75}
        width={150}
        position="absolute"
        bottom="0"
        right="0"
        margin="10px"
        whileTap={{ scale: 0.8 }}
        _hover={{ filter: "brightness(0) invert(1)" }}
      />
    </a>
  );
};

export default Logo;
