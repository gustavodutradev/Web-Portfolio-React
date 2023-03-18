import styled from 'styled-components';
import tw from 'twin.macro';

const SAbout = styled.section`
  ${tw`
  flex
  flex-col
  justify-center
  items-center
  m-5
  `}
  color: #111;
  font-weight: bold;
  text-align: justify;
  font-size: 1.2rem;
  padding: 20px;
  max-width: 700px;
  border-radius: 20px;
  background: rgba(255,255,255,0.5);
  backdrop-filter: blur(1px);

  p {
    line-height: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    max-width: 400px;
  }
`;

export default SAbout;
