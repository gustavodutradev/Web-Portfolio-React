import styled from 'styled-components';
import tw from 'twin.macro';

const SLink = styled.a`
    ${tw`
    text-white
    text-sm
    font-bold
    `}
    display: flex;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    border: 1px solid orange;
    border-radius: 20px;
    padding: 0.4rem 0.7rem;
    margin: 0.2rem 0.5rem;
    width: fit-content;
    align-items: center;
    background-color: #121212;
    transition: all 0.1s ease-in-out;
    color: #fff;
    &:hover {
        color: orange;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        transform: scale(1.05);
    }
    &:active {
    scale: 0.95;
    }
`;

export default SLink;
