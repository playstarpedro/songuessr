import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Tag from './Tag';

describe('Header', () => {
  it('should be rendered', () => {
    const { baseElement } = render(<Tag text='test text' />);
    expect(baseElement).toBeTruthy();
  });

  it('should render the text', () => {
    render(<Tag text='test text' />);
    expect(screen.getByText('test text')).toBeTruthy();
  })
});
