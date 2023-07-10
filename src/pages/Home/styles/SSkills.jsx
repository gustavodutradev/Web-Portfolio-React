import styled from 'styled-components';
import tw from 'twin.macro';

const SSkills = styled.section`
  ${tw`
  flex
  flex-wrap
  justify-center
  items-center
  `}
  max-width: 90vw;
  height: auto;
  img {
    max-width: 100px;
    height: auto;
    filter: drop-shadow(3px 3px 3px #1f1f1f);
    padding: 1rem;
    border-radius: 15px;

    &:hover {
        color: orange;
        animation: pulse 2s infinite;
    }
  }

@keyframes pulse {
0% {
transform: scale(0.95);
box-shadow: 0 0 0 0 #006494;
}

70% {
transform: scale(1.05);
box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
}

100% {
transform: scale(0.95);
box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
}
}

  @media (max-width: 480px) {
    img {
      max-width: 70px;
    }
  }
`;

export default SSkills;
