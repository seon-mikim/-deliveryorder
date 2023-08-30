import classes from './Button.module.css';

/**
 *
 *
 * ```jsx
 * // 사용 예시
 * import Button from '@components/Button/Button'
 * <Button name='추가하기' className='add-button' onClick={handleClick}/>
 *
 * ```
 *
 * @returns JSX.Element
 */

const Button = ({ name, className, onClick }) => {
  const handleClick = (event) => {
    onClick(event);
  };
  return (
    <button name={name} onClick={handleClick} className={classes[className]}>
      {name}
    </button>
  );
};

export default Button;
