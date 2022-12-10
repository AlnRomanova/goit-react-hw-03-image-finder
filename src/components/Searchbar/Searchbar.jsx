
import React, {Component} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './Searchbar.module.css';

class Searchbar extends Component {

 state = {
  searchQuery: '',
  photos: [],

 }

 handleSearchChange = e => {
  this.setState({searchQuery: e.currentTarget.value.toLowerCase()});
 };

 handleSearchSubmit = e => {
  e.preventDefault();

  if(this.state.searchQuery.trim() === '' ) {
  return toast.error("Please fill out this field")
  }
  // if (this.state.searchQuery) {
  //   return toast.info("Sorry, there are no images matching your search query. Please try again.");
  // }

  // if  (this.state.photos.length > 0) {
  //      toast.success(`Hooray! We found images.`)
  // }

  this.props.onSubmitForm(this.state.searchQuery);
  this.setState({searchQuery: ''});
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
            value={this.state.searchQuery}
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
