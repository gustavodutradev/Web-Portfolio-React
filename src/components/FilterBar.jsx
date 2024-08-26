import propTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const SFilterBar = styled.div`
  ${tw`
    flex
    justify-center
    items-center
    fixed
    z-10
    top-0
    right-0
    left-0
    mt-20
  `}

  background-color: rgba(0, 0, 0, 0.05);
  padding: 10px;
  height: 3rem;
  width: content-fit;
  opacity: 0.75;

  select {
    ${tw`
      text-white
      bg-blue-500
      rounded
      p-2
    `}
    border: 2px solid black;
    font-size: 1rem;
    font-weight: bold;
    text-shadow: 2px 1px 2px #121212ad;
  }
`;

function FilterBar({ topics, onFilterChange }) {
  const [selectedTopic, setSelectedTopic] = useState('');

  const handleSelectChange = (event) => {
    const topic = event.target.value;
    setSelectedTopic(topic);
    onFilterChange(topic);
  };

  return (
    <SFilterBar>
      <select value={ selectedTopic } onChange={ handleSelectChange }>
        <option value="">Todas as Palavras-Chave</option>
        {topics.map((topic) => (
          <option key={ topic } value={ topic }>
            { topic }
          </option>
        ))}
      </select>
    </SFilterBar>
  );
}

FilterBar.propTypes = {
  topics: propTypes.arrayOf(propTypes.string).isRequired,
  onFilterChange: propTypes.func.isRequired,
};

export default FilterBar;
