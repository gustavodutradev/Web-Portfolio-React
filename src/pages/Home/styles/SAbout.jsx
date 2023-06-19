import styled from 'styled-components';
import tw from 'twin.macro';

const SAbout = styled.section`
  ${tw`
  flex
  flex-col
  justify-center
  items-center
  m-5
  gap-5
  `}
  color: #fff;
  text-align: justify;
  font-size: 1.2rem;
  padding: 20px;
  max-width: 800px;
  border-radius: 20px;
  backdrop-filter: blur(1px);

  h1 {
    font-weight: 700;
    font-size: 7rem;
    text-shadow: 3px 3px 3px #121212aa;
    text-align: justify;
  }

  p {
    line-height: 2.2rem;
    text-align: center;
    font-size: 1.3rem;
    text-shadow: 1px 1px 1px #121212aa;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    max-width: 400px;
  }
`;

export default SAbout;
