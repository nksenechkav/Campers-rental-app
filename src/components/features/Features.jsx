// src/components/Features/Features.jsx

import css from './Features.module.scss';

const Features = ({ content }) => {
    if (!content) {
      return <div>Loading...</div>; // Handle the case when content is not provided
    }
  
    const { adults, transmission, engine, details } = content;
  
    if (!details) {
      return <div>No details available</div>; // Handle the case when details are missing
    }
  
    return (
      <div className={css['features']}>
        <div className={css["info-services"]}>
          <div className={css["wrapper-services"]}>
            <svg className={css["my-icon-unique"]} width="20" height="20">
              <use href="/public/icons.svg#icon-users"></use>
            </svg>
            <p className={css.info}>{adults} adults</p>
          </div>
          <div className={css["wrapper-services"]}>
            <svg className={css["my-icon"]} width="20" height="20">
              <use href="/public/icons.svg#icon-automatic"></use>
            </svg>
            <p className={css.info}>{transmission}</p>
          </div>
          <div className={css["wrapper-services"]}>
            <svg className={css["my-icon-unique"]} width="20" height="20">
              <use href="/public/icons.svg#icon-petrol"></use>
            </svg>
            <p className={css.info}>{engine}</p>
          </div>
          <div className={css["wrapper-services"]}>
            <svg className={css["my-icon"]} width="20" height="20">
              <use href="/public/icons.svg#icon-kitchen"></use>
            </svg>
            <p className={css.info}>{details.kitchen ? 'Yes' : 'No'} kitchen</p>
          </div>
          <div className={css["wrapper-services"]}>
            <svg className={css["my-icon"]} width="20" height="20">
              <use href="/public/icons.svg#icon-beds"></use>
            </svg>
            <p className={css.info}>{details.beds} beds</p>
          </div>
          <div className={css["wrapper-services"]}>
            <svg className={css["my-icon"]} width="20" height="20">
              <use href="/public/icons.svg#icon-AC"></use>
            </svg>
            <p className={css.info}>AC</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Features;
