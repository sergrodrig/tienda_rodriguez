import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList.jsx';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => {
                setProductos(json)
            });
    })

    return (
        <div className="ItemList">
            <ItemList items={ productos } />
        </div>
    );
}

export default ItemListContainer;