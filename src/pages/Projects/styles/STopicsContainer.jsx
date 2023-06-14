import styled from 'styled-components';
import tw from 'twin.macro';

const STopicsContainer = styled.section`
    ${tw`
    flex
    flex-wrap
    justify-start
    `}

@media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export default STopicsContainer;
