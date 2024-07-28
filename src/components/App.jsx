// import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import Navigation from "../components/Navigation/Navigation";
import NotFoundPage from '../pages/NotFoundPage';
import MoviesPage from "../pages/MoviesPage";
// import css from './App.module.css';

// const Home = lazy(() => import('../pages/Home'));
// const About = lazy(() => import('../pages/About'));
// const ProductDetails = lazy(() => import('../pages/ProductDetails'));
// const Products = lazy(() => import('../pages/Products'));
// const Mission = lazy(() => import('./Mission'));
// const Team = lazy(() => import('./Team'));
// const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      {/* <Suspense fallback={<div>Loading page...</div>}> */}
        {/* <Routes>
          <Route path="/" element={<HomeP />} />
          <Route path="/movies" element={<MoviesPage />}>
            {/* <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} /> */}
          {/* </Route> */}
          {/* <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} /> */}
          {/* <Route path="*" element={<NotFoundPage />} />
        </Routes> } */}
      {/* </Suspense> */}
    </div>
  );
};
