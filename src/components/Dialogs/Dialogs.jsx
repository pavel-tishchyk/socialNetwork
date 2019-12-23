import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import MessageFrom from './MessageFrom';
import {makeStyles} from '@material-ui/core/styles';
import { Grid, Paper, List } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    dialogs: {
        paddingRight: theme.spacing(3),
    },
    messages: {
        paddingLeft: theme.spacing(3),
    },
    wrapper: {
        maxHeight: '70vh',
        overflowY: 'auto',
        scrollBehavior: 'smooth',
        padding: theme.spacing(3, 3, 2, 3),
        '&::-webkit-scrollbar': {
            height: '10px',
            width: '6px',
            background: '#fff',
            '-webkit-border-radius': `4px`,
        },
        '&::-webkit-scrollbar-thumb': {
            background: theme.palette.primary.main,
            '-webkit-border-radius': `4px`,
        },
         
        '&::-webkit-scrollbar-corner': {
            background: '#fff',
        },
    },
}));

const Dialogs = ({messagesPage, dialogId, sendMessage, ...rest}) => {
    const classes = useStyles();
    dialogId = dialogId ? dialogId : 1; // Костыль
    let dialogElement = messagesPage.dialogsData.map(dialog => <Dialog 
        key={dialog.id} 
        name={dialog.name}
        lastMessage={dialog.messagesData[dialog.messagesData.length-1].message} 
        id={dialog.id}/>);

    let messageElement = messagesPage.dialogsData[dialogId-1].messagesData.map((message, index, data) => {
        const flag = index === data.length - 1 || message.messageType !== data[index + 1].messageType;
            return (
                <Message 
                key={message.id} 
                message={message.message}
                type={message.messageType}
                isLastMessage={flag}/>
            )
    } );

    let onSubmit = (data) => {
        sendMessage(data.message, dialogId-1);
    }

    return (
       <Grid container>
            <Grid item xs={3} className={classes.dialogs}>
                <Paper>
                <List component="div" className={classes.root} aria-label="dialogs">
                    {dialogElement}
                </List>
                </Paper>
            </Grid>
            <Grid item xs={9} className={classes.messages}>
                <Paper>
                    <Grid container className={classes.wrapper}>{messageElement}</Grid>
                </Paper>
                <MessageFrom onSubmit={onSubmit}/>
           </Grid>
       </Grid> 
    )
}
export default Dialogs;