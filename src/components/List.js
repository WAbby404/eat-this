import React, { useState, useEffect } from 'react';
import '../styles/List.scss';

function List(props) {
    const items = props.ingredients ;
    const [listItems, setListItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    useEffect(() => {
        const list = items;
        const objList = [];
        list.forEach((item) => {
            let newItem = {
                id: 1 + Math.random(),
                value: item
            };
            objList.push(newItem);
        })
        setListItems(objList);
    }, [items])

    const addItem = () => {
        const newestItem={
          id: 1 + Math.random(),
          value: newItem
        };
        const list = [...listItems];
        list.push(newestItem);
        setListItems(list);
        setNewItem('');
    }

    const updateInput = (value) => {
        setNewItem(value);
    }

    const deleteItem = id => {
        const list = [...listItems];
        const updatedList = list.filter(item => item.id !== id);
        setListItems(updatedList);
    }

    return (
        <div className="list__wrapper">
          <h1>Add items to Grocery List</h1>
          <div className="list__search">
            <input className="list__input"
              type='text'
              placeholder='Type item here...'
              value={newItem}
              onChange={e => updateInput(e.target.value)}
            />
            <button className="list__search__btn" onClick={() => addItem()}>Add Item</button>
          </div>

          <ul className="list__ul">
            {listItems.map(item => {
              return(
                <div className="list__items">
                  <li key={item.id} className="list__li">
                    <div className="list__text">{item.value}</div>
                    <button className="list__btn" onClick={() => deleteItem(item.id)}>
                      <i class="fa-solid fa-xmark"></i>
                    </button>
                  </li>
                </div>
              )
            })}
          </ul>
        </div>
    );
}

export default List;