import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import css from "./ImageGallery.module.css";

interface Image {
  id: string;
  urls: {
    small: string;
  };
  alt_description: string;
  [key: string]: any;
}

interface Props {
  images: Image[];
  handleLoadMore: () => void;
  handleOpenModal: (image: Image) => void;
}

const ImageGallery: React.FC<Props> = ({
  images,
  handleLoadMore,
  handleOpenModal,
}) => {
  return (
    <>
      <ul className={css.gallery}>
        {images.map((el) => (
          <li key={el.id} onClick={() => handleOpenModal(el)}>
            <ImageCard src={el.urls.small} alt={el.alt_description} />
          </li>
        ))}
      </ul>
      <LoadMoreBtn handleClick={handleLoadMore} />
    </>
  );
}

export default ImageGallery;