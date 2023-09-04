import { useCallback, useMemo, useState } from 'react';

import Modal from '@components/Modal/Modal';
import Header from '@components/Header/Header';
import MenuMain from '@components/MenuMain/MenuMain';
import MENU_LIST from 'constants/MENU_LIST';

const DeliveryOrderPage = () => {
  const [isShown, setIsShown] = useState(false);
  const [addOrder, setAddOrder] = useState([]);
  const handleModalOpenClick = () => {
    setIsShown(true);
  };
  const handleModalCloseClick = () => {
    setIsShown(false);
  };
  const getAddOrderData = useCallback((addOrderDataId) => {
    const filterAddOrderData = MENU_LIST.filter(
      (orderDataItem) => orderDataItem.id === addOrderDataId
    );
    setAddOrder((prevAddOrder) => [...prevAddOrder, ...filterAddOrderData]);
  }, []);
  const filterMenuList = useMemo(() => {
    return addOrder.filter(
      (menuListData, index, self) =>
        self.findIndex((item) => item.id === menuListData.id) === index
    );
  }, [addOrder]);


  
  return (
    <>
      {isShown && (
        <Modal
          menuList={filterMenuList}
          handleModalCloseClick={handleModalCloseClick}
        />
      )}

      <Header
        handleModalOpenClick={handleModalOpenClick}
        menuList={filterMenuList}
      />
      <MenuMain getAddOrderData={getAddOrderData} />
    </>
  );
};

export default DeliveryOrderPage;
