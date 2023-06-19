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
  background: #1488cc;
  background: -webkit-radial-gradient(circle, #1488cc 0%, #2b32b2 100%);
  background: radial-gradient(circle, #1488cc 0%, #2b32b2 100%);

`;

export default SHomeContainer;
