// src/components/camperModal/CamperModal.jsx

import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import { BsStarFill } from 'react-icons/bs';
import css from './CamperModal.module.scss';

Modal.setAppElement('#root');

const CamperModal = ({ content, isOpen, onRequestClose }) => {
  const [activeTab, setActiveTab] = useState('features'); // Default to "features" tab

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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

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
                <p className={css.info}>{content.name}</p>
              </div>
              <ul className={css['info-location']}>
                <li className={css['wrapper-location']}>
                  <BsStarFill size={16} color="gold" />
                  <p className={css.info}>{content.rating}</p>
                  <p className={css['info-reviews']}>({content.reviews?.length || 0} Reviews)</p>
                </li>
                <li className={css['wrapper-location']}>
                  <svg className={css['my-icon']} width="16" height="16">
                    <use href="/public/icons.svg#icon-map-black"></use>
                  </svg>
                  <p className={css.info}>{content.location}</p>
                </li>
              </ul>
              <div className={css['price-wrapper']}>
                <p className={css.info}>{content.formattedPrice}</p>
              </div>
            </div>
            <button className={css['close-button']} onClick={onRequestClose}>
              <AiOutlineClose size={24} />
            </button>
          </div>

          <ul className={css['modal-images']}>
            {content.gallery?.slice(0, 3).map((imgSrc, index) => (
              <li key={index} className={css['image-wrapper']}>
                <img className={css['image']} src={imgSrc} alt={content.name} />
              </li>
            ))}
          </ul>

          <div className={css['modal-text']}>
            <div className={css['modal-element']}>
              <span>{content.description}</span>
            </div>
          </div>

          <div className={css['additionals']}>
            <ul className={css['nav-links']}>
              <li>
                <button
                  className={`${css['nav-link']} ${activeTab === 'features' ? css['active'] : ''}`}
                  onClick={() => handleTabChange('features')}
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  className={`${css['nav-link']} ${activeTab === 'reviews' ? css['active'] : ''}`}
                  onClick={() => handleTabChange('reviews')}
                >
                  Reviews
                </button>
              </li>
            </ul>
          </div>

          {/* Render the appropriate tab content */}
          <div className={css['tab-content']}>
          {activeTab === 'features' && (
    <div className={css['features']}>
      <ul className={css["info-services"]}>
        {content.adults && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon-unique"]} width="20" height="20">
              <use href="/public/icons.svg#icon-users"></use>
            </svg>
            <p className={css.info}>{content.adults} adults</p>
          </li>
        )}
        {content.transmission && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon"]} width="20" height="20">
              <use href="/public/icons.svg#icon-automatic"></use>
            </svg>
            <p className={css.info}>{content.transmission}</p>
          </li>
        )}
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon"]} width="20" height="20">
              <use href="/public/icons.svg#icon-AC"></use>
            </svg>
            <p className={css.info}>AC</p>
          </li>
        {content.engine && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon-unique"]} width="20" height="20">
              <use href="/public/icons.svg#icon-petrol"></use>
            </svg>
            <p className={css.info}>{content.engine}</p>
          </li>
        )}
        {content.kitchen && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon"]} width="20" height="20">
              <use href="/public/icons.svg#icon-kitchen"></use>
            </svg>
            <p className={css.info}>{content.kitchen} kitchen</p>
          </li>
        )}
        {content.beds && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon"]} width="20" height="20">
              <use href="/public/icons.svg#icon-beds"></use>
            </svg>
            <p className={css.info}>{content.beds} beds</p>
          </li>
        )}
        {content.airConditioner && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon"]} width="20" height="20">
              <use href="/public/icons.svg#icon-air-conditioner"></use>
            </svg>
            <p className={css.info}>{content.airConditioner} air conditioner</p>
          </li>
        )}
        {content.CD && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon"]} width="20" height="20">
              <use href="/public/icons.svg#icon-CD"></use>
            </svg>
            <p className={css.info}>{content.CDr} CD</p>
          </li>
        )}
        {content.radio && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon"]} width="20" height="20">
              <use href="/public/icons.svg#icon-radio"></use>
            </svg>
            <p className={css.info}>{content.radio} radio</p>
          </li>
        )}
        {content.TV && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon"]} width="20" height="20">
              <use href="/public/icons.svg#icon-TV"></use>
            </svg>
            <p className={css.info}>{content.TV} TV</p>
          </li>
        )}
        {content.shower && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon"]} width="20" height="20">
              <use href="/public/icons.svg#icon-beds"></use>
            </svg>
            <p className={css.info}>{content.shower} shower</p>
          </li>
        )}
        {content.toilet && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon-unique"]} width="20" height="20">
              <use href="/public/icons.svg#icon-toilet"></use>
            </svg>
            <p className={css.info}>{content.toilet} toilet</p>
          </li>
        )}
        {content.freezer && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon"]} width="20" height="20">
              <use href="/public/icons.svg#icon-freezer"></use>
            </svg>
            <p className={css.info}>{content.freezer} freezer</p>
          </li>
        )}
        {content.hob && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon"]} width="20" height="20">
              <use href="/public/icons.svg#icon-hob"></use>
            </svg>
            <p className={css.info}>{content.hob} hob</p>
          </li>
        )}
        {content.microwave && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon"]} width="20" height="20">
              <use href="/public/icons.svg#icon-microwave"></use>
            </svg>
            <p className={css.info}>{content.microwave} microwave</p>
          </li>
        )}
         {content.gas && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon-unique"]} width="20" height="20">
              <use href="/public/icons.svg#icon-gas"></use>
            </svg>
            <p className={css.info}>{content.gas} gas</p>
          </li>
        )}
         {content.water && (
          <li className={css["wrapper-services"]}>
            <svg className={css["my-icon"]} width="20" height="20">
              <use href="/public/icons.svg#icon-water"></use>
            </svg>
            <p className={css.info}>{content.water} water</p>
          </li>
        )}
      </ul>
    </div>
  )}
            {activeTab === 'reviews' && (
              <div className={css['reviews']}>
                {content.reviews?.map((review, index) => (
                  <div key={index} className={css['review-item']}>
                    <p className={css['reviewer-name']}>{review.reviewer_name}</p>
                    <p className={css['reviewer-rating']}>Rating: {review.reviewer_rating}</p>
                    <p className={css['reviewer-comment']}>{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};


export default CamperModal;
