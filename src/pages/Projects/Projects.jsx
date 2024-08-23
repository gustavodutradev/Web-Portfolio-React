/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';

// components
import Loading from '../../components/Loading';

// api
import getMyReposFromGithub from '../../helpers/api';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import SCard from './styles/SCardsContainer';
import SProjectsContainer from './styles/SProjectsContainer';
import SLink from './styles/SRepoLink';
import Topics from './styles/STopics';
import STopicsContainer from './styles/STopicsContainer';

function Projects() {
  const [loading, setLoading] = useState(false);
  const [reposList, setReposList] = useState([]);

  const getReposResponse = async () => {
    setLoading(true);
    const repos = await getMyReposFromGithub();
    setReposList(repos);
    setLoading(false);
  };

  useEffect(() => {
    getReposResponse();
  }, []);

  return (
    <SProjectsContainer>
      { loading ? (<Loading />
      ) : (
        reposList.map((repo) => {
          const { name, description, html_url, id, topics } = repo;
          return (
            <SCard key={ id }>
              <h1>{name}</h1>
              <p>{description}</p>
              <STopicsContainer>
                {topics.map((topic) => <Topics key={ topic }>{topic}</Topics>)}
              </STopicsContainer>
              <SLink
                href={ html_url }
                target="_blank"
                rel="noreferrer"
              >
                Visite o repositório!!
              </SLink>
            </SCard>
          );
        }))}
    </SProjectsContainer>
  );
}

export default Projects;
