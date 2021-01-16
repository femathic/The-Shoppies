import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({percentage}) =>(
  <div className="rounded shadow w-full mx-auto bg-gray-400 h-5 mx-2">
    <div
      className="rounded bg-themeGreen h-5"
      style={{width: `${percentage}%`}}
    />
  </div>
);

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default ProgressBar;