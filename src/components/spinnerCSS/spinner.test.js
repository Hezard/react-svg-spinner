import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SpinnerCSS } from './spinner';

afterEach(cleanup);

test('SpinnerCSS with css', () => {
  const props = {
    color: 'secondary',
    className: 'spinner-test',
    size: 'lg'
  };
  const { container, rerender } = render(<SpinnerCSS {...props}></SpinnerCSS>);

  expect(container.firstChild).toMatchSnapshot();

  rerender(<SpinnerCSS {...props} disabled={true}></SpinnerCSS>);

  expect(container.firstChild).toHaveClass('spinner--disabled');
});
