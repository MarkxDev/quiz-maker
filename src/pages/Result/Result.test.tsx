import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Result from './Result';

describe('<Result />', () => {
  test('it should mount', () => {
    render(<Result />);

    const result = screen.getByTestId('Result');

    expect(result).toBeInTheDocument();
  });
});