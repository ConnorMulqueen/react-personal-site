import React from 'react';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faSuitcase, faEnvelope, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faStrava, faGithub, faMediumM } from '@fortawesome/free-brands-svg-icons';
import Tooltip from '@material-ui/core/Tooltip';


import Home from './Home';
import Projects from './Projects';

const App: React.FC = () => {
  return (
    <div className="App">
       <AppBar position="sticky">
        <Toolbar>
          <Container>
            <Tooltip title="Resume"><Button color="inherit"><FontAwesomeIcon icon={faFileAlt}  size='lg'/></Button></Tooltip>
            <Tooltip title="Contact Connor.Mulqueen@gmail.com"><Button color="inherit" href="mailto:connor.mulqueen@gmail.com"><FontAwesomeIcon icon={faEnvelope} size='lg'/></Button></Tooltip>
            <Tooltip title="GitHub"><Button color="inherit" href="https://github.com/ConnorMulqueen/" target="_blank"><FontAwesomeIcon icon={faGithub} size='lg'/></Button></Tooltip>
            <Tooltip title="Blog"><Button color="inherit" href="https://medium.com/@connormulqueen" target="_blank"><FontAwesomeIcon icon={faMediumM} size='lg'/></Button></Tooltip>
            {/* <Tooltip title="Personal Projects"><Button color="inherit"><FontAwesomeIcon icon={faSuitcase} size='lg'/></Button></Tooltip> */}
            <Tooltip title="LinkedIn"><Button color="inherit" href="https://www.linkedin.com/in/connormulqueen/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size='lg'/></Button></Tooltip>
            <Tooltip title="Strava"><Button color="inherit" href="https://www.strava.com/athletes/connormulqueen" target="_blank"><FontAwesomeIcon icon={faStrava} size='lg'/></Button></Tooltip>
          </Container>

        </Toolbar>
      </AppBar>
        <Home />

        <Projects />
    </div>
  );
}

export default App;
