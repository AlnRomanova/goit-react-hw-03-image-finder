import React from 'react';
import css from './Button.module.css';

const Button = ({handleClick}) => {
  return (
    <button className={css.btn} type="button" onClick={handleClick}>Load more</button>
  )
}
export default Button;
