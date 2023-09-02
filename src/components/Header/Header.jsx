import Button from '@components/UI/Button/Button';
import classes from './Header.module.css';


const Header = () => {
  return (
    <header className={classes['delivery-header']}>
      <h1 className={classes['header__text']}>Delivery Order</h1>
      <div>
        <Button
          name="order"
          title="주문하기"
          className="header__modal-button--active"
        />
      </div>
    </header>
  );
};

export default Header;
