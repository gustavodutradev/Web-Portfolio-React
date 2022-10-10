import React, { useState, useEffect } from 'react';
import { getMyReposFromGithub } from '../api';
import Loading from './Loading';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <CardGroup key={id} style={{ width: '25rem' }}>
          <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{ name }</Card.Title>
            <Card.Text>
              { description }
            </Card.Text>
            <Button variant="primary" href={ html_url }>Go to repo</Button>
          </Card.Body>
          </Card>
          </CardGroup>
      )
    }))}
  </section>
  )
}

export default Projects;