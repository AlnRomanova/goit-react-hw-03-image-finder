import React from 'react';
import css from './Searchbar.module.css';

const Searchbar = () => {
  return (
    <>
      <header className={css.searchbar}>
        <form className={css.form}>
          <button type="submit" className={css.formButton}>
            <span className={css.formLabel}>Search</span>
          </button>
          <input
            className={css.formInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
};

export default Searchbar;
