import React, { useState } from 'react';
import MenuItem from '../MenuItem/MenuItem';
// import './MenuItems.scss'

const MenuItems = () => {
  const [items, setItems] = useState([
      {
        title: 'Hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1
      },
      {
        title: 'Jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2
      },
      {
        title: 'Sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3
      },
      {
        title: 'Womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4
      },
      {
        title: 'Mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5
      }
  ])

  return (
    <div className="MenuItems px-5 mt-3 w-100 d-flex flex-wrap justify-content-around">
      {
        items.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))
      }  
    </div>
  );
};

export default MenuItems;