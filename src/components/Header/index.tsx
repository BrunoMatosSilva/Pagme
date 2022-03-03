import React from 'react';
import logo from '/img/moneybag.svg';

import { Container } from './styles';
import NavLink from './NavLink';

function Header() {
  return (
    <Container>
      <div>
        <img src={logo} alt="Sacola dinheiro" />
        <p>Pagme</p>
      </div>
      <ul>
        <NavLink path="#" title="Home" />
        <NavLink path="#" title="Produto" />
        <NavLink path="#" title="Preço" />
        <span>
          <NavLink path="#" title="Login" />
        </span>
      </ul>
    </Container>
  );
};

export default Header;
