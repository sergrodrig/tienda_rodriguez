import React from 'react';
import logo from '../../logo.svg';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p><code>{greeting}</code></p>
        </header>
    );
}

export default ItemListContainer;