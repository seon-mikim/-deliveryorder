import { useCallback } from 'react';


const useHandleClick = () => {
  const handleClick = useCallback((handler) => {
    handler && handler();
  }, []);
  return { handleClick };
};

export default useHandleClick;
