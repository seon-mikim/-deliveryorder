import Button from '@components/UI/Button/Button';
import React from 'react';

const AlertModal = ({ text, orderState }) => {
  return (
    <div>
      <div>{text}</div>
      <div>{orderState}</div>
      <div>
        <div>
          <Button title="취소하기" />
          {orderState ? <Button title="결제하기" /> : ''}
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
