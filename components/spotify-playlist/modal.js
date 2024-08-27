import { IconButton } from "@chakra-ui/react";
import { Fragment, useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { CloseIcon } from "@chakra-ui/icons";

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modal = {
  hidden: { opacity: 0, y: "-100vh" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 1,
      type: "spring",
      damping: 20,
      stiffness: 80,
    },
  },
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence mode='wait'>
      {showModal && (
        <motion.div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            zIndex: 1,
          }}
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1EpApgs18Dj6HV?utm_source=generator&amp;theme=0"
            width="40%"
            height="60%"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            variants={modal}
            style={{ top: "20%", left: "30%", position: "absolute" }}
          ></motion.iframe>
          <CloseIcon
            color="white"
            width={8}
            height={8}
            position="absolute"
            right={0}
            margin={4}
            onClick={() => setShowModal(false)}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
