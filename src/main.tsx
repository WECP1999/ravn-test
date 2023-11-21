import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/router.tsx';
import './index.css';
import 'tailwindcss/base.css';
import GlobalStyles from './styles/GlobalStyles.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={routes} />
  </React.StrictMode>
);
