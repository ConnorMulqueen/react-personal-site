import React from 'react';
import Container from '@material-ui/core/Container';

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { mergeClasses } from '@material-ui/styles';
import Link from '@material-ui/core/Link';


import Tooltip from '@material-ui/core/Tooltip';



const useStyles = makeStyles({
    smallAvatar: {
        margin: 10,
        width: 200,
        height: 200
    },
    backgroundDiv: {
        position: 'relative',
    }
});

const Projects: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.backgroundDiv}>
            <Container>
                <Typography variant='h3'>
                    Projects
                </Typography>
                <br />
                <Tooltip title="Help out with my AWS bill :)">
                    <div style={{display: 'inline'}} dangerouslySetInnerHTML={{__html: '<style>.bmc-button img{width: 35px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{padding: 7px 5px 7px 10px !important;line-height: 35px !important;height:51px !important;min-width:217px !important;text-decoration: none !important;display:inline-flex !important;color:#FFFFFF !important;background-color:#FF813F !important;border-radius: 5px !important;border: 1px solid transparent !important;padding: 7px 5px 7px 10px !important;font-size: 20px !important;letter-spacing:-0.08px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:\'Lato\', sans-serif !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#FFFFFF !important;}</style><link href="https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext" rel="stylesheet"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/27JYSTw"><img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee"><span style="margin-left:15px;font-size:19px !important;">Buy me a coffee</span></a>'}} />

                </Tooltip>

                <List component="nav" aria-label="main mailbox folders">

                    <Link href="https://github.com/ConnorMulqueen/Mechanical-Squirrel" target="_blank">

                        <ListItem button>
                            <ListItemAvatar>
                            <Avatar alt="Mechanical Squirrel" src={require('./Assets/Images/mechanical_squirrel.jpg')} className={classes.smallAvatar}/>
                            </ListItemAvatar>
                            <ListItemText primary="Mechanical Squirrel | Javascript, Node, Python, AWS EC2" secondary='A Discord bot for World of Warcraft: Classic memes (15k+ Users | 500+ Discord Servers)' />
                        </ListItem>
                    </Link>
                    <Link href="https://github.com/ConnorMulqueen/Shroomscape" target="_blank">

                        <ListItem button>
                            <ListItemAvatar>
                            <Avatar alt="Shroomscape" src={require('./Assets/Images/shroomscape.png')} className={classes.smallAvatar} />
                            </ListItemAvatar>
                            <ListItemText primary="Shroomscape | Javascript, Node, AWS Lambda" secondary='A voice based adventure game Amazon Alexa Skill' />
                        </ListItem>
                    </Link>
                    <Link href="https://github.com/ConnorMulqueen/VanillaWoWBot" target="_blank">
                        <ListItem button>
                            <ListItemAvatar>
                            <Avatar alt="Shroomscape" src={require('./Assets/Images/fireballer.png')} className={classes.smallAvatar} />
                            </ListItemAvatar>
                            <ListItemText primary="Fireballer | AutoHotkey" secondary='A mage leveling bot for World of Warcraft: Classic private servers' />
                        </ListItem>
                    </Link>
                    <ListItem button>
                        <ListItemAvatar>
                        <Avatar alt="Shroomscape" src={require('./Assets/Images/fishingbot.jpg')} className={classes.smallAvatar} />
                        </ListItemAvatar>
                        <ListItemText primary="Bait | Python" secondary='A fishing bot for World of Warcraft: Classic private servers' />
                    </ListItem>
                </List>
            </Container>

        </div>
    )
}

export default Projects;