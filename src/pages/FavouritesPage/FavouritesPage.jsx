// src/pages/FavouritesPage/FavouritesPage.jsx

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle.jsx';
import { fetchCampers } from '../../redux/campers/operations.js';
import { selectIsLoading, selectError, selectFavouritesCampers } from '../../redux/campers/selectors.js';
import LoaderComponent from '../../components/loader/Loader.jsx';
import ErrorMessage from '../../components/error/ErrorMessage.jsx';
import CamperList from '../../components/camperList/CamperList.jsx';
// import SearchBox from '../../components/searchBox/SearchBox.jsx';

export default function FavouritesPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const favouritesCampers = useSelector(selectFavouritesCampers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Favourites</DocumentTitle>
      {/* <SearchBox/> */}
      {isLoading && <LoaderComponent />}
      {error && <ErrorMessage />}
      {favouritesCampers.length > 0 ? (
        <CamperList campers={favouritesCampers} />
      ) : (
        <p>No favourites yet.</p>
      )}
    </>
  );
}
