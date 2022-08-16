import React, { Component } from 'react';
import { getMyReposFromGithub } from '../api';

class Projects extends Component {

  state = {
    reposList: [],
  }

 componentDidMount() {
  this.getReposResponse();
}

getReposResponse = async () => {
  const repos = await getMyReposFromGithub();
  this.setState({reposList: repos});
}

render() {
  const { reposList } = this.state;
    return (  
      <section className="main">
        { reposList.map((repo) => {
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
                { name }
              </a>
              </section>
            </section>
          )
        })}
      </section>
    )
  }
}

export default Projects;
