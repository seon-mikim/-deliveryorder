import Card from '@components/UI/Card/Card';
import classes from './Modal.module.css';

const Modal = ({ menuList }) => {
  
  const filterMenuList =
    menuList.length > 0 &&
    menuList.filter(
      (menuListData, index, self) =>
        self.findIndex((item) => item.id === menuListData.id) === index
    );
  return (
    <div className={classes.modal}>
      <ul>
        {filterMenuList.map((menuListData) => (
          <Card isModal={true } key={menuListData.id } menu={menuListData} />
        ))}
      </ul>
    </div>
  );
};

export default Modal;
