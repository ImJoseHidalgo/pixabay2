import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
// import { Route, Switch } from 'react-router-dom';
// import { ResultsScreen } from './components/pages/Results/ResultsScreen';
// import Page404 from './components/pages/page404/Page404';
// import Footer from './components/ui/Footer';
// import LoginScreen from './components/pages/Login/LoginScreen';
// import HomeScreen from './components/pages/Home/HomeScreen';
// import DetailScreen from './components/pages/Detail/DetailScreen';
import AppRouter from './routers/AppRouter';

export const App = () => {

  return (
    <Provider store={ store }>
      <AppRouter />
      {/* <Switch>
        <Route exact path='/' component={HomeScreen} />
        <Route exact path='/search/:keyword/:page' component={ResultsScreen} />
        <Route exact path='/img/:id' component={DetailScreen} />
        <Route exact path='/auth/login' component={LoginScreen} />
        <Route exact path='/404' component={Page404} />
        <Route component={Page404} />
      </Switch>
      <Footer /> */}
    </Provider>
  )
}

export default App;