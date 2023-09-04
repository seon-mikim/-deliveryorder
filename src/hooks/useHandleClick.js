import { useCallback } from 'react';


const useHandleClick = () => {
  const handleClick = (handler) => {
  
    handler && handler();
  }
  return { handleClick };
};

export default useHandleClick;
