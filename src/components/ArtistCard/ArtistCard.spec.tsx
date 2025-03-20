import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import ArtistCard from './ArtistCard';

describe('Header', () => {
  const MOCK_ARTIST = {
    id: '1',
    name: 'Kanye West',
    imageUrl: undefined,
    genres: ['Hip Hop', 'Rap'],
  };

  it('should be rendered', () => {
    const { baseElement } = render(<ArtistCard artist={MOCK_ARTIST} />);
    expect(baseElement).toBeTruthy();
  });

  it('should have the right title', () => {
    render(<ArtistCard artist={MOCK_ARTIST} />);
    expect(screen.getByText(MOCK_ARTIST.name)).toBeTruthy();
  });

  it('should have the right genres', () => {
    render(<ArtistCard artist={MOCK_ARTIST} />);
    MOCK_ARTIST.genres.forEach((genre) => {
      expect(screen.getByText(genre)).toBeTruthy();
    });
  });

  it('should have the right image', () => {
    const { baseElement } = render(<ArtistCard artist={MOCK_ARTIST} />);
    expect(baseElement.querySelector(`img[alt="${MOCK_ARTIST.name} image"]`)).toBeTruthy();
  });
});
