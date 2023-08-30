import Card from '@components/UI/Card/Card';
import MENU_LIST from 'constants/MENU_LIST';

const MenuList = () => {
  return (
    <ul>
      {MENU_LIST.map((menu, index) => (
        <Card key={index} menu={menu} />
      ))}
    </ul>
  );
};

export default MenuList;
