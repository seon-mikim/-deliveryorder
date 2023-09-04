import Card from '@components/UI/Card/Card';
import classes from './Modal.module.css';
import LayoutWrapper from '@components/UI/LayoutWrapper/LayoutWrapper';
import { useEffect } from 'react';

const ModalOverlay = ({ menuList, getTotal, totalPrice }) => {


  return (
    <LayoutWrapper className={classes.modal}>
      <ul>
        {menuList.map((menuListData) => (
          <Card isModal={true} key={menuListData.id} menu={menuListData} getTotal={getTotal} />
        ))}
        <>
          <div>전체 금액</div>
          <span>{totalPrice }</span>
        </>
    
      </ul>
    
    </LayoutWrapper>
  );
};

export default ModalOverlay;
