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
    }
    `;

export default Topics;
