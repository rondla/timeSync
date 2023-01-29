import { extendTheme } from '@chakra-ui/react'
import '@fontsource/roboto-condensed'

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: '#FF3c00'
    }
  },
  font: {
    heading: 'roboto-condensed, sans-serif',
    body: 'roboto-condensed, sans-self'
  },
  style: {
    global: () => ({
      body: {
        bg: 'gray.200'
      }
    })
  },
  component: {
    //Button:
  }
})
