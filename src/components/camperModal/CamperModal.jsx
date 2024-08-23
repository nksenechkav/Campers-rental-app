// src/components/camperModal/CamperModal.jsx

import css from "./CamperModal.module.scss";
import Modal from 'react-modal';
import { AiOutlineClose } from "react-icons/ai";
import { BsStarFill } from "react-icons/bs";

Modal.setAppElement("#root");

const CamperModal = ({ content, isOpen, onRequestClose }) => {
  const { name, gallery = [], description, formattedPrice, rating, reviews = [], location } = content;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      className={css["modal-content"]}
      overlayClassName={css["modal-overlay"]}>
        
      <div className={css["modal-window"]}>
        <div className={css["header-wrapper"]}>
          <div className={css["info-wrapper"]}>
            <div className={css["name-wrapper"]}>
              <p className={css.info}>{name}</p>
            </div>
            <ul className={css["info-location"]}>
              <li className={css["wrapper-location"]}>
                <BsStarFill size={16} color="gold" />
                <p className={css.info}>{rating}</p>
                <p className={css["info-reviews"]}>({reviews.length} Reviews)</p>
              </li>
              <li className={css["wrapper-location"]}>
                <svg className={css["my-icon"]} width="16" height="16"><use href="/public/icons.svg#icon-map-black"></use></svg>
                <p className={css.info}>{location}</p>
              </li>
            </ul>
            <div className={css["price-wrapper"]}>
              <p className={css.info}>{formattedPrice}</p>
            </div>
          </div>

          <button className={css["close-button"]} onClick={onRequestClose}>
            <AiOutlineClose size={24} />
          </button>
        </div>

        <ul className={css["modal-images"]}>
          <li className={css["image-wrapper"]}>
            <img className={css["image"]} src={gallery[0]} alt={name} />
          </li>
          <li className={css["image-wrapper"]}>
            <img className={css["image"]} src={gallery[1]} alt={name} />
          </li>
          <li className={css["image-wrapper"]}>
            <img className={css["image"]} src={gallery[2]} alt={name} />
          </li>
        </ul>

        <div className={css["modal-text"]}>
          <div className={css["modal-element"]}><span>{description}</span></div>
        </div>
      </div>
    </Modal>
  );
};

export default CamperModal;
