import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import ImageDetail from './components/pages/ImageDetail';
import { PageSearch } from './components/pages/PageSearch';
import Home from './components/pages/Home';
import Page404 from './components/pages/Page404';
import Footer from './components/Footer';
import { store } from './store/store';
import LoginScreen from './components/pages/auth/LoginScreen';

export const App = () => {

  return (
    <Provider store={ store }>
      <div className='App'>
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/search/:keyword/:page' component={PageSearch} />
          <Route path='/img/:id' component={ImageDetail} />
          <Route path='/auth/login' component={LoginScreen} />
          <Route component={Page404} />
        </Switch>
        <Footer />
      </div>
    </Provider>
  )
}

export default App;