import { useCallback,  useState } from 'react';

import Modal from '@components/Modal/Modal';
import Header from '@components/Header/Header';
import MenuMain from '@components/MenuMain/MenuMain';
import MENU_LIST from 'constants/MENU_LIST';


const DeliveryOrderPage = () => {
 
  const [addOrder, setAddOrder] = useState([]);

  const getAddOrderData = useCallback((addOrderDataId) => {
    const filterAddOrderData = MENU_LIST.filter(
      (orderDataItem) => orderDataItem.id === addOrderDataId
    );
    setAddOrder((prevAddOrder) => [...prevAddOrder, ...filterAddOrderData]);
  }, []);
  return (
    <>
      {/* {isShown && <Modal menuList={addOrder} />} */}
      <Header />
      <MenuMain getAddOrderData={getAddOrderData} />
    </>
  );
};

export default DeliveryOrderPage;
