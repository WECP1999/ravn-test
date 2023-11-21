import '@testing-library/jest-dom';
import './setup';
import { renderWithRouter } from './utils/router';
import { fireEvent, screen } from '@testing-library/react';
import { routes } from '../routes/router';

test('should first', () => {
  expect(true).toBe(true);
});

test('Render Dashboard route', () => {
  renderWithRouter(routes);
  fireEvent.click(screen.getByText('Dashboard'));

  expect(screen.getByText('Hola desde el dashboard')).toHaveTextContent(
    'Hola desde el dashboard'
  );
});

test('Render MyTasks route', () => {
  renderWithRouter(routes);
  fireEvent.click(screen.getByText('My tasks'));

  expect(screen.getByText('Hola desde MyTasks')).toHaveTextContent(
    'Hola desde MyTasks'
  );
});
