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
            <section className="project-container" key={ id } style={ { gap: '10px' } }>
              <CardGroup>
                <Card>
                  <Card.Body
                    style={ {
                      maxWidth: '250px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '5px',
                    } }
                  >
                    <Card.Title
                      style={ {
                        fontSize: '15px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                      } }
                    >
                      { name.replace('Project-', '') }

                    </Card.Title>
                    <Card.Img
                      src={ ImageHandler(name) }
                      alt="logo"
                      style={ {
                        objectFit: 'contain',
                        width: '100%',
                        height: 'auto',
                      } }
                    />
                    <Card.Text
                      style={ {
                        fontSize: '11px',
                        textJustify: 'justify',
                      } }
                    >
                      {' '}
                      { description }
                      {' '}
                    </Card.Text>
                    <Button
                      variant="primary"
                      href={ html_url }
                      style={ {
                        fontSize: '12px',
                        fontWeight: 'bold',
                        width: '100%',
                      } }
                    >
                      Repositório
                    </Button>
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
