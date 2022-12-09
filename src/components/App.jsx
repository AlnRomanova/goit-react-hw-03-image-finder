import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import {photosMapper} from '../helpers/photosMapper';
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
// import Modal from "./Modal";

export class App extends Component {

  state = {
    q: '',
    photos: photosMapper,
    page: 1,

  }


  handleFormSubmit = q => {
    this.setState({q});
    console.log(q)

  }


  render() {
  return (
    <>
      <Searchbar onSubmitForm={this.handleFormSubmit}/>
      <ImageGallery />
      <Button />
      <ToastContainer/>

    </>
  );
  };
};
