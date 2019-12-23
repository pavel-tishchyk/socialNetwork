import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Paper, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    sentWrapper: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: theme.spacing(2),
        padding: theme.spacing(0, 2),
    },
    receivedWrapper: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'start',
        marginBottom: theme.spacing(2),
        padding: theme.spacing(0, 2),
    },
    sent: {
        padding: theme.spacing(2, 3),
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
    },
    received: {
        padding: theme.spacing(1, 2),
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    sentItem: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        border: '10px solid transparent',
        borderBottom: `10px solid ${theme.palette.primary.dark}`,
        boxShadow: '5px 6px 0px -5px rgba(0,0,0,0.2)',

    },
    receivedItem: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        border: '10px solid transparent',
        borderBottom: `10px solid ${theme.palette.primary.main}`,
        boxShadow: '-5px 6px 0px -5px rgba(0,0,0,0.2)',
    },
}));

const Message = (props) => {
    const classes = useStyles();    
    return (
        <Grid item xs={12} className={classes[`${props.type}Wrapper`]}>
            {props.isLastMessage === true && props.type === 'received' ? <div className={classes[`${props.type}Item`]}></div> : <div></div>}
            <Paper className={classes[`${props.type}`]}>
                <Typography>{props.message}</Typography>
            </Paper>
            {props.isLastMessage === true && props.type === 'sent' ? <div className={classes[`${props.type}Item`]}></div> : <div></div>}
        </Grid>
    )
}

export default Message;