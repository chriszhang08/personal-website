import { ButtonGroup, IconButton } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export const SocialMediaLinks = (props) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton as="a" href="https://linkedin.com/in/chriszhang08/" aria-label="LinkedIn" icon={<FaLinkedin fontSize="20px" />} />
    <IconButton as="a" href="https://github.com/chriszhang08" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
    <IconButton as="a" href="mailto:czhang2003@gmail.com" aria-label="Envelope" icon={<FaEnvelope fontSize="20px" />} />
  </ButtonGroup>
)