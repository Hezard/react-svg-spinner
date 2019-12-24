# Spinner test assessment
This project contains two variants of spinner SCSS/CSS and JS
Powered with ReactJS, SASS, Parcel, Jest, React testing library.
Browser support - latest browsers which support stroke-dashoffset, stroke-dasharray and css variables.

- SCSS/CSS Component Spinner supported configuration:
  - className: `string`
  - color: `primary | secondary`
  - disabled: `boolean`
  - mode: `rotate`
  - size: `xs | sm | md | lg`
  - value: `number`
    
  **Default values:**
  - color: `primary`
  - disabled: `false`
  - mode: `rotate`
  - size: `md`
  - value: `0`

- JS Component Spinner:
  - className: `string`
  - color: `primary | secondary`
  - circumference: `number | string`
  - disabled: `boolean`
  - mode: `rotate`
  - stroke: `number | string`
  - value: `number`

  **Default values:**
  - color: `primary`
  - disabled: `false`
  - mode: `rotate`
  - circumference: `170`
  - stroke: `10`

## Project setup

Run `npm i` or `yarn` to install all dependencies.

To start development server run `npm start`

## Build

Run `npm run build`

## Unit testing

Run `npm test` to execute unit test.
To see test coverage run `npm test:coverage` 


