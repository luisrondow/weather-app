import * as React from 'react'

import Home from './container/Home'
import { GlobalStyle } from './styles/global'

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <Home />
  </React.Fragment>
)

export default App
