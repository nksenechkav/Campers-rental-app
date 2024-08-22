// src/components/camperModal/CamperModal.jsx

import css from "./CamperModal.module.scss";
import Modal from 'react-modal';

Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
};

const CamperModal = ({ content, isOpen, onRequestClose }) => {

  const { name, gallery = [], description } = content;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      style={customStyles}>
      <div className={css["modal-window"]}>
        <div className={css["modal-images"]}>
        <div className={css["image-wrapper"]}>
          <img className={css["image"]} src={gallery[0]} alt={name}/>
        </div>
        <div className={css["image-wrapper"]}>
          <img className={css["image"]} src={gallery[1]} alt={name}/>
        </div>
        <div className={css["image-wrapper"]}>
          <img className={css["image"]} src={gallery[2]} alt={name}/>
        </div>
        </div>
        <div className={css["modal-text"]}>
          <div className={css["modal-element"]}><span>{name}</span></div>
          <div className={css["modal-element"]}><span>{description}</span></div>
        </div>
      </div>
    </Modal>
  );
}

export default CamperModal;