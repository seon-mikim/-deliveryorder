import React from 'react'
import LayoutWrapper from '../LayoutWrapper/LayoutWrapper'
import Button from '../Button/Button'

const CardItemAddProduct = ({ getAddOrderData, menuId }) => {
  
	const handleGetAddOrderMenuId = () => {
		getAddOrderData(menuId)
	}
	
	return (
    <LayoutWrapper>
      <Button
        className="menu-item__add-order-button--add"
        title="추가하기"
        name="order-add"
        handler={handleGetAddOrderMenuId}
      />
    </LayoutWrapper>
  );
};

export default CardItemAddProduct