import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.css';
import AppRoutes from './root';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
;
