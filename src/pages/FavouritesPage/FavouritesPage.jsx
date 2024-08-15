import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/DocumentTitle';
import { fetchCampers } from '../../redux/campers/operations';
import { selectIsLoading, selectError } from '../../redux/campers/selectors';
import LoaderComponent from '../../components/loader/Loader';
import ErrorMessage from '../../components/error/ErrorMessage';
import CamperList from '../../components/camperList/CamperList';
// import ContactForm from '../../components/contactForm/ContactForm';
// import SearchBox from '../../components/searchBox/SearchBox';

export default function FavouritesPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Favourites</DocumentTitle>
      {/* <ContactForm />
      <SearchBox/> */}
      {isLoading && <LoaderComponent />}
      {error && <ErrorMessage />}
      <CamperList />
    </>
  );
}
