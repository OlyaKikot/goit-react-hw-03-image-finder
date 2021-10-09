import s from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";
export default function ImageGalleryItem({ image, onImgClick }) {
  const { id, webformatURL, largeImageURL } = image;
  return (
    <li className={s.ImageGalleryItem} key={id}>
      <img
        onClick={() => {
          onImgClick(largeImageURL);
        }}
        src={webformatURL}
        alt="images"
        className={s.ImageGalleryItemImage}
        data-sours={largeImageURL}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  images: PropTypes.array,
  onImgClick: PropTypes.func.isRequired,
};
