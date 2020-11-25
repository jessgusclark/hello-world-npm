import React from 'react';
import PropTypes from 'prop-types';

const Bye = ({ name }) => (
  <p>
    Goodbye
    {` ${name}`}
    !
  </p>
);

Bye.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Bye;
