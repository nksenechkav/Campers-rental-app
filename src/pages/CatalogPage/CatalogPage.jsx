import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle';
import { fetchCampers } from '../../redux/campers/operations';
import { selectIsLoading, selectError } from '../../redux/campers/selectors';
import LoaderComponent from '../../components/loader/Loader';
import ErrorMessage from '../../components/error/ErrorMessage';
// import SearchBox from '../../components/searchBox/SearchBox';
import CamperList from '../../components/camperList/CamperList';
import { selectCampers } from '../../redux/campers/selectors';

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
