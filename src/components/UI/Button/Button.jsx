import { memo } from 'react';
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

const Button = memo(({ name, title, className }) => {
  const { handleClick } = useHandleClick()
  return (
    <button name={name} onClick={handleClick} className={classes[className]}>
      {title ? title : <img className={classes[`${name}`]} src={`/images/${name}.svg`} alt={`${name}-icon`} name={name } />}
    </button>
  );
})

export default Button;
