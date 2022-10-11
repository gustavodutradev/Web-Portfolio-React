import React, { useState, useEffect } from 'react';
import { getMyReposFromGithub } from '../api';
import Loading from '../components//Loading';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Carrousel from '../components/Carrousel';
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
       <section className="carousel-container">
            <Carrousel />
       </section>    
    { loading ? ( <Loading />
    ) : ( 
      reposList.map((repo) => {
        const { name, description, html_url, id } = repo;
        return (
          <section className="project-container"  key={id}>
          <CardGroup style={{ width: '25rem' }}>
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
      </section>
        )
        }))}

  </section>
  )
}

export default Projects;