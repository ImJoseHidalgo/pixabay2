import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {

  const lastPath = localStorage.getItem('savePath') || '/';

  return (
    <Route {...rest} component={props => {
        return (!isAuthenticated)
          ? <Component {...props} />
          : <Redirect to={lastPath} />
      }}
    />
  )
}

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}

export default PrivateRoute;