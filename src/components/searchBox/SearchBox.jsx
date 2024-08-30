import { changeFilter } from '../../redux/filters/slice.js';
import css from './SearchBox.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors.js';
import { useState } from 'react';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (e) => {
    const newValue = e.target.value;
    dispatch(changeFilter(newValue));
  };

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckedItems((prev) => ({ ...prev, [id]: checked }));
  };

  return (
    <div className={css.searchBox}>
      <div className={css.inputWrapper}>
        <p className={css.label}>Location</p>
        <svg className={css["my-icon"]} width="16" height="16">
          <use href="/public/icons.svg#icon-map-black"></use>
        </svg>
        <input
          className={css.searchField}
          type="text"
          placeholder="Kyiv, Ukraine"
          value={filter}
          onChange={handleChange}
        />
      </div>
      <p className={css["label-text"]}>Filters</p>
      <h2 className={css["label-header"]}>Vehicle Equipment</h2>
      <div className={css["checkbox-list"]}>
        {[
          { id: 'users-checkbox', icon: 'icon-users', text: 'Adults' },
          { id: 'automatic-checkbox', icon: 'icon-automatic', text: 'Automatic' },
          { id: 'petrol-checkbox', icon: 'icon-petrol', text: 'Engine' },
          { id: 'kitchen-checkbox', icon: 'icon-kitchen', text: 'Kitchen' },
          { id: 'beds-checkbox', icon: 'icon-beds', text: 'Beds' },
          { id: 'ac-checkbox', icon: 'icon-AC', text: 'AC' },
        ].map(({ id, icon, text }) => (
          <div
            key={id}
            className={`${css["wrapper-services"]} ${checkedItems[id] ? css["checked"] : ''}`}
          >
            <input
              type="checkbox"
              id={id}
              className={css["checkbox-input"]}
              checked={checkedItems[id] || false}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={id} className={css["checkbox-label"]}>
              <svg className={checkedItems[id] ? css["checkbox-icon"] : css["checkbox-icon"]} width="20" height="20">
                <use href={`/public/icons.svg#${icon}`}></use>
              </svg>
              <p className={css.info}>{text}</p>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBox;
