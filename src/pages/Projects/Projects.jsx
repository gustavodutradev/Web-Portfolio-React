/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Loading from '../../components/Loading';
import getMyReposFromGithub from '../../helpers/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageHandler from '../../helpers/imageHandler';

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
    <section className="main">
      { loading ? (<Loading />
      ) : (
        reposList.map((repo) => {
          const { name, description, html_url, id } = repo;
          console.log(repo);
          return (
            <section className="project-container" key={ id }>
              <CardGroup style={ { width: '25rem' } }>
                <Card style={ { width: '18rem' } }>
                  <Card.Body>
                    <Card.Title>{ name }</Card.Title>
                    <Card.Img src={ ImageHandler(name) } alt="logo" />
                    <Card.Text>
                      {' '}
                      { description }
                      {' '}
                    </Card.Text>
                    <Button variant="primary" href={ html_url }>Go to repo</Button>
                  </Card.Body>
                </Card>
              </CardGroup>
            </section>
          );
        }))}

    </section>
  );
}

export default Projects;
