
import ModalOverlay from './ModalOverlay/ModalOverlay';
import BackDrop from './BackDrop/BackDrop';
import { createPortal } from 'react-dom';

const Modal = () => {
  
  return (
    <div>
      {createPortal(<BackDrop />, document.getElementById('back-drop'))}
      {createPortal(<ModalOverlay />, document.getElementById('modal'))}
    </div>
  );
};

export default Modal;
