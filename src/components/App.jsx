import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { photosMapper } from '../helpers/photosMapper';
import { fetchPhotos } from './services/searchAPI';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from "./Modal";

export class App extends Component {
  state = {
    searchQuery: '',
    photos: [],
    page: 1,
    isLoading: false,
    largeImage: null,
    showModal: false,

  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true, photos: [] });
      this.getPhotos();
    }
  }

  async getPhotos() {
    const { searchQuery, page } = this.state;
    this.setState({ isLoading: true });

    try {
      const response = await fetchPhotos(searchQuery, page);
      this.setState(prevState => ({
        photos: [...prevState.photos, ...photosMapper(response.data.hits)],
      }));
      if (!response.data.hits.length) {
        return Promise.reject(
          new Error(
            toast.info(
              '😲 Sorry, there are no images matching your search query.'
            )
          )
        );
      } else {
        toast.success(`Hooray! We found images.`, {
          icon: '🚀',
        });
      }
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  loadMore = () => {
    console.log('click');
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = data => {
    this.setState({largeImage: data.hits, showModal: true })
  };

  closeModal = () => {
    this.setState({ largeImage: null, showModal: false})
  }

  render() {

    const { photos, isLoading, error, showModal} = this.state;

    return (
      <>
        <Searchbar onSubmitForm={this.handleFormSubmit} />
        <ImageGallery photos={photos} onClick={this.openModal}/>

       {showModal && <Modal image={this.largeImage} closeModal={this.closeModal}/>}

        <>
          {error && <p>{error.message}</p>}
          {isLoading && <Loader />}
          {photos.length > 0 && <Button handleClick={this.loadMore} />}
        </>
        <ToastContainer autoClose={2000} />
      </>
    );
  }
}
