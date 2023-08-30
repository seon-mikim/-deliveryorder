import Card from '@components/UI/Card/Card';
import MENU_LIST from 'constants/MENU_LIST';
import classes from './MenuList.module.css'

const MenuList = () => {
  return (
    <ul className={classes['main__menu-list'] }>
      {MENU_LIST.map((menu, index) => (
        <Card key={index} menu={menu} />
      ))}
    </ul>
  );
};

export default MenuList;
