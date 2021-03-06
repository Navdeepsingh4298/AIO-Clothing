import React from 'react';
import ReactDOM from 'react-dom';

// routing
import { BrowserRouter } from 'react-router-dom';

// for local storage
import { PersistGate } from 'redux-persist/integration/react';

// REDUX
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

// Stylesheet
import './index.css';

// App component
import App from './App';
//import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();






// IK NEEYAT SAAF RAKHI AA
// DUJI MAALAK TE AAS RAKHI AA
// PAHUCHAN NU TIME TAN LAGU KYUNKI
// ASI MANZIL V KHAAS RAKHI AA