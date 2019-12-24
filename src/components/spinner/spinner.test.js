import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Spinner } from './spinner';

afterEach(cleanup);

test('Spinner with css', () => {
  const props = {
    color: 'secondary',
    className: 'spinner-test',
    size: 'lg'
  };
  const { container, rerender } = render(<Spinner {...props}></Spinner>);

  expect(container.firstChild).toMatchSnapshot();

  rerender(<Spinner {...props} disabled={true}></Spinner>);

  expect(container.firstChild).toHaveClass('spinner--disabled');
});
