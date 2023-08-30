import React from 'react';
import classes from './Card.module.css';
const Card = ({ menu }) => {
	const koreaNumberFormat = new Intl.NumberFormat().format(menu.price);
  return (
    <li className={classes['menu-item']}>
      <div className={classes['menu-item__left-info']}>
        <div className={classes['menu-item__img-wrap']}>
          <img src={`/images/${menu.menuName}.jpg`} alt={menu.menuName} />
        </div>
        <div className={classes['menu-item__name-price']}>
          <div className={classes['menu-item__name']}>{menu.menuName}</div>
          <div className={classes['menu-item__price']}>
            {koreaNumberFormat}<span>원</span>
          </div>
        </div>
      </div>
      <div>
        <span>수량</span>
        <div>{menu.amount}</div>
      </div>
    </li>
  );
};

export default Card;
