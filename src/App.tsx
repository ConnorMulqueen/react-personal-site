import React from 'react';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faSuitcase, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faStrava, faGithub, faMediumM } from '@fortawesome/free-brands-svg-icons';
import Tooltip from '@material-ui/core/Tooltip';


import Home from './Home';

const App: React.FC = () => {
  return (
    <div className="App">
       <AppBar position="static">
        <Toolbar>
          <Container>
          <Typography variant="h6" >
              Connor Mulqueen
          </Typography>
          <Tooltip title="Resume"><Button color="inherit"><FontAwesomeIcon icon={faFileAlt}  size='lg'/></Button></Tooltip>
          <Tooltip title="Contact"><Button color="inherit"><FontAwesomeIcon icon={faEnvelope} size='lg'/></Button></Tooltip>
          <Tooltip title="GitHub"><Button color="inherit"><FontAwesomeIcon icon={faGithub} size='lg'/></Button></Tooltip>
          <Tooltip title="Blog"><Button color="inherit"><FontAwesomeIcon icon={faMediumM} size='lg'/></Button></Tooltip>
          <Tooltip title="Personal Projects"><Button color="inherit"><FontAwesomeIcon icon={faSuitcase} size='lg'/></Button></Tooltip>
          <Tooltip title="LinkedIn"><Button color="inherit"><FontAwesomeIcon icon={faLinkedin} size='lg'/></Button></Tooltip>
          <Tooltip title="Strava"><Button color="inherit"><FontAwesomeIcon icon={faStrava} size='lg'/></Button></Tooltip>

          <header>
          {/* <div dangerouslySetInnerHTML={{__html: '<style>.bmc-button img{width: 35px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{padding: 7px 5px 7px 10px !important;line-height: 35px !important;height:51px !important;min-width:217px !important;text-decoration: none !important;display:inline-flex !important;color:#ffffff !important;background-color:#FF813F !important;border-radius: 5px !important;border: 1px solid transparent !important;padding: 7px 5px 7px 10px !important;font-size: 20px !important;letter-spacing:-0.08px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:\'Lato\', sans-serif !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#ffffff !important;}</style><link href="https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext" rel="stylesheet"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/27JYSTw"><img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee"><span style="margin-left:15px;font-size:19px !important;">Buy me a coffee</span></a>'}} /> */}

          </header>

          </Container>

        </Toolbar>
      </AppBar>
        <Home />
    </div>
  );
}

export default App;
