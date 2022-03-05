import React from 'react';
import { BsDownload } from 'react-icons/bs';

import iconmoney from '/img/emojionemoney_bag.svg';

import { Container } from './styles';

function Content() {
  return (
    <Container data-aos="fade-left" data-aos-duration="2000">
      <span>
        <img src={iconmoney} alt="saco de dinheiro" className="icon" />
        <p>Comece a economizar seu dinheiro de forma inteligente</p>
      </span>
      <main>
        <h1>Os pagamentos nunca foram tão fáceis.</h1>
        <p>
          Descubra a maneira mais fácil e inteligente de gerenciar suas finanças pessoais.
          Economize, analise, invista, retire, envie e receba dinheiro em dinheiro em todo
          o mundo sem limite.
        </p>
      </main>
      <section>
        <button type="button">Iniciar Agora</button>
        <button type="button">
          <BsDownload />
          Baixe o App
        </button>
      </section>
    </Container>
  );
}

export default Content;
