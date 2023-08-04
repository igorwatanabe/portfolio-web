// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import brasao from '../assets/brasao-watanabe.png';


function Header() {
  return (
    <>
    <img src={brasao} alt="brasao-watanabe" />
      <h1>Igor Watanabe</h1>
      <button>Home</button>
      <button>Sobre</button>
      <button>Contato</button>
      <button>Projetos</button>
    </>
  );
}

// Header.propTypes = {
//   renderSearchComponent: PropTypes.bool,
//   title: PropTypes.string.isRequired,
// };

export default Header;
