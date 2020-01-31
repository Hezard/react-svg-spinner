import React from 'react';
import {
  render,
  fireEvent,
  waitForDomChange,
  waitForElement,
  cleanup,
  waitForElementToBeRemoved,
  wait
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './app';

describe('App integration test', () => {
  let getByText, queryByText, getAllByTestId;
  let spinnerText, spinnerOtherText, btnReset, btnStart;

  beforeEach(() => {
    ({ getByText, queryByText, getAllByTestId } = render(<App delay={40} />));
    [spinnerText, spinnerOtherText] = getAllByTestId('percentage-text');
    btnReset = getByText(/Reset/i);
    btnStart = getByText(/Start/i);
  });

  afterEach(() => {
    jest.clearAllTimers();
    cleanup();
  });

  test('test initial render', () => {
    expect(btnStart).toBeInTheDocument();
    expect(btnStart).toBeEnabled();

    expect(btnReset).toBeInTheDocument();
    expect(btnReset).toBeDisabled();

    expect(spinnerText).toHaveTextContent('0%');
    expect(spinnerOtherText).toHaveTextContent('0%');
  });

  test('user clicks start', async () => {
    fireEvent.click(btnStart);

    await waitForElement(() => queryByText(/Stop/i));

    expect(queryByText(/Start/i)).not.toBeInTheDocument();
    expect(getByText(/Stop/i)).toBeInTheDocument();
    expect(spinnerText).toHaveTextContent('1%');
    expect(spinnerOtherText).toHaveTextContent('1%');
  });

  test('user clicks stop', async () => {
    fireEvent.click(btnStart);

    await waitForDomChange({ container: spinnerText });

    fireEvent.click(getByText(/Stop/i));

    await waitForElement(() => queryByText(/Start/i));

    expect(spinnerText).toHaveTextContent('2%');
    expect(spinnerOtherText).toHaveTextContent('2%');
  });

  test('user should see finished spinner', async () => {
    fireEvent.click(btnStart);

    await waitForElementToBeRemoved(() => queryByText(/Stop/i));

    expect(getByText(/Start/i)).toBeInTheDocument();

    expect(spinnerText).toHaveTextContent('100%');
    expect(spinnerOtherText).toHaveTextContent('100%');
  });

  test('user could reset state', async () => {
    fireEvent.click(btnStart);

    expect(spinnerText).toHaveTextContent('1%');
    expect(spinnerOtherText).toHaveTextContent('1%');

    await wait(() => {
      fireEvent.click(btnReset);

      expect(spinnerText).toHaveTextContent('0%');
      expect(spinnerOtherText).toHaveTextContent('0%');
    });
  });
});
