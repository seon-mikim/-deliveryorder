import { useCallback, useMemo, useState } from 'react';

import Modal from '@components/Modal/Modal';
import Header from '@components/Header/Header';
import MenuMain from '@components/MenuMain/MenuMain';
import MENU_LIST from 'constants/MENU_LIST';

const DeliveryOrderPage = () => {
  const [isShown, setIsShown] = useState(false);
  const [addOrder, setAddOrder] = useState([]);
  const [totalAmount, setTotalAmount] = useState([])
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
  const getMenuListPrice = useCallback((amount) => {
     setTotalAmount((prevTotalAmount) => [...prevTotalAmount, amount])
  }, [])
  const reduceMenuTotalPrice = useMemo(() => {
    if(totalAmount.length >0) return totalAmount.reduce((prev, cur) => prev + cur)
  }, [totalAmount])
  console.log(totalAmount)
  return (
    <>
      {isShown && (
        <Modal
          menuList={filterMenuList}
          handleModalCloseClick={handleModalCloseClick}
          getTotal={getMenuListPrice}
          totalPrice={reduceMenuTotalPrice }
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
