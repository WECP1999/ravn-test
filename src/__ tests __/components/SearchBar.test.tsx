import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from '../../layouts/components/searchBar';

describe('SearchBar', () => {
  test('Render SearchBar', () => {
    render(<SearchBar placeholder="Search" />);

    const searchInput = screen.getByLabelText('search') as HTMLInputElement;

    fireEvent.change(searchInput, {
      target: { value: 'TEST' },
    });

    expect(searchInput.value).toBe('TEST');
  });
  test('Clear search input', () => {
    const { container } = render(<SearchBar placeholder="Search" />);

    const searchInput = screen.getByLabelText('search') as HTMLInputElement;

    fireEvent.change(searchInput, {
      target: { value: 'TEST' },
    });

    const clearButton = container.querySelector('.clear');
    expect(clearButton).toBeInTheDocument();

    if (clearButton) {
      fireEvent.click(clearButton);
    }

    expect(clearButton).not.toBeInTheDocument();
    expect(searchInput.value).toBe('');
  });
});
