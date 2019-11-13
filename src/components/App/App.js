import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navigation from '../Navigation';
import HomePage from '../../Pages/HomePage';
import MovieDetailsPage from '../../Pages/MovieDetailsPage';
import routes from '../../routes';
import MoviesPage from '../../Pages/MoviesPage/MoviesPage';
import styles from './App.module.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path={routes.HOME_PAGE} component={HomePage} />
        <Route
          path={routes.MOVIES_DETAILES_PAGE}
          component={MovieDetailsPage}
        />
        <Route path={routes.MOVIES_PAGE} component={MoviesPage} />
        <Redirect to={routes.HOME_PAGE} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
