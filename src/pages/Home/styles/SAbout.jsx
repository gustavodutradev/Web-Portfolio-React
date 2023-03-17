import styled from 'styled-components';
import tw from 'twin.macro';

const SAbout = styled.section`
  ${tw`
  flex
  flex-col
  justify-center
  items-center
  `}
  color: #fff;
  font-weight: bold;
  text-align: justify;
  font-size: 1.2rem;
  font-style: italic;
  padding: 20px;
  max-width: 700px;
`;

export default SAbout;
