import React from 'react';
import propTypes from 'prop-types';

function Button(props) {
  const { onClick, name } = props;
  return (
    <button
      type="button"
      onClick={ onClick }
      name={ name }
    >
      { name }
    </button>
  );
}

Button.propTypes = {
  onClick: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
};

export default Button;
