import { Grid, GridItem, VStack } from '@chakra-ui/react'
import '@fontsource/roboto-condensed'
import { Button } from 'react-bootstrap'
import AnalogClock from './AnalogClock'
import DigitalClock from './DigitalClock'
import { useDispatch } from 'react-redux'
import { currentTime } from './clockSlice'
import AnalogClock2 from './AnalogClock2'

const Clock = () => {
  const dispatch = useDispatch()
  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={2} m='10px' p='2px'>
      <GridItem>
        <AnalogClock />
      </GridItem>
      <GridItem>
        <DigitalClock />
      </GridItem>
    </Grid>
  )
}

export default Clock
