/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';

// components
import FilterBar from '../../components/FilterBar';
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
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [repoTopics, setRepoTopics] = useState([]);

  const getReposResponse = async () => {
    setLoading(true);
    const repos = await getMyReposFromGithub();
    setReposList(repos);
    setFilteredRepos(repos);

    const allTopics = new Set();
    repos.forEach((repo) => {
      repo.topics.forEach((topic) => allTopics.add(topic));
    });
    setRepoTopics([...allTopics]);

    setLoading(false);
  };

  useEffect(() => {
    getReposResponse();
  }, []);

  const handleFilterChange = (selectedTopic) => {
    if (selectedTopic === '') {
      setFilteredRepos(reposList);
    } else {
      const filtered = reposList.filter((repo) => repo.topics.includes(selectedTopic));
      setFilteredRepos(filtered);
    }
  };

  const orderTopics = (topics) => topics.sort((a, b) => {
    const lowerToUper = -1;
    const upperToLower = 1;
    if (a < b) return lowerToUper;
    if (a > b) return upperToLower;
    return 0;
  });

  return (
    <SProjectsContainer>
      <FilterBar
        topics={ orderTopics(repoTopics) }
        onFilterChange={ handleFilterChange }
      />
      {loading ? (
        <Loading />
      ) : (
        filteredRepos.map((repo) => {
          const { name, description, html_url, id, topics } = repo;
          return (
            <SCard key={ id }>
              <h1>{name}</h1>
              <p>{description}</p>
              <STopicsContainer>
                {topics.map((topic) => (
                  <Topics key={ topic }>{ topic }</Topics>
                ))}
              </STopicsContainer>
              <SLink href={ html_url } target="_blank" rel="noreferrer">
                Visite o repositório!!
              </SLink>
            </SCard>
          );
        })
      )}
    </SProjectsContainer>
  );
}

export default Projects;
