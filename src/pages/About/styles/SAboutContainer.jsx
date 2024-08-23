import styled from 'styled-components';
import tw from 'twin.macro';

const SAboutContainer = styled.section`
${tw`
    flex
    flex-col
    items-start
`}
align-items: center;
height: 100vh;
max-width: 100vmax;
background: #161616;
background: -webkit-linear-gradient(0deg, #161616 0%, #1488cc 100%);
background: linear-gradient(0deg, #161616 0%, #1488cc 100%);
padding: 6rem 2rem 2rem 2rem;

img {
    max-width: 300px;
    height: auto;
}

p {
    margin: 1rem;
    padding: 1rem;
    font-size: 1.5rem;
    color: #fff;
    text-shadow: 2px 2px 2px #1f1f1f;
    align-self: start;
}

@media (max-width: 480px) {
    height: auto;

    p {
        font-size: 1.2rem;
    }
}

`;

export default SAboutContainer;
