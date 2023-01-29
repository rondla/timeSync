import { Flex, Heading, Spacer } from '@chakra-ui/react'
import '@fontsource/roboto-condensed'
import React from 'react'

const Navigationbar = () => {
  return (
    <Flex as='nav' m='10px' p='10px' h='40px' alignItems='center' bg='gray.200'>
      <Heading type='facebook' fontSize='3xl'>
        Time Sync
      </Heading>
      <Spacer />
    </Flex>
  )
}

export default Navigationbar
