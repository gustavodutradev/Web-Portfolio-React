import React, { Component } from 'react';
import { getMyReposFromGithub } from '../api';

class Projects extends Component {

async componentDidMount() {
    await getMyReposFromGithub();
}

render() {
    return (
      <div>Projects</div>
    )
  }
}

export default Projects;
