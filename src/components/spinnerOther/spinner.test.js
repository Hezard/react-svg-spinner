import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SpinnerOther } from './spinner';

afterEach(cleanup);

test('SpinnerOther with javascript', () => {
  const props = {
    color: 'primary',
    className: 'spinner-test',
    size: 'lg'
  };
  const { container, rerender, getByTestId } = render(<SpinnerOther {...props}></SpinnerOther>);

  expect(container.firstChild).toMatchSnapshot();

  rerender(<SpinnerOther {...props} disabled={true}></SpinnerOther>);

  expect(container.firstChild).toHaveClass('spinner--disabled');

  rerender(<SpinnerOther {...props} circumference="120" stroke="6"></SpinnerOther>);

  expect(getByTestId('spinner-svg')).toHaveAttribute('width', '120');
  expect(getByTestId('spinner-svg')).toHaveAttribute('height', '120');
  expect(getByTestId('spinner-circle-back')).toHaveAttribute('r', '57');
  expect(getByTestId('spinner-circle-front')).toHaveAttribute('r', '57');
});
