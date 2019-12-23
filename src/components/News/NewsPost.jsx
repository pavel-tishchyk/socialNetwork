import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

import Card from '@material-ui/core/Card';


import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles(theme => ({
    item: {
        paddingBottom: theme.spacing(3),
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));

let NewsPost = (props) => {
    const classes = useStyles();
    let { image,  title, description, dataPub } = props;
    
    return (
        <Grid item xs={5} className={classes.item}>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe">U</Avatar>
                    }
                    title='UltraNet'
                    subheader={dataPub}
                />
                <CardMedia
                    className={classes.media}
                    image={image}
                    
                    title={title}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default NewsPost;