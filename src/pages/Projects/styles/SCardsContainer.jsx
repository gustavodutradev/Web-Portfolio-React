import styled from 'styled-components';
import tw from 'twin.macro';

const SCard = styled.section`
    ${tw`
    flex
    flex-col
    gap-4
    p-2.5
    `} 
    border-radius: 10px;
    background-color: #121212aa;
    color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transition: all 0.2s ease-in-out;
    &:hover {
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.9);
    }

    h1 {
        font-size: 2rem;
        font-weight: bold;
        color:#006494;
    }
`;

export default SCard;
