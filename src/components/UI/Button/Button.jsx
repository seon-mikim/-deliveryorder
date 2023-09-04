import { memo, useCallback } from 'react';
import classes from './Button.module.css';
import useHandleClick from 'hooks/useHandleClick';

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

const Button = ({ name, title, className, handler }) => {
 
  const { handleClick } = useHandleClick();
  const handleButtonClick = () => {
    handleClick(handler)
  };

  return (
    <button
      name={name}
      onClick={handleButtonClick}
      className={classes[className]}
    >
      {title ? (
        title
      ) : (
        <img
          className={classes[`${name}`]}
          src={`/images/${name}.svg`}
          alt={`${name}-icon`}
        />
      )}
    </button>
  );
};

export default Button;
