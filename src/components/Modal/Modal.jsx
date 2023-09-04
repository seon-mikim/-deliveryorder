
import ModalOverlay from './ModalOverlay/ModalOverlay';
import BackDrop from './BackDrop/BackDrop';
import { createPortal } from 'react-dom';

const Modal = ({ menuList, handleModalCloseClick, getLength, getTotal, totalPrice}) => {
  
  return (
    <div>
      {createPortal(
        <BackDrop handleModalCloseClick={handleModalCloseClick} />,
        document.getElementById('back-drop')
      )}
      {createPortal(
        <ModalOverlay menuList={menuList} getLength={getLength} getTotal={getTotal} totalPrice={ totalPrice} />,
        document.getElementById('modal')
      )}
    </div>
  );
};

export default Modal;
