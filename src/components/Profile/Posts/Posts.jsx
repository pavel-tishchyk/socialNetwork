import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Post from "./Post/Post";
import PostForm from './PostForm';

const useStyles = makeStyles(theme => ({
    wrapper: {
        paddingTop: theme.spacing(6),
    },
    form: {
        display: 'flex',
        alignItems: 'center',
        marginTop: theme.spacing(6),
        padding: theme.spacing(1, 1),
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: theme.spacing(2),
    },
    divider: {
        height: theme.spacing(7),
        margin: theme.spacing(1),
    },
}));

const Posts = ({postsData ,addPost}) => {    
    const classes = useStyles();
    let postElement = postsData.map(post => <Post 
        key={post.id} 
        id={post.id}
        message={post.message}   
        likesCount={post.likesCount} />);

    let onSubmit = (data) => {
        addPost(data.text);
    }
    return (
        <Grid container justify='flex-end' className={classes.wrapper}>
            <Grid item xs={9}>
                <PostForm onSubmit={onSubmit}/>
            </Grid>
            <Grid item xs={9} className={classes.posts}>
                {postElement}
            </Grid>
        </Grid>
    )
}
export default Posts;