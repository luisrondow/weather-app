import styled, { createGlobalStyle } from 'styled-components'

import { SCREEN_MAX_WIDTH } from './responsive'

export const GlobalStyle = createGlobalStyle`
  :root {
      --header: #455A64;
      --background: #607D8B;
      --black: #202020;
      --white: #fafafa;
      --orange: #EC6E4C;
  }
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  body {
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }
`

export const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex: 1;
  max-width: ${SCREEN_MAX_WIDTH}px;
  position: relative;
  margin: 0 auto;
`
