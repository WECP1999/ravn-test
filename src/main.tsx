import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router.tsx';
import GlobalStyles from './styles/GlobalStyles.tsx';
import { ApolloProvider } from '@apollo/client';
import graphClient from './utils/graphql/setup.ts';
import { TaskProvider } from './context/tasksContext/TaskContext.tsx';
import { CreateModalProvider } from './context/createModalContext/CreateModalContext.tsx';
import './index.css';
import 'tailwindcss/base.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <ApolloProvider client={graphClient}>
      <TaskProvider>
        <CreateModalProvider>
          <RouterProvider router={router} />
        </CreateModalProvider>
      </TaskProvider>
    </ApolloProvider>
  </React.StrictMode>
);
