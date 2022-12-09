import React, {Component} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './Searchbar.module.css';

class Searchbar extends Component {

 state = {
   q: '',

 }

 handleSearchChange = e => {
  this.setState({q: e.currentTarget.value.toLowerCase()});
 };

 handleSearchSubmit = e => {
  e.preventDefault();
  if(this.state.q.trim() === '' ) {
   toast.error("Please fill out this field")
    return
  }
  this.props.onSubmitForm(this.state.q);
  this.setState({q: ''});
 };



render () {

  return (
    <>
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSearchSubmit}>
          <button type="submit" className={css.formButton}>
            <span className={css.formLabel}>Search</span>
          </button>
          <input
            className={css.formInput}
            type="text"
            value={this.state.q}
            onChange={this.handleSearchChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
}
};


export default Searchbar;
