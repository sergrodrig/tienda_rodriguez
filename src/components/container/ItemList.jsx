import React from 'react';
import './ItemList.css';
import Item from './Item.jsx';

// function ItemList({ items }) {
    // desarolla la vista utilizando un array de items y un map
// }

const ItemList = ({items}) => {
    return (
        <div className="ItemList">
            <ul>
                {
                    items.map(function(item){
                        return(
                            <li key={ item.id }>
                                <Item
                                    id={ item.id }
                                    title={ item.username }
                                    description={ item.company.bs }
                                    price={ item.id * 2342 / 100 }
                                    pictureUrl="https://via.placeholder.com/300"
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default ItemList;