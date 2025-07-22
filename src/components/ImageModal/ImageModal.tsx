import React from "react";
import Modal from "react-modal";
import css from "./ImageModal.module.css";

interface Image {
  urls: {
    regular: string;
  };
  alt_description?: string;
  [key: string]: any;
}

interface ImageModalProps {
  image: Image | null;
  onCloseModal: (isClosed: boolean) => void;
}

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
  content: {
    padding: 0,
    margin: 0,
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    background: "none",
  },
};

const ImageModal: React.FC<ImageModalProps> = ({ image, onCloseModal }) => {
  const closeModal = () => {
    onCloseModal(true);
  };

  return (
    <>
      <Modal isOpen={!!image} onRequestClose={closeModal} style={modalStyles}>
        {image && (
          <img
            src={image.urls.regular}
            alt={image.alt_description || "modal"}
            className={css.images}
          />
        )}
      </Modal>
    </>
  );
}

export default ImageModal;