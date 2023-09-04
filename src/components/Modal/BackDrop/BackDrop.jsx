
import classes from './BackDrop.module.css';

const BackDrop = ({ handleModalCloseClick }) => {

  return <div onClick={handleModalCloseClick} className={classes.background}></div>;
};

export default BackDrop;
