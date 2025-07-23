import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import css from "./ImageGallery.module.css";

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description?: string | null;
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
        {images.map((image) => (
          <li key={image.id} onClick={() => handleOpenModal(image)}>
            <ImageCard
              src={image.urls.small}
              alt={image.alt_description ?? "Image"}
            />
          </li>
        ))}
      </ul>

      <div className={css.loadMoreWrapper}>
        <LoadMoreBtn handleClick={handleLoadMore} />
      </div>
    </>
  );
}

export default ImageGallery;