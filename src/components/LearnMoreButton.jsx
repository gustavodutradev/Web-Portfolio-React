import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const SButton = styled.button`
outline: none;
border: none;
background-color: #ff8c00;
color: white;
padding: 1rem auto;
height: 30px;
width: 90px;
border-radius: 20px;
font-size: 12px;
font-weight: bold;
transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
&:hover {
  scale: 1.05;
  color: black;
}
&:active {
  scale: 0.95;
}
`;
function Button(props) {
  const { onClick, name } = props;
  return (
    <SButton
      type="button"
      onClick={ onClick }
      name={ name }
    >
      { name }
    </SButton>
  );
}

Button.propTypes = {
  onClick: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
};

export default Button;
