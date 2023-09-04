import Card from '@components/UI/Card/Card';
import classes from './Modal.module.css';
import LayoutWrapper from '@components/UI/LayoutWrapper/LayoutWrapper';
import { useState } from 'react';
import ModalAmount from './ModalAmount';
import ModalButtonWrap from './ModalButtonWrap';
import Button from '@components/UI/Button/Button';

const ModalOverlay = ({ menuList, handleModalCloseClick }) => {
  const [totalPrice, setTotalPrice] = useState([]);
 
  const getTotalPrice = (price) => {
    setTotalPrice((prev) => [...prev, price]);
  };

  const totalPriceMap = new Map(
    totalPrice.map((item) => [item.id, item.price])
  );

  const sum = Array.from(totalPriceMap.values()).reduce(
    (acc, cur) => acc + cur,
    0
  );

  return (
    <LayoutWrapper className={classes.modal}>
      <Button
        name="close"
        className="modal__close-button"
        handler={handleModalCloseClick}
      />
      <ul>
        {menuList.map((menuListData) => (
          <Card
            isModal={true}
            key={menuListData.id}
            menu={menuListData}
            getTotalPrice={getTotalPrice}
          />
        ))}
        <ModalAmount price={sum} />
        <ModalButtonWrap />
      </ul>
    </LayoutWrapper>
  );
};

export default ModalOverlay;
