import React from 'react';

import classes from './Modal.module.css';
import Button from '@components/UI/Button/Button';
const ModalAmount = ({ price }) => {
  const koreaNumberFormat = new Intl.NumberFormat().format(price);
  return (
    <li className={classes['modal__amount-list']}>
      <div>전체 금액</div>
      <div>
        {koreaNumberFormat} <span>원</span>
			</div>
    </li>
  );
};

export default ModalAmount;
