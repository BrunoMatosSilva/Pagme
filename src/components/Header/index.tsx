import MobileMenu from 'components/MobileMenu';
import React, { useState } from 'react';
import { RiMenu3Fill } from 'react-icons/ri';

import logo from '/img/moneybag.svg';

import NavLink from './NavLink';
import { Container } from './styles';

function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <MobileMenu menuIsVisible={menuIsOpen} setMenuIsVisible={setMenuIsOpen} />
      <Container>
        <div>
          <img src={logo} alt="Sacola dinheiro" />
          <p>Pagme</p>
        </div>
        <section>
          <RiMenu3Fill onClick={() => setMenuIsOpen(true)} className="mobile" />
        </section>
        <ul>
          <NavLink path="#" title="Home" />
          <NavLink path="#" title="Produto" />
          <NavLink path="#" title="Preço" />
          <span>
            <NavLink path="#" title="Login" />
          </span>
        </ul>
      </Container>
    </>
  );
}

export default Header;
