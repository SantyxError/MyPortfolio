import { renderProvider } from '@/__tests__/renderProvider/renderProvider';
import { Button } from '../Button'; 
import '@testing-library/jest-dom';
import React from 'react';

test('Button renders correctly', () => {
  const { getByText } = renderProvider(<Button variant="primary">Click me</Button>);
  expect(getByText('Click me')).toBeInTheDocument();
});
