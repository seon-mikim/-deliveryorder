import React from 'react';
import LayoutWrapper from '../LayoutWrapper/LayoutWrapper';

const CardItemImage = ({ className, menuName }) => {
  return (
    <LayoutWrapper className={className}>
      <img src={`/images/${menuName}.jpg`} alt={menuName} />
    </LayoutWrapper>
  );
};

export default CardItemImage;
