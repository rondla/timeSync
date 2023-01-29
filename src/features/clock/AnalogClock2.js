import {
  Box,
  Center,
  Container,
  GridItem,
  Heading,
  Input,
  VStack
} from '@chakra-ui/react'
import '@fontsource/roboto-condensed'
import React, { useEffect, useState } from 'react'
import Clock from 'react-clock'
import 'react-clock/dist/Clock.css'
import { useDispatch } from 'react-redux'
import { setTime } from './clockSlice'

const SECOND_IN_MS = 1000
const HOUR_IN_MS = 1000 * 60 * 60
const addTime = (date, time) => new Date(date.getTime() + time)

const AnalogClock2 = () => {
  const dispatch = useDispatch()
  const [timeDate, setTimeDate] = useState(addTime(new Date(), SECOND_IN_MS))

  const updateTimeInfo = addedTime => {
    dispatch(timeDate => setTime(timeDate, addedTime))
  }

  useEffect(() => {
    const tickClock = setInterval(() => {
      updateTimeInfo(SECOND_IN_MS)
    }, SECOND_IN_MS)

    return () => clearInterval(tickClock)
  }, [])

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
          <Clock value={timeDate} />
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

export default AnalogClock2
