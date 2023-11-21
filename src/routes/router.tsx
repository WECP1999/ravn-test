import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../layouts/dashboard.layout';
import Dashboard from '../views/dashboard/';
import MyTasks from '../views/my-tasks/';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
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
]);

export default routes;
