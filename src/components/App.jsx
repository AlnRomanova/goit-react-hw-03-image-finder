import React, { Component } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
// import Modal from "./Modal";

export class App extends Component {


  render() {
  return (
    <>
      <Searchbar />
      <ImageGallery />
      <Button />

    </>
  );
  };
};
