import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ImageView from './components/ImageView';
import Page404 from './components/Page404';
import MainSearch from './components/MainSearch';
import MainHome from './components/MainHome';

export const App = () => {

  return (
    <Router>
      <h1>Header Message</h1>
      <Link to='/'>Home</Link>
      <Switch>
        <Route path='/img/:id'>
          <ImageView />
        </Route>
        <Route path='/search/:keyword/:page'>
          <MainSearch />
        </Route>
        <Route exact path='/'>
          {/* <MainHome /> */}
          <MainSearch />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>      
    </Router>
  )
}

export default App;