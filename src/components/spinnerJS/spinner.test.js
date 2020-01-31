import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SpinnerJS } from './spinner';

afterEach(cleanup);

test('SpinnerJS with javascript', () => {
  const props = {
    color: 'primary',
    className: 'spinner-test',
    size: 'lg'
  };
  const { container, rerender, getByTestId } = render(<SpinnerJS {...props}></SpinnerJS>);

  expect(container.firstChild).toMatchSnapshot();

  rerender(<SpinnerJS {...props} disabled={true}></SpinnerJS>);

  expect(container.firstChild).toHaveClass('spinner--disabled');

  rerender(<SpinnerJS {...props} circumference="120" stroke="6"></SpinnerJS>);

  expect(getByTestId('spinner-svg')).toHaveAttribute('width', '120');
  expect(getByTestId('spinner-svg')).toHaveAttribute('height', '120');
  expect(getByTestId('spinner-circle-back')).toHaveAttribute('r', '57');
  expect(getByTestId('spinner-circle-front')).toHaveAttribute('r', '57');
});
