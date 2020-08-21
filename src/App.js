import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import Home from './components/Pages/Home'
const App = () => {
  return (
    <>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </>
  )

};

export default App;
