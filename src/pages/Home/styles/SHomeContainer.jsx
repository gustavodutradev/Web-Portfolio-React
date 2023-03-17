import styled from 'styled-components';
import tw from 'twin.macro';
import testeBG from '../../../data/images/bgteste.jpg';

const SHomeContainer = styled.section`
  ${tw`
  flex
  flex-col
  gap-6
  justify-center
  items-center
  `}

  background-image: url(${testeBG});
  background-size: cover;
  background-position: center;
`;

export default SHomeContainer;
