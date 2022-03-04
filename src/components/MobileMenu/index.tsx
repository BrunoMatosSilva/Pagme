import NavLink from 'components/Header/NavLink';
import React, { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';

import { Container } from './styles';

function MobileMenu({ menuIsVisible, setMenuIsVisible }) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (
    <Container isVisible={menuIsVisible}>
      <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
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
}

export default MobileMenu;
