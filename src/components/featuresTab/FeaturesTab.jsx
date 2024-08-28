// src/components/FeaturesTab/FeaturesTab.jsx

import css from './FeaturesTab.module.scss';

const FeaturesTab = ({ content }) => {
  return (
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
  );
};

export default FeaturesTab;
