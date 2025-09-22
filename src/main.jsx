import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Router from './Router/Router';
import { RouterProvider } from 'react-router';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './Layouts/AuthLayouts/AuthProvider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={Router} />
     <ToastContainer position="top-right" autoClose={3000} />
    </AuthProvider>
  </StrictMode>,
)
