import styled from 'styled-components';
import tw from 'twin.macro';

const SHomeContainer = styled.section`
  ${tw`
  flex
  flex-col
  gap-10
  justify-center
  items-center
  `}
  max-width: 100vmax;
  background: #161616;
  background: -webkit-linear-gradient(0deg, #161616 0%, #1488cc 100%);
  background: linear-gradient(0deg, #161616 0%, #1488cc 100%);
`;

export default SHomeContainer;
