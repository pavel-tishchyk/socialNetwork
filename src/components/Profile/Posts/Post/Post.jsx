import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(theme => ({
    wrapper: {
        margin: theme.spacing(6, 0),
    },
    text: {
        padding: theme.spacing(3, 3, 0, 3),
    },
}));

const Post = (props) => { 
    const classes = useStyles();
    return (
        <Paper className={classes.wrapper}>
            <Typography variant="subtitle2" className={classes.text}>{props.message}</Typography>
            <IconButton>
                <FavoriteIcon/>
                <Typography>{props.likesCount}</Typography>
            </IconButton>
        </Paper>
    )
}
export default Post;