import React, { useEffect } from 'react';
import { firebase } from "../firebase/firebaseConfig";
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from '../components/pages/Login/LoginScreen';
import RegisterScreen from '../components/pages/Register/RegisterScreen';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';
import { login } from '../actions/auth';
import { startLoadingImgs } from '../actions/imgs';

const AppRouter = () => {

  const dispatch = useDispatch();

  const { logged } = useSelector(state => state.auth);

  useEffect(() => {
    firebase.auth().onAuthStateChanged( async(user) => {
      if(user?.uid) {
        dispatch(login(user.uid, user.displayName, user.photoURL));
        
        dispatch(startLoadingImgs(user.uid));
      }
    })
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute 
            exact path='/login' 
            component={LoginScreen} 
            isAuthenticated={logged} 
          />
          <PrivateRoute 
            exact path='/register' 
            component={RegisterScreen} 
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
