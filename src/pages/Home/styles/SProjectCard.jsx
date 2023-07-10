import styled from 'styled-components';
import tw from 'twin.macro';

const SProjectCard = styled.div`
@media (max-width: 480px) {
${tw`
flex
flex-col
justify-center
rounded-3xl
items-center
p-5
m-5
from-amber-400
to-amber-600
`}

max-width: 20rem;
max-height: auto;
box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
scroll-snap-align: center;
scroll-snap-stop: always;


h3 {
    color: #fff;
    font-size: 1.5rem;
    margin: 1rem;
    text-shadow: 2px 2px 2px #1f1f1f;
    text-align: center;
}

img {
    max-width: 100%;
    max-height: auto;
    object-fit: cover;
    border-radius: 10px;
}

p {
    width: 100%;
    color: #fff;
    font-size: 1rem;
    margin: 1rem;
    text-shadow: 2px 2px 2px #1f1f1f;
    text-align: center;
}

}

`;

export default SProjectCard;
