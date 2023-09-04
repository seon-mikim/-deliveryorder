import React, { useCallback, useEffect, useRef, useState } from 'react';
import LayoutWrapper from '../LayoutWrapper/LayoutWrapper';
import Button from '../Button/Button';
import classes from './Card.module.css';
const CardItemCount = ({ price, isModal, getTotal  }) => {
const [amount, setAmount] = useState();

 const getAmount = useCallback((totalAmountData) => {
   setAmount(totalAmountData);
 }, []);

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.value = 1;
    if (isModal) {
      const amount = price * inputRef.current.value
      getAmount(amount)
      getTotal(amount);

    }
  }, [isModal, price, getAmount, getTotal, inputRef]);


  const handleDecreaseCountClick = useCallback(() => {
    if (inputRef.current.value > 1) {
      inputRef.current.value = inputRef.current.value - 1;
      getAmount((prevAmount) => prevAmount - price);
     
    }
  }, [getAmount,price]);
  const handleIncreaseCountClick = useCallback(() => {
    if (inputRef.current.value <= 10) {
      inputRef.current.value = Number(inputRef.current.value) + 1;
      getAmount((prevAmount) => prevAmount + price)
    }
  }, [getAmount, price]);

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
