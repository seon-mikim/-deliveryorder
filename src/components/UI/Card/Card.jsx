import React from 'react';
import classes from './Card.module.css';
const Card = ({ menu }) => {
  return (
    <li className={classes['menu-item']}>
			<div className={classes['menu-item__img-wrap'] }>
        <img src={`/images/${menu.menuName}.jpg`} alt={menu.menuName} />
      </div>
      <div>{menu.menuName}</div>
      <div>{menu.price}</div>
      <div>{menu.amount}</div>
    </li>
  );
};

export default Card;
