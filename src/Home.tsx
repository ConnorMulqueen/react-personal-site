import React from 'react';
import Container from '@material-ui/core/Container';

import Typography from '@material-ui/core/Typography';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';


const useStyles = makeStyles({
    backgroundDiv: {
        paddingBottom: 100,
    },
    bigAvatar: {
      margin: 50,
      width: 400,
      height: 400,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
    },
    smallAvatar: {
        margin: 10,
        width: 200,
        height: 200
    },
    bottomArrow: {
        position: 'relative', //Here is the trick
        bottom: 0, //Here is the trick
    }
  });

const Home: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.backgroundDiv}>
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

                <br />
                <FontAwesomeIcon icon={faArrowDown} className={classes.bottomArrow} size='2x'/>
            </Container>

        </div>
    )
}

export default Home;
