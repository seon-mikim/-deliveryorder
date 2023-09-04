import MenuList from '@components/MenuList/MenuList'
import classes from './MenuMain.module.css'
const MenuMain = ({getAddOrderData }) => {
	return (
    <main className={classes['main']}>
			<MenuList getAddOrderData={getAddOrderData } />
    </main>
  );
}

export default MenuMain