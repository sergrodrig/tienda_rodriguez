import React from 'react';
import './Item.css';

const Item = ({ id, title, description,  price, pictureUrl }) => {
  return (
        <div className="Item">
            <img src={ pictureUrl } alt="imagen del producto" />
            <span>ID #{ id }</span>
            <span>Title: { title }</span>
            <span>Description: { description }</span>
            <span>Price: ${ price }</span>
        </div>
    );
}

export default Item;