import React from 'react';
import ProfileStatus from './ProfileStatus';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    info: {
        padding: theme.spacing(3),
    },
    avatar: {
        width: '200px',
        height: '200px',
        margin: '0 auto',
        backgroundColor: theme.palette.secondary.main,
        fontSize: '200px',
    },
});

const ProfileInfo = (props) => {
    const {userData, setStatus, classes} = props;
    return (
        <Grid container >
            <Grid item xs={4}>
                {userData.photos.large 
                ? <Avatar src={userData.photos.large} className={classes.avatar}></Avatar>
                :<Avatar className={classes.avatar} >{userData.fullName[0].toUpperCase()}</Avatar>}
            </Grid>    
            <Grid item xs={8}>
                <Typography variant='h4'>{userData.fullName}</Typography>
                <ProfileStatus status={userData.status} setStatus={setStatus}/>
            </Grid>
        </Grid>     
    )   
}
export default withStyles(styles)(ProfileInfo);