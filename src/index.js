import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { EntryProvider } from './contexts/EntryContext';

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <EntryProvider>
      <App />
      </EntryProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
