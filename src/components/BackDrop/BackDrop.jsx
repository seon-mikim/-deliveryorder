import classes from './BackDrop.module.css';

const BackDrop = ({ onClick }) => {
  const handleClick = (event) => {
    event.preventDefault();
    onClick();
  };
  return <div onClick={handleClick} className={classes.background}></div>;
};

export default BackDrop;
