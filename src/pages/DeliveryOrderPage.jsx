import BackDrop from '@components/BackDrop/BackDrop';
import Header from '@components/Header/Header';
import Modal from '@components/Modal/Modal';
import { useState } from 'react';
import { createPortal } from 'react-dom';

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
    </>
  );
};

export default DeliveryOrderPage;
