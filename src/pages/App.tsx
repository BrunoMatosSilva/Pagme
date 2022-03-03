import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { GlobalStyles } from '../styles/global';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <h1>Hello World!</h1>
      </ThemeProvider>
    </>
  );
}

export default App;
