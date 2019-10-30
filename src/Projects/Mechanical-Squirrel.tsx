import React from 'react';
import Container from '@material-ui/core/Container';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

const MechanicalSquirrel: React.FC = () => {
    return (
        <Container>
            <Typography variant="h3">
                Mechanical Squirrel
            </Typography>
            <Typography variant="h5">
                A Discord bot that serves World of Warcraft: Classic Memes
            </Typography>
            <Typography variant='h6'>
                15k+ users, 500+ Servers
            </Typography>
            <Typography variant='h6'>
                Javascript, Node.js, Python | AWS EC2
            </Typography>
            <Typography variant='h6'>
               <Button color="inherit"><GitHubIcon></GitHubIcon> GitHub</Button>
            </Typography>
        </Container>


    )
}

export default MechanicalSquirrel;
