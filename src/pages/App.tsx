import 'aos/dist/aos.css';

import Aos from 'aos';
import Header from 'components/Header';
import HeroBanner from 'components/HeroBanner';
import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { HomeContainer } from 'styles/HomeContainer';
import theme from 'styles/theme';

import { GlobalStyles } from '../styles/global';

function App() {
  useEffect(() => Aos.init(), []);
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
