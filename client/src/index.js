import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.js';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.scss'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/js/bootstrap.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
