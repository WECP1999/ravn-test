import { createBrowserRouter, RouteObject } from 'react-router-dom';
import DashboardLayout from '../layouts/dashboard.layout';
import Dashboard from '../views/dashboard/';
import MyTasks from '../views/my-tasks/';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <DashboardLayout />,
    index: false,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
        index: true,
      },
      {
        path: '/my-tasks',
        element: <MyTasks />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
