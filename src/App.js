import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Stylesheet
import './App.css';

// HomePage component
import HomePage from './pages/homepage/homepage.component';

//Pages
import HatsPage from './pages/hatspage/hatspage.component';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
