import React from 'react';
import './NavBar.css';

import CartWidget from '../CartWidget';

const NavBar = () => (
  <div className='NavBar'>
    <span className='NavBar__Logo'>Storename</span>
    <div className='NavBar__Menu'>
      <ul className='NavBar__Nav'>
        <li><a href="/">Categorias</a></li>
        <li><a href="/">Marcas</a></li>
        <li><a href="/">Sucursales</a></li>
      </ul>
      <a href="/">
        <CartWidget />
      </a>
    </div>
  </div>
)

export default NavBar;