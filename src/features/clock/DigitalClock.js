import {
  Box,
  Center,
  Container,
  GridItem,
  Heading,
  Input,
  VStack
} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import '@fontsource/roboto-condensed'
import { useDispatch, useSelector } from 'react-redux'
import { currentTime, setTime } from './clockSlice'

const DigitalClock = () => {
  const abc = useSelector(state => state.clock.time)
  const dispatch = useDispatch()
  const change = useSelector(state => state.clock.change)

  useEffect(() => {
    if (!change) {
      var timer = dispatch(currentTime())
      return function cleanup () {
        clearInterval(timer)
      }
    }
  })

  return (
    <GridItem w='100%' h='10' bg='blue.500'>
      <Center width='100%' height='100%' alignItems='center' bg='gray.400'>
        <Box>
          <Heading color='black' fontSize='3xl'>
            Digital
          </Heading>
        </Box>
      </Center>
      <Center>
        <Box height='300px' alignItems='center' m='10px' p='130px'>
          <Heading> {abc.toLocaleTimeString()}</Heading>
        </Box>
      </Center>
      <VStack>
        <Container maxW='md' color='blue'>
          <Input
            placeholder='Select Date and Time'
            size='md'
            type='datetime-local'
            onChange={e => dispatch(setTime(e.target.value))}
          />
        </Container>
      </VStack>
    </GridItem>
  )
}

export default DigitalClock
