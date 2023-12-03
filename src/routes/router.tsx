import { createBrowserRouter, RouteObject } from 'react-router-dom';
import DashboardLayout from '../layouts/dashboard.layout';
import Dashboard from '../views/dashboard/';
import NotFoundPage from '../views/404/';
import MyTasks from '../views/my-tasks/';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        element: <Dashboard />,
        index: true,
      },
      {
        path: '/my-tasks',
        element: <MyTasks />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

const router = createBrowserRouter(routes);

export default router;
