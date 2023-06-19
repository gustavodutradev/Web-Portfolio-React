import styled from 'styled-components';
import tw from 'twin.macro';

const SSkills = styled.section`
  ${tw`
  flex
  flex-wrap
  justify-center
  items-center
  `}
  img {
    max-width: 100px;
    height: auto;
    filter: drop-shadow(3px 3px 3px #1f1f1f);
    padding: 1rem;
  }
  img:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
  }

  @media (max-width: 480px) {
    img {
      max-width: 70px;
    }
  }
`;

export default SSkills;
