import { Button, Grid, GridItem, VStack } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Clock from './features/clock/Clock'
//import Counter from './features/counter/Counter'
import { currentTime } from './features/clock/clockSlice'
import Navigationbar from './features/navbar/Navigationbar'

function App () {
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
    <Container bg='gray.300'>
      <Grid>
        <GridItem>
          <Navigationbar />
        </GridItem>
        <GridItem>
          <Clock />
        </GridItem>
      </Grid>
      <VStack m='20px'>
        <Button onClick={e => dispatch(currentTime())} colorScheme='linkedin'>
          Rest to Current Time
        </Button>
      </VStack>
    </Container>
  )
}

export default App
