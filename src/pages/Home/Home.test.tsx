import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';

describe('<Home />', () => {
  test('it should mount', () => {
    render(<Home />);

    const HomeTest = screen.getByTestId('Home');

    expect(HomeTest).toBeInTheDocument();
  });
});