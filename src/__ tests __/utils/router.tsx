import React from 'react';
import { render } from '@testing-library/react';
import {
  RouterProvider,
  createMemoryRouter,
  RouteObject,
} from 'react-router-dom';
import DashboardLayout from '../../layouts/dashboard.layout';

export function renderWithRouter(
  routes: RouteObject[] = []
) {
  const router = createMemoryRouter([...routes], {
    initialEntries: ['/'],
    initialIndex: 1,
  });

  return render(<RouterProvider router={router} />);
}
