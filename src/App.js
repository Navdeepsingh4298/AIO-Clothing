import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Stylesheet
import './App.css';

// Components
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';

// Pages
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


// functional component
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
