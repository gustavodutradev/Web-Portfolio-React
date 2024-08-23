import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const SButton = styled.button`
outline: none;
border: none;
background: #f09819;
background: -webkit-linear-gradient(0deg, #f09819 0%, #edde5d 100%);
background: linear-gradient(0deg, #f09819 0%, #edde5d 100%);
color: #ffffff;
text-shadow: 2px 1px 2px #121212ad;
padding: 5px;
height: auto;
width: 110px;
border-radius: 25px;
font-size: 0.9rem;
font-weight: bold;
transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
&:hover {
  scale: 1.05;
}
&:active {
  scale: 0.95;
}

@media (max-width: 480px) {
  width: 100px;
  font-size: 0.8rem;
  padding: 0.4rem;
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
