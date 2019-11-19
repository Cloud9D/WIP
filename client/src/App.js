import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom'
import Home from './views/Home/Home'
import NotFound from './views/NotFound'
import Profile from './views/Profile/Profile'
import Restaurants from './views/Restaurants/Restaurants'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/Restaurants" component={Restaurants} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
