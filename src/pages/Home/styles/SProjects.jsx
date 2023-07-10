import styled from 'styled-components';

const SProjectsContainer = styled.section`
@media (max-width: 480px) {
  display: flex;
  max-width: 90vw;
  height: auto;
  overflow-x: scroll;
  scroll-snap-type: x proximity;
}
`;

export default SProjectsContainer;
