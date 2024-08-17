import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle.jsx';
import { fetchCampers } from '../../redux/campers/operations.js';
import { selectIsLoading, selectError } from '../../redux/campers/selectors.js';
import LoaderComponent from '../../components/loader/Loader.jsx';
import ErrorMessage from '../../components/error/ErrorMessage.jsx';
// import SearchBox from '../../components/searchBox/SearchBox.jsx';
import CamperList from '../../components/camperList/CamperList.jsx';
import { selectCampers } from '../../redux/campers/selectors.js';

export default function CatalogPage() {
  const campers = useSelector(selectCampers);
  console.log('Campers:', campers);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    console.log("Fetching campers...");
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Catalog</DocumentTitle>
      {/* <SearchBox/> */}
      {isLoading && <LoaderComponent />}
      {error && <ErrorMessage />}
      <CamperList />
    </>
  );
}
