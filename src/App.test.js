import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders start content', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Are you alcoholic\?/i);
  expect(headerElement).toBeInTheDocument();

  const paragraphElement = getByText(/take a test/i);
  expect(paragraphElement).toBeInTheDocument();
});
