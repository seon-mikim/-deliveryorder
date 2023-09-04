import React, { useCallback, useEffect, useRef, useState } from 'react';
import LayoutWrapper from '../LayoutWrapper/LayoutWrapper';
import Button from '../Button/Button';
import classes from './Card.module.css';

const CardItemCount = ({ price, isModal, menuId, getTotalPrice }) => {
  const [isPrice, setIsPrice] = useState({ id: menuId, price });
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.value = 1;
     if (isModal) {
       // 초기에만 getTotalPrice 호출
       getTotalPrice({ id: menuId, price });
     }
    
  }, []);

  const handleDecreaseCountClick = useCallback(() => {
    if (inputRef.current.value > 1) {
      inputRef.current.value--;
      const newPrice = price * inputRef.current.value;
      if (isModal) {
        setIsPrice((prev) => ({
          ...prev,
          price: newPrice,
        }));
        getTotalPrice({ ...isPrice, price: newPrice });
      }
    }
  }, [price, isPrice, isModal, getTotalPrice]);
  const handleIncreaseCountClick = useCallback(() => {
    if (inputRef.current.value <= 10) {
      inputRef.current.value++;
      const newPrice = price * inputRef.current.value;
      if (isModal) {
        setIsPrice((prev) => ({
          ...prev,
          price: newPrice,
        }));
        getTotalPrice({ ...isPrice, price: newPrice });
      }
    }
  }, [price, isPrice, isModal, getTotalPrice]);

  return (
    <LayoutWrapper className={classes['menu-item__button-wrap']}>
      <Button
        name="add"
        className="menu-item__amount-button--active"
        handler={handleIncreaseCountClick}
      />
      <input className={classes['amount']} ref={inputRef} />
      <Button
        name="subtract"
        className="menu-item__amount-button--active"
        handler={handleDecreaseCountClick}
      />
    </LayoutWrapper>
  );
};

export default CardItemCount;
