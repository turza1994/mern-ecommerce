import React, { useState } from 'react';
import MenuItem from '../MenuItem/MenuItem';

const MenuItems = () => {
  const [items] = useState([
      {
        title: 'Hats',
        imageUrl: 'hats.jpg',
        id: 1
      },
      {
        title: 'Jackets',
        imageUrl: 'jackets.jpg',
        id: 2
      },
      {
        title: 'Sneakers',
        imageUrl: 'sneakers.jpg',
        id: 3
      },
      {
        title: 'Womens',
        imageUrl: 'women.jpg',
        size: 'large',
        id: 4
      },
      {
        title: 'Mens',
        imageUrl: 'men.jpg',
        size: 'large',
        id: 5
      }
  ])

  return (
    <div className="MenuItems mt-4 container mb-5">
        <div className="row justify-content-center align-items-center g-2">
          {
            items.map(({ title, imageUrl, id, size }) => (
              <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
            ))
          }
        </div>
    </div>
  );
};

export default MenuItems;