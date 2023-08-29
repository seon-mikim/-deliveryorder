import React from 'react';
import classes from'./Button.module.css'
const Button = ({ name, className, onClick }) => {
	const handleClick = () => {
		onClick()
	}
	return <button onClick={handleClick } className={classes[className] }>{name}</button>;
};

export default Button;
