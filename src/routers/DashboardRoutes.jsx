import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DetailScreen from '../components/pages/Detail/DetailScreen'
import Favorites from '../components/pages/Favorites/Favorites'
import HomeScreen from '../components/pages/Home/HomeScreen'
import Page404 from '../components/pages/page404/Page404'
import { ResultsScreen } from '../components/pages/Results/ResultsScreen'
import Footer from '../components/ui/Footer/Footer'

const DashboardRoutes = () => {
  return (
    <>
      <div>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/search/:keyword/:page' component={ResultsScreen} />
          <Route exact path='/img/:id' component={DetailScreen} />
          <Route exact path='/favorites' component={Favorites} />
          <Route exact path='/404' component={Page404} />
          <Route component={Page404} />
          {/* <Redirect to='/' /> */}
        </Switch>
      </div>
      <Footer />
    </>
  )
}

export default DashboardRoutes
