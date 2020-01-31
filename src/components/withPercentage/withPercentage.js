import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './percentage.scss';

const withPercentage = WrappedComponent => {
  const withPercentageHOC = ({ disabled, size, value, ...other }) => {
    value = Math.max(0, Math.min(100, Math.floor(value)));
    const percentageClass = classnames('percentage', `percentage--${size}`, {
      'percentage--disabled': disabled
    });

    return (
      <div className={percentageClass}>
        <WrappedComponent {...{ disabled, size, value, ...other }}></WrappedComponent>
        <div className="percentage__text" data-testid="percentage-text">
          {value}
          <sup className="percentage__sup">%</sup>
        </div>
      </div>
    );
  };

  withPercentageHOC.displayName = 'withPercentageHOC';

  withPercentageHOC.defaultProps = {
    disabled: false,
    size: 'md',
    value: 0
  };

  withPercentageHOC.propTypes = {
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    value: PropTypes.number
  };

  return withPercentageHOC;
};

export default withPercentage;
