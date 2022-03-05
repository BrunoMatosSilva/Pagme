import React from 'react';

import cards from '/img/cards.png';
import iconmoney from '/img/emojionemoney_bag.svg';

import { Container } from './styles';

function HeroBanner() {
  return (
    <Container>
      <section>
        <img src={cards} alt="cartões" />
        <div>
          <span>
            <img src={iconmoney} alt="saco de dinheiro" />
            <p>Comece a economizar seu dinheiro de forma inteligente</p>
          </span>
          <main>
            <h1>Os pagamentos nunca foram tão fáceis.</h1>
            <p>
              Descubra a maneira mais fácil e inteligente de gerenciar suas finanças
              pessoais. Economize, analise, invista, retire, envie e receba dinheiro em
              dinheiro em todo o mundo sem limite.
            </p>
          </main>
          <section>
            <button type="button">Iniciar Agora</button>
            <button type="button">Baixe o App</button>
          </section>
        </div>
      </section>
    </Container>
  );
}

export default HeroBanner;
