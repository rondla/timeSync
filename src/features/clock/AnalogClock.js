import {
  Box,
  Center,
  Container,
  Heading,
  VStack,
  Input,
  GridItem
} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import '@fontsource/roboto-condensed'
import Clock from 'react-clock'
import 'react-clock/dist/Clock.css'
import { useDispatch, useSelector } from 'react-redux'
import { currentTime, setTime } from './clockSlice'

const AnalogClock = () => {
  const time = useSelector(state => state.clock.time)
  const change = useSelector(state => state.clock.change)

  const dispatch = useDispatch()

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
      <Center width='100%' height='100%' alignItems='center' bgColor='grey.100'>
        <Box>
          <Heading color='black' fontSize='3xl'>
            Analog
          </Heading>
        </Box>
      </Center>
      <Center>
        <Box height='300px' alignItems='center' m='10px' p='130px'>
          <Clock value={time} />
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

export default AnalogClock
