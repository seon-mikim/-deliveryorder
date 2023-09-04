import React from 'react';

const CardItemPrice = ({className, price }) => {
	const koreaNumberFormat = new Intl.NumberFormat().format(price);
  return (
    <div className={className }>
      {koreaNumberFormat} <span>원</span>
    </div>
  );
};

export default CardItemPrice;
