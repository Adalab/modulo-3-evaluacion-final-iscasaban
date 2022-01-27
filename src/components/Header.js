import React from 'react';
import imgHeader from '../images/header_harry_potter.png';

function Header() {
  return (
    <section className="header">
      <img
        className="header__img"
        src={imgHeader}
        alt="Harry Potter - Buscador de personajes"
        title="Harry Potter - Buscador de personajes"
      />
    </section>
  );
}

export default Header;
