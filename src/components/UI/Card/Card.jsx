import React from 'react';
import classes from './Card.module.css';
import Button from '../Button/Button';
const Card = ({ menu }) => {
	const handleClick = (event) => {
		const { innerText } = event.target
		console.log(innerText)
		if(innerText === '+') return console.log('더하기버튼')
		if(innerText === '-') return console.log('빼기버튼')
	}
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
			<div className={classes['menu-item__amount'] }>
				<div>수량</div>
				<Button name='+' onClick={handleClick}/>
        <div>{menu.amount}</div>
				<Button name ='-' onClick={handleClick}/>
      </div>
    </li>
  );
};

export default Card;
