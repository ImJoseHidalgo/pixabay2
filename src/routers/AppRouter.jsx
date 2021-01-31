import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from '../components/pages/Login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
  const { logged } = useSelector(state => state.auth);

  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute 
            exact path='/login' 
            component={LoginScreen} 
            isAuthenticated={logged} 
          />
          <Route 
            path='/' 
            component={DashboardRoutes} 
          />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
