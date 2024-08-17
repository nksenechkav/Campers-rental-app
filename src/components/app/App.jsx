import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../layout/Layout.jsx';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const FavouritesPage = lazy(() => import('../../pages/FavouritesPage/FavouritesPage'));


const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavouritesPage />} />
      </Routes>
    </Layout>
);
};

export default App