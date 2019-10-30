import React from 'react';
import Container from '@material-ui/core/Container';

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';



const useStyles = makeStyles({
    smallAvatar: {
        margin: 10,
        width: 200,
        height: 200
    },
});

const Projects: React.FC = () => {
    const classes = useStyles();
    return (
        <div>
            <Container>
                <Typography variant='h3'>
                    Projects
                </Typography>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                        <ListItemAvatar>
                        <Avatar alt="Mechanical Squirrel" src={require('./Assets/Images/mechanical_squirrel.jpg')} className={classes.smallAvatar}/>
                        </ListItemAvatar>
                        <ListItemText primary="Mechanical Squirrel | Javascript, Node, Python, AWS EC2" secondary='A Discord bot for World of Warcraft: Classic memes (15k+ Users | 500+ Discord Servers)' />
                    </ListItem>
                    <ListItem button>
                        <ListItemAvatar>
                        <Avatar alt="Shroomscape" src={require('./Assets/Images/shroomscape.png')} className={classes.smallAvatar} />
                        </ListItemAvatar>
                        <ListItemText primary="Shroomscape | Javascript, Node, AWS Lambda" secondary='An Amazon Alexa Skill for a voice based adventure game' />
                    </ListItem>
                    <ListItem button>
                        <ListItemAvatar>
                        <Avatar alt="Shroomscape" src={require('./Assets/Images/fireballer.jpg')} className={classes.smallAvatar} />
                        </ListItemAvatar>
                        <ListItemText primary="Fireballer | AutoHotkey" secondary='A mage leveling bot for World of Warcraft: Classic private servers' />
                    </ListItem>
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