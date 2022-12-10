import React, { Component } from "react";
import {ToastContainer} from "react-toastify";
import {photosMapper} from '../helpers/photosMapper';
import {fetchPhotos} from './services/searchAPI'
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
// import Modal from "./Modal";

export class App extends Component {

  state = {
    searchQuery: '',
    photos: [],
    page: 1,
    isLoading: false,
    isPhotosShown: true,


  }


  componentDidUpdate(prevProps, prevState) {
    if(prevState.searchQuery !== this.state.searchQuery || prevState.page !== this.state.page) {
      this.setState({isLoading: true,  photos: []});
      this.getPhotos();
    }

  }


 async getPhotos () {

  const {searchQuery, page} = this.state;
  this.setState({isLoading: true});

  try {
  const response = await fetchPhotos(searchQuery, page);
   this.setState( (prevState) => ({ photos:[ ...prevState.photos,...photosMapper(response.data.hits)] }));
    console.log(this.state.photos)
  } catch(error) {

    this.setState({error});
  } finally{
    this.setState({ isLoading: false });
  }
  };


  handleFormSubmit = searchQuery => {
    this.setState({searchQuery});
  };


  loadMore = () => {
    console.log('click')
    this.setState((prevState) => ({page: prevState.page + 1 }));

  };




  render() {
    const {photos, isLoading, error} = this.state;
  return (
    <>
<Searchbar onSubmitForm={this.handleFormSubmit}/>
<div>
        {error && <p>Whoops, something went wrong: {error}</p>}
        {isLoading && <p>Loading...</p>}
        {photos.length > 0 && <ImageGallery photos={photos}/>}
      </div>


   <Button handleClick={this.loadMore}/>




      <ToastContainer autoClose={3000} />


    </>
  );
  };
};
