import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withPercentage } from '../withPercentage';

import './spinner.scss';

export const SpinnerCSS = ({ children, className, color, disabled, mode, size, value }) => {
  const spinnerClass = classnames('spinner', className, `spinner--${size}`, `spinner--${color}`, {
    'spinner--disabled': disabled
  });
  const spinnerSvgClass = classnames('spinner__svg', `spinner__svg--animation-${mode}`);

  const style = {
    '--spinner-dash-offset': value
  };

  return (
    <div className={spinnerClass}>
      <svg className={spinnerSvgClass} shapeRendering="geometricPrecision">
        <circle
          className="spinner__circle spinner__circle--back"
          r="50%"
          cx="50%"
          cy="50%"
        ></circle>
        <circle
          className="spinner__circle spinner__circle--front"
          style={style}
          r="50%"
          cx="50%"
          cy="50%"
        ></circle>
      </svg>
      {children}
    </div>
  );
};

SpinnerCSS.defaultProps = {
  color: 'primary',
  disabled: false,
  mode: 'rotate',
  size: 'md',
  value: 0
};

SpinnerCSS.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
  mode: PropTypes.oneOf(['rotate']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  value: PropTypes.number
};

export default withPercentage(SpinnerCSS);
