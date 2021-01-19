import React from 'react';
import { Route, Switch } from 'wouter';
import ImageDetail from './components/pages/ImageDetail';
import { PageSearch } from './components/pages/PageSearch';
import Home from './components/pages/Home';
import Page404 from './components/pages/Page404';
import Footer from './components/Footer';

export const App = () => {

  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/search/:keyword/:page' component={PageSearch} />
        <Route path='/img/:id' component={ImageDetail} />
        <Route component={Page404} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App;