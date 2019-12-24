import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withPercentage } from '../withPercentage';

import './spinner.scss';

export const SpinnerOther = ({
  circumference,
  children,
  className,
  color,
  disabled,
  mode,
  stroke,
  value
}) => {
  const spinnerClass = classnames('spinner', className, 'spinner--other', `spinner--${color}`, {
    'spinner--disabled': disabled
  });
  const spinnerSvgClass = classnames('spinner__svg', `spinner__svg--animation-${mode}`);

  const radius = circumference / 2 - stroke / 2;
  const path = 2 * Math.PI * radius;
  const linecapGap = 1; // linecap fix for Edge and Firefox
  const style = {
    '--spinner-dash-offset': ((path + linecapGap / 2) * (100 - value)) / 100,
    '--spinner-dash-array': `${path} ${path + linecapGap}`
  };

  return (
    <div className={spinnerClass}>
      <svg
        width={circumference}
        height={circumference}
        className={spinnerSvgClass}
        shapeRendering="geometricPrecision"
        data-testid="spinner-svg"
      >
        <circle
          className="spinner__circle spinner__circle--back"
          r={radius}
          cx="50%"
          cy="50%"
          strokeWidth={stroke}
          data-testid="spinner-circle-back"
        ></circle>
        <circle
          className="spinner__circle spinner__circle--front"
          style={style}
          r={radius}
          cx="50%"
          cy="50%"
          strokeWidth={stroke}
          data-testid="spinner-circle-front"
        ></circle>
      </svg>
      {children}
    </div>
  );
};

SpinnerOther.defaultProps = {
  color: 'primary',
  disabled: false,
  mode: 'rotate',
  circumference: 170,
  stroke: 10
};

SpinnerOther.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
  circumference: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  disabled: PropTypes.bool,
  mode: PropTypes.oneOf(['rotate']),
  stroke: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  value: PropTypes.number
};

export default withPercentage(SpinnerOther);
