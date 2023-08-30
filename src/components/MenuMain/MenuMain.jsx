import MenuList from '@components/MenuList/MenuList'
import classes from './MenuMain.module.css'
const MenuMain = () => {
	return (
		<main className={classes['main']}>
			<MenuList/>
		</main>
	)
}

export default MenuMain