import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from "../components/Navigation/Navigation";
import NotFoundPage from '../pages/NotFoundPage';
import s from './App.module.css';

const HomePage = lazy(() => import("../pages/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage/MovieDetailsPage"));
const MovieCast = lazy(() => import("../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./MovieReviews/MovieReviews"));

export const App = () => {
  return (
    <div className={s.container}>
      <Navigation />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path ="cast" element={<MovieCast/>} />
            <Route path ="reviews" element={<MovieReviews/>} />
          </Route>
          <Route path="*" element={<NotFoundPage/>} />
          </Routes>
      </Suspense>
    </div>
  );
};
