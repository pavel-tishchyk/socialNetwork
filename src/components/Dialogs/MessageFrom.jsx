import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Divider, IconButton } from '@material-ui/core';
import { renderInputBase } from './../common/renderInputBase';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
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

const MessageForm = (props) =>{
    const classes = useStyles();
    const { handleSubmit, reset } = props;
    return (
        <Paper 
            component="form" 
            className={classes.form} 
            noValidate autoComplete="off"
            onSubmit={handleSubmit}>
            <Field
                component={renderInputBase}
                name='message'
                className={classes.input}
                label="Enter your message..."
            />
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton color="primary" className={classes.iconButton} onClick={() => {handleSubmit(); reset()}}>
                <SendIcon />
            </IconButton>
        </Paper>
    );
}

export default reduxForm({form: 'message'})(MessageForm);
