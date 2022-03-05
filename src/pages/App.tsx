import Header from 'components/Header';
import HeroBanner from 'components/HeroBanner';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { HomeContainer } from 'styles/HomeContainer';
import theme from 'styles/theme';

import { GlobalStyles } from '../styles/global';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <HomeContainer>
          <main className="container">
            <Header />
            <HeroBanner />
          </main>
        </HomeContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
