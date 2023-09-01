import Card from '@components/UI/Card/Card';
import MENU_LIST from 'constants/MENU_LIST';
import classes from './MenuList.module.css'
import { useEffect, useState } from 'react';

const MenuList = ({ getAddOrderData }) => {
  const [menuListData, setMenuListData] = useState([])
  useEffect(() => {
    setMenuListData([...MENU_LIST])
  },[])
  return (
    <ul className={classes['main__menu-list']}>
      {menuListData.map((menu) => (
        <Card key={menu.id} menu={menu} getAddOrderData={getAddOrderData} />
      ))}
    </ul>
  );
};

export default MenuList;
