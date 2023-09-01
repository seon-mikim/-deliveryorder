import React, { memo, useCallback, useState } from 'react';
import classes from './Card.module.css';
import Button from '../Button/Button';

const Card =memo( ({ menu, getAddOrderData, isModal }) => {
  const [amount, setAmount] = useState(1);
  const koreaNumberFormat = new Intl.NumberFormat().format(menu.price);
console.log('render')
  const handleClick = useCallback((event) => {
    const { name } = event.target;
    console.log(event.target);
    if (name === 'add') return setAmount((prevAmount) => prevAmount + 1);
    if (name === 'subtract' && amount >= 1)
      return setAmount((prevAmount) => prevAmount - 1);
    if (name === 'order-add') return getAddOrderData(menu);
  },[amount, menu ,getAddOrderData]);

  return (
    <li className={classes['menu-item']}>
      <div className={classes['menu-item__left-info']}>
        <div className={classes['menu-item__img-wrap']}>
          <img src={`/images/${menu.menuName}.jpg`} alt={menu.menuName} />
        </div>
        <div className={classes['menu-item__name-price']}>
          <div className={classes['menu-item__name']}>{menu.menuName}</div>
          <div className={classes['menu-item__price']}>
            {koreaNumberFormat}
            <span>원</span>
          </div>
        </div>
      </div>
      <div>
        <div className={classes['menu-item__amount']}>
          <div className={classes['menu-item__amount__text']}>수량</div>
          <div className={classes['menu-item__button-wrap']}>
            <Button
              name="add"
              className="menu-item__amount-button--active"
              onClick={handleClick}
            />
            <div className={classes['amount']}>{amount}</div>
            <Button
              className="menu-item__amount-button--active"
              name="subtract"
              onClick={handleClick}
            />
          </div>
        </div>
        {isModal ? (
          <></>
        ) : (
          <div>
            <Button name="order-add" onClick={handleClick} title="추가하기" />
          </div>
        )}
      </div>
    </li>
  );
});

export default Card;
