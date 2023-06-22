import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import {AppRouter as router} from './routing/AppRouter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
