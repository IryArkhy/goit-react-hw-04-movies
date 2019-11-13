import React, { Component, createContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
import Navigation from '../Navigation';
import HomePage from '../../Pages/HomePage';
import MovieDetailsPage from '../../Pages/MovieDetailsPage';
import routes from '../../routes';
import MoviesPage from '../../Pages/MoviesPage/MoviesPage';
import styles from './App.module.css';

class App extends Component {
  state = {
    keyWord: '',
    error: null,
  };

  render() {
    const {} = this.state;

    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path={routes.HOME_PAGE} component={HomePage} />
          <Route
            path={routes.MOVIES_DETAILES_PAGE}
            component={MovieDetailsPage}
          />
          {/* <Route path={routes.CAST} component={Cast} /> */}
          <Route path={routes.MOVIES_PAGE} component={MoviesPage} />
          <Redirect to={routes.HOME_PAGE} />
          {/* ambiduous matching */}
          {/* <Route path={routes.SHOW_DETAILS} component={ShowDeatails} />
          <Route path={routes.MOVIES} component={MoviesPage} />
          */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
