import { useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from '@components/Modal/Modal';
import Header from '@components/Header/Header';
import BackDrop from '@components/BackDrop/BackDrop';
import MenuMain from '@components/MenuMain/MenuMain';

const backDropEl = document.getElementById('back-drop');
const modalEl = document.getElementById('modal');

const DeliveryOrderPage = () => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => {
    setIsShown((prevIsShown) => !prevIsShown);
  };
  return (
    <>
      {isShown && createPortal(<BackDrop onClick={handleClick} />, backDropEl)}
      {isShown && createPortal(<Modal />, modalEl)}
			<Header onClick={handleClick} />
			<MenuMain/>
    </>
  );
};

export default DeliveryOrderPage;
