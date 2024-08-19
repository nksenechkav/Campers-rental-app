// src/components/camperModal/CamperModal.jsx

import css from "./CamperModal.module.scss";
import Modal from 'react-modal';
import { AiTwotoneLike } from "react-icons/ai";

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

  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    maxWidth: "90vw",
    maxHeight: "90vh",
    overflow: "hidden",
    objectFit: "contain",
    border: "none",
    borderRadius: "5px",
    padding: "0",
    margin: "20px", 
  },
};

const CamperModal = ({ content: { modal, name, price, rating, location, adults, children, engine, transmission, form, length, width, height, tank, consumption, description, details, gallery, reviews}, isOpen, onRequestClose }) => {
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onRequestClose()}
      shouldCloseOnOverlayClick={true}
      style={customStyles}> 
      <div className={css["modal-window"]}>
        <div className={css["modal-image"]}>
        <img src={modal} alt={name}/>
        </div>
            <div className={css["modal-text"]}> 
                    <div className={css["modal-element"]}><p><AiTwotoneLike /></p><span>{price}</span></div>
                    <div className={css["modal-element"]}><span>{rating}</span></div>
                    <div className={css["modal-element"]}><span>{location}</span></div>
                    <div className={css["modal-element"]}><span>{gallery}</span></div>
                    <div className={css["modal-element"]}><span>{description}</span></div>
                    <div className={css["modal-element"]}><p><AiTwotoneLike /></p><span>{adults}</span></div>
                    <div className={css["modal-element"]}><span>{children}</span></div>
                    <div className={css["modal-element"]}><span>{engine}</span></div>
                    <div className={css["modal-element"]}><p><AiTwotoneLike /></p><span>{transmission}</span></div>
                    <div className={css["modal-element"]}><span>{form}</span></div>
                    <div className={css["modal-element"]}><span>{length}</span></div>
                    <div className={css["modal-element"]}><p><AiTwotoneLike /></p><span>{width}</span></div>
                    <div className={css["modal-element"]}><span>{height}</span></div>
                    <div className={css["modal-element"]}><span>{tank}</span></div>
                    <div className={css["modal-element"]}><span>{consumption}</span></div>
                    <div className={css["modal-element"]}><span>{details}</span></div>
                    <div className={css["modal-element"]}><span>{reviews}</span></div>
            </div>
      </div>
    </Modal>
  );
}

export default CamperModal;