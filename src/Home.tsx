import React from 'react';
import Container from '@material-ui/core/Container';

import Typography from '@material-ui/core/Typography';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';



const useStyles = makeStyles({
    bigAvatar: {
      margin: 10,
      width: 400,
      height: 400,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
    },
    background: {
    },
  });

// should be using typography
const Home: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.background}>
            <Container>
                <Grid container justify = "center">
                    <Avatar alt="profile_pic" src={require('./Assets/Images/me2.jpg')} className={classes.bigAvatar} />
                </Grid>
                <Typography variant="h1">
                    Connor Mulqueen
                </Typography>
                <Typography variant="h4">
                    Software Engineer
                </Typography>
                <ArrowDownwardIcon />
            </Container>

            <Container>
                <Typography variant='h3'>
                    Projects
                </Typography>
                <Typography variant='h4'>

                </Typography>
            <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={require('./Assets/Images/mechanical_squirrel.jpg')} />
        </ListItemAvatar>
          <ListItemText primary="Mechanical Squirrel" secondary='A Discord bot for World of Warcraft: Classic memes (15k+ Users | 500+ Discord Servers)' />
        </ListItem>
        </List>
            </Container>

        </div>
    )
}

export default Home;
