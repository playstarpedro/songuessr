import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header', () => {
  it('should be rendered', () => {
    const { baseElement } = render(<Header />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a title', () => {
    render(<Header />);
    expect(screen.getByText('Songuessr')).toBeInTheDocument();
  });
});
