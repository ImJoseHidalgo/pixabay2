import React from 'react';
import { Link, Route, Switch } from 'wouter';
import ImageDetail from './components/pages/ImageDetail';
import { DataGrid } from './components/pages/DataGrid';
import Home from './components/pages/Home';
import Page404 from './components/pages/Page404';

export const App = () => {

  return (
    <div className='App'>
      <h1>Header Message</h1>
      <Link to='/'>Home</Link>
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/search/:keyword/:page' component={DataGrid} />
        <Route path='/img/:id' component={ImageDetail} />
        <Route component={Page404} />
      </Switch>
    </div>
  )
}

export default App;