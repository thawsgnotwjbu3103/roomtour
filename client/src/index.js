import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
    <Route exact path="/">
      <App />
    </Route>
    <Route exact path='/manager' component={() => {window.location.replace("http://192.168.80.6:3001/manager"); return null;}}/>
  </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
