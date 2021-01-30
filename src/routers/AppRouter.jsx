import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from '../components/pages/Login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/login' component={LoginScreen} />
          <Route path='/' component={DashboardRoutes} />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter
