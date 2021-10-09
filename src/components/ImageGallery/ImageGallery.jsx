import ImageGalleryItem from "../ImageGalleryItem";
import s from "./ImageGallery.module.css";
import PropTypes from "prop-types";
export default function ImageGallery({ images, onImgClick }) {
  return (
    <>
      <ul className={s.ImageGallery}>
        {images.map((image) => {
          return (
            <ImageGalleryItem
              image={image}
              key={image.id}
              onImgClick={onImgClick}
            />
          );
        })}
      </ul>
    </>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  onImgClick: PropTypes.func.isRequired,
};
