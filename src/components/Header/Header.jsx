import Button from '@components/UI/Button/Button'
import classes from './Header.module.css'

const Header = ({handleClick }) => {
	return (
		<header className={classes['delivery-header'] }>
			<h1 className={classes['header__text']}>Delivery Order</h1>
			<div>
				<Button name='주문하기' className='header__modal-button--active' onClick={handleClick}/>
			</div>
		</header>
	)
}

export default Header