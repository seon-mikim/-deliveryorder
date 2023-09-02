import Card from '@components/UI/Card/Card';
import classes from './Modal.module.css';
import { useMemo } from 'react';



const ModalOverlay = ({ menuList }) => {
  // const filterMenuList = useMemo(() => {
  //   return (
  //     menuList.length > 0 &&
  //     menuList.filter(
  //       (menuListData, index, self) =>
  //         self.findIndex((item) => item.id === menuListData.id) === index
  //     )
  //   );
  // }, [menuList]);
  return (
    <div className={classes.modal}>
      안녕하세요
      <ul>
        {/* {filterMenuList.map((menuListData) => (
          <Card isModal={true} key={menuListData.id} menu={menuListData} />
        ))} */}
      </ul>
    </div>
  );
};

export default ModalOverlay;
