import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
// import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './auth';

import { AppRouter } from './router/AppRouter';
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>,
)
