import styled from 'styled-components';

const SProjectsContainer = styled.section`
  display: flex;
  max-width: 90vw;
  height: auto;
  overflow-x: hidden;
  scroll-snap-type: x proximity;

  @media (max-width: 480px) {
    overflow-x: scroll;
  }
`;

export default SProjectsContainer;
