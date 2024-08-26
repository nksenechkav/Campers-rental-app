// src/components/camperModal/CamperModal.jsx

import { useEffect } from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import { BsStarFill } from 'react-icons/bs';
import css from './CamperModal.module.scss';
import Features from '../features/Features';

Modal.setAppElement('#root');

const CamperModal = ({ content, isOpen, onRequestClose }) => {
  const { name, gallery = [], description, formattedPrice, rating, reviews = [], location } = content;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      className={css['modal-content']}
      overlayClassName={css['modal-overlay']}
    >
      <div className={css['modal-content-inner']}>
          <div className={css['modal-window']}>
            <div className={css['header-wrapper']}>
              <div className={css['info-wrapper']}>
                <div className={css['name-wrapper']}>
                  <p className={css.info}>{name}</p>
                </div>
                <ul className={css['info-location']}>
                  <li className={css['wrapper-location']}>
                    <BsStarFill size={16} color="gold" />
                    <p className={css.info}>{rating}</p>
                    <p className={css['info-reviews']}>({reviews.length} Reviews)</p>
                  </li>
                  <li className={css['wrapper-location']}>
                    <svg className={css['my-icon']} width="16" height="16">
                      <use href="/public/icons.svg#icon-map-black"></use>
                    </svg>
                    <p className={css.info}>{location}</p>
                  </li>
                </ul>
                <div className={css['price-wrapper']}>
                  <p className={css.info}>{formattedPrice}</p>
                </div>
              </div>
              <button className={css['close-button']} onClick={onRequestClose}>
                    <AiOutlineClose size={24} />
              </button>
            </div>

            <ul className={css['modal-images']}>
              {gallery.slice(0, 3).map((imgSrc, index) => (
                <li key={index} className={css['image-wrapper']}>
                  <img className={css['image']} src={imgSrc} alt={name} />
                </li>
              ))}
            </ul>

            <div className={css['modal-text']}>
              <div className={css['modal-element']}>
                <span>{description}</span>
              </div>
            </div>
            <div className={css['additionals']}>
            <div className={css['tab-content']}>
            <Features content={content} />
            </div>
          </div>
      </div>
      </div>
    </Modal>
    
  );
};

export default CamperModal;
