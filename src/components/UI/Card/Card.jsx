import React, { memo, useEffect } from 'react';
import classes from './Card.module.css';
import Button from '../Button/Button';
import LayoutWrapper from '../LayoutWrapper/LayoutWrapper';
import CardItemTitle from './CardItemTitle';
import CardItemImage from './CardItemImage';
import CardItemPrice from './CardItemPrice';
import CardItemCount from './CardItemCount';
import CardItemAddProduct from './CardItemAddProduct';

const Card = memo(({ menu, getAddOrderData, isModal, getTotal }) => {



  return (
    <li className={classes['menu-item']}>
      <LayoutWrapper className={classes['menu-item__info']}>
        <CardItemImage
          className={classes['menu-item__img-wrap']}
          menuName={menu.menuName}
        />
        </LayoutWrapper>
        <LayoutWrapper className={classes['menu-item__name-price']}>
          <CardItemTitle
            className={classes['menu-item__name']}
            title={menu.menuName}
          />
          <CardItemPrice
          className={classes['menu-item__price']}
          price={menu.price}
         
          />
      </LayoutWrapper>
      <LayoutWrapper>
        <LayoutWrapper className={classes['menu-item__amount']}>
          <div className={classes['menu-item__amount__text']}>수량</div>
          <CardItemCount price={menu.price} isModal={isModal} getTotal={getTotal} />
        </LayoutWrapper>
       
          {isModal ? (
            ''
        ) : (
            <>
            <CardItemAddProduct
              getAddOrderData={getAddOrderData}
              menuId={menu.id}
            />
            </>
          )}
      </LayoutWrapper>
    </li>
  );
});

export default Card;
