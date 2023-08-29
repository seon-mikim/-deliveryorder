import classes from'./Button.module.css'

/*
*```js
*
*import Button from '@components/Button/Button'
*<Button name='추가하기' className='add-button' onClick={handleClick}/>
*
*```
*@returns JSX.Element
*/

const Button = ({ name, className, onClick }) => {
	const handleClick = () => {
		onClick()
	}
	return <button onClick={handleClick } className={classes[className] }>{name}</button>;
};

export default Button;
