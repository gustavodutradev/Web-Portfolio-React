import styled from 'styled-components';
import projectsBG from '../../../data/skillsImages/projectsBG.jpg';

const SProjectsContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 2.5rem;
    background-image: url(${projectsBG});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
`;

export default SProjectsContainer;
