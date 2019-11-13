import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import T from 'prop-types';
import routes from '../../routes';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink
          exact
          to={routes.HOME_PAGE}
          style={{ color: 'balck' }}
          activeStyle={{ color: 'palevioletred' }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.MOVIES_PAGE}
          style={{ color: 'black' }}
          activeStyle={{ color: 'palevioletred' }}
        >
          MOVIES
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
