import "./App.css";

import React from "react";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button/Button";
import Loader from "./components/Loader";
import Modal from "./components/Modal/Modal";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default class App extends React.Component {
  state = {
    images: [],
    loading: false,
    imageNames: "",
    page: 1,
    bigImg: null,
  };
  onSubmit = (imageNames) => {
    this.setState({ imageNames });
    if (this.state.imageNames !== imageNames) {
      this.setState({ images: [], page: 1 });
    }
  };

  onCloseModal = () => {
    this.setState({ bigImg: null });
  };

  onImgClick = (largeImageURL) => {
    this.setState({ bigImg: largeImageURL });
  };

  getImages = () => {
    this.setState({ loading: true });
    fetch(
      `https://pixabay.com/api/?q=${this.state.imageNames}&page=${this.state.page}&key=22945587-13dcce98a35cac559e6949163&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((response) => response.json())
      .then((resp) => {
        if (resp.hits.length === 0) {
          toast("Уточните критерии поиска!");
        }
        return this.setState((old) => ({
          images: [...old.images, ...resp.hits],
        }));
      })
      .catch((error) => console.log(error))
      .finally(() => this.setState({ loading: false }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.imageNames !== this.state.imageNames ||
      prevState.page !== this.state.page
    ) {
      this.getImages();
    }
    if (this.state.page > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.onCloseModal();
    }
  };

  handleOverlay = (e) => {
    if (e.currentTarget === e.target) {
      this.onCloseModal();
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  onLoadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.images} onImgClick={this.onImgClick} />
        {this.state.loading && <Loader />}
        {this.state.images.length > 0 && (
          <Button onLoadMore={this.onLoadMore} />
        )}
        <ToastContainer autoClose={3000} />
        {this.state.bigImg && (
          <Modal
            src={this.state.bigImg}
            onCloseModal={this.onCloseModal}
            handleOverlay={this.handleOverlay}
          />
        )}
      </>
    );
  }
}
