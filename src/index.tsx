import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorBoundary from '@/components/ErrorBoundary';
import RouterErrorBoundary from '@/components/RouterErrorBoundary';

import { Toaster } from 'sonner';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <RouterErrorBoundary />
  },

]);

root.render(
  <React.StrictMode>
    <Toaster position='top-center' />
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);