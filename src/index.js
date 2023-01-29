import React from 'react'
import ReactDOM from 'react-dom'
//import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './chakra/theme'

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>,

  document.getElementById('root')
)
