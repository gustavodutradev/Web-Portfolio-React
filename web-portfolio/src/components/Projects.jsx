import React, { useState, useEffect } from 'react';
import { getMyReposFromGithub } from '../api';
import Loading from './Loading';

  function Projects() {

    const [loading, setLoading] = useState(false);
    const [reposList, setReposList] = useState([]);
  
  useEffect(() => {
    getReposResponse();
  }, [])

  const getReposResponse = async () => {
    setLoading(true);
    const repos = await getMyReposFromGithub();
    setReposList(repos)
    setLoading(false);
  }

  return (
    <section className="main">
    { loading ? (
      <Loading />
    ) : ( reposList.map((repo) => {
      const { name, description, html_url, id } = repo;
      return (
        <section key={ id } className="repo-card">
          <section className="repo-title-container">
          <h3 className="repo-title">{ name }</h3>
          </section>
          <section className="repo-description-container">
          <p className="repo-description">{ description }</p>
          </section>
          <section className="repo_url_container">
          <a
          target="_blank"
          href={ html_url }
          rel="noreferrer"
          className="repo-url"
          >
            Visite o repositório
          </a>
          </section>
        </section>
      )
    }))}
  </section>
  )
}

export default Projects