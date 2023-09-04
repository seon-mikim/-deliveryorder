
import ModalOverlay from './ModalOverlay/ModalOverlay';
import BackDrop from './BackDrop/BackDrop';
import { createPortal } from 'react-dom';
import AlertModal from '@components/UI/AlertModal/AlertModal';

const Modal = ({ menuList, handleModalCloseClick, getLength, getTotal, totalPrice}) => {
  
  return (
    <div>
      {menuList.length >0&&
        createPortal(
          <BackDrop handleModalCloseClick={handleModalCloseClick} />,
          document.getElementById('back-drop')
        )}
      {menuList.length>0 &&
        createPortal(
          <ModalOverlay
            menuList={menuList}
            getLength={getLength}
            getTotal={getTotal}
            totalPrice={totalPrice}
            handleModalCloseClick={handleModalCloseClick}
          />,
          document.getElementById('modal')
        )}
    </div>
  );
};

export default Modal;
