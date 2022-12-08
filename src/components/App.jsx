import React, { Component } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";

export class App extends Component {


  render() {
  return (
    <div>
      <Searchbar />
      <ImageGallery />
    </div>
  );
  };
};
