import Content from 'components/Content';
import React from 'react';

import cards from '/img/cards.png';

import { Container } from './styles';

function HeroBanner() {
  return (
    <Container>
      <section>
        <div data-aos="fade-right" data-aos-duration="2000">
          <img src={cards} alt="cartões" />
        </div>
        <Content />
      </section>
    </Container>
  );
}

export default HeroBanner;
