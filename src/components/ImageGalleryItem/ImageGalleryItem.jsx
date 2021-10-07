import s from "./ImageGalleryItem.module.css";

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
