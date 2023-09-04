import Button from '@components/UI/Button/Button';
import React from 'react'

const ModalButtonWrap = () => {
	return (
		<div>
      <Button title='취소하기' className='modal__cancel-button'/>
      <Button title='결제하기' className='modal__payment-button'/>
    </div>
  );
}

export default ModalButtonWrap