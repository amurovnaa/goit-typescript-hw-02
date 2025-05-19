import Modal from "react-modal";
import s from "./ImageModal.module.css";
import { Image } from "../../App/App";
import { useEffect } from "react";

type ImageModalProps = {
  results: Image[];
  imageUrl: string;
  closeModal: () => void;
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "6px",
    borderRadius: "12px",
    maxWidth: "90vw",
    maxHeight: "90vh",
    overflow: "auto",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
};

const ImageModal = ({ results, imageUrl, closeModal }: ImageModalProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  return (
    <Modal
      isOpen={!!imageUrl}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Image Modal"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <img src={imageUrl} alt="Modal Image" className={s.image}></img>
      <button className={s.button} onClick={closeModal}>
        close
      </button>
    </Modal>
  );
};
export default ImageModal;
