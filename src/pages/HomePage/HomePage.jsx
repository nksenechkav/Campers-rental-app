import DocumentTitle from '../../components/DocumentTitle';
import css from './HomePage.module.scss';

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Camper Rental</DocumentTitle>

      <div className={css.container}>
        <h1 className={css.title}>
          Welcome to Camper Rental
        </h1>
        <p className={css.subtitle}>
          Your adventure starts here! Explore our wide range of campers and find the perfect fit for your next journey.
        </p>
        <p className={css.icon}>
          <span role="img" aria-label="Camper icon">🚐</span>
        </p>
      </div>
    </>
  );
}
