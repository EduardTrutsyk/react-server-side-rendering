import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({ loading }) => (
  loading && <span>Loading...</span>
);

Loader.propTypes = {
  loading: PropTypes.bool,
};
Loader.defaultProps = {
  loading: true,
};

export default Loader;

