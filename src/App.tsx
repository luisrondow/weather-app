import * as React from 'react'

import Home from './container/Home'
import { WeatherProvider } from './contexts/weather/weather.context'
import { GlobalStyle } from './styles/global'

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <WeatherProvider>
      <Home />
    </WeatherProvider>
  </React.Fragment>
)

export default App
