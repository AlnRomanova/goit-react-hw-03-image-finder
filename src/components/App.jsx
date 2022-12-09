import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
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
    if(prevState.searchQuery !== this.state.searchQuery) {
      this.getPhotos();
    }

  }


 async getPhotos () {

  const {searchQuery} = this.state;
  this.setState({isLoading: true});

  try {
  const response = await fetchPhotos(searchQuery);
   this.setState( (prevState) => ({ photos:[ ...prevState.photos,...photosMapper(response.data.hits)] }));
    console.log(this.state.photos)
  } catch(err) {
   console.log(err)
  } finally{
    this.setState({ isLoading: false });
  }
  };


  handleFormSubmit = searchQuery => {
    this.setState({searchQuery});

  };


  loadMore = () => {
    console.log('click')
    this.setState((prevState) => ({searchQuery: prevState.page + 1}));
  };




  render() {
    const {photos} = this.state;
  return (
    <>
      <Searchbar onSubmitForm={this.handleFormSubmit}/>
      <ImageGallery photos={photos}/>
   <Button handleClick={this.loadMore}/>




      <ToastContainer autoClose={2000} />


    </>
  );
  };
};
