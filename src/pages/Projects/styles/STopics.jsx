import styled from 'styled-components';

const Topics = styled.span`
    color: orange;
    display: flex;
    font-size: 0.9rem;
    font-style: italic;
    font-weight: bold;
    border: 1px solid #006494;
    border-radius: 20px;
    padding: 0.2rem 0.5rem;
    margin: 0.2rem 0.5rem;
    align-items: center;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: #006494;
        color: orange;
        animation: pulse 2s infinite;
        transform: scale(1);
    }

  @keyframes pulse {
0% {
transform: scale(0.95);
box-shadow: 0 0 0 0 #006494;
}

70% {
transform: scale(1);
box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
}

100% {
transform: scale(0.95);
box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
}
}

    @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export default Topics;
