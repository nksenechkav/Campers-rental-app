// src/pages/CatalogPage/CatalogPage.jsx

// src/pages/CatalogPage/CatalogPage.jsx

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle.jsx';
import { fetchCampers } from '../../redux/campers/operations.js';
import { selectIsLoading, selectError, selectCampers } from '../../redux/campers/selectors.js';
import LoaderComponent from '../../components/loader/Loader.jsx';
import ErrorMessage from '../../components/error/ErrorMessage.jsx';
import SearchBox from '../../components/searchBox/SearchBox.jsx';
import CamperList from '../../components/camperList/CamperList.jsx';
import css from './CatalogPage.module.scss';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const campers = useSelector(selectCampers); // Отримуємо всіх кемперів з Redux

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={css["catalog-page-container"]}>
      <DocumentTitle>Catalog</DocumentTitle>
      <SearchBox/>
      {isLoading && <LoaderComponent />}
      {error && <ErrorMessage />}
      <CamperList campers={campers} /> {/* Передаємо всі кемпери */}
    </div>
  );
}
