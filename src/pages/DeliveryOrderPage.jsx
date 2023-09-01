import { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from '@components/Modal/Modal';
import Header from '@components/Header/Header';
import BackDrop from '@components/BackDrop/BackDrop';
import MenuMain from '@components/MenuMain/MenuMain';

const backDropEl = document.getElementById('back-drop');
const modalEl = document.getElementById('modal');

const DeliveryOrderPage = () => {
  const [isShown, setIsShown] = useState(false);
  const [addOrder, setAddOrder] = useState([]);

  const handleClick = () => {
    if (addOrder.length > 0) return setIsShown((prevIsShown) => !prevIsShown);
  };

  const getAddOrderData = useCallback((addOrderData) => {
    setAddOrder([...addOrder, addOrderData]);
  },[addOrder])
  return (
    <>
      {isShown && createPortal(<BackDrop onClick={handleClick} />, backDropEl)}
      {isShown && createPortal(<Modal menuList={addOrder} />, modalEl)}
      <Header onClick={handleClick} />
      <MenuMain getAddOrderData={getAddOrderData} />
    </>
  );
};

export default DeliveryOrderPage;
