import styled from 'styled-components';
import tw from 'twin.macro';

const SSkills = styled.section`
  ${tw`
  flex
  flex-wrap
  justify-between
  items-center
  `}
  img {
    max-width: 100px;
    height: auto;
    filter: drop-shadow(3px 3px 3px #1f1f1f);
    padding: 1rem;
  }

  @media (max-width: 480px) {
    img {
      max-width: 80px;
      filter: drop-shadow(3px 3px 3px #1f1f1f);
    }
  }
`;

export default SSkills;
