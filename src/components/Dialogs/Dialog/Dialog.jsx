import React from 'react';
import {NavLink} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {ListSubheader, ListItem, ListItemAvatar, Avatar, ListItemText} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
  text: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }
}));

const Dialog = (props) => {
  const classes = useStyles();
  let path = "/messages/" + props.id;

  return (
    <NavLink to={path} className={classes.link}>
      {props.id === 1 && <ListSubheader className={classes.subheader}>Today</ListSubheader>}
      {props.id === 3 && <ListSubheader className={classes.subheader}>Yesterday</ListSubheader>}
      <ListItem button>
        <ListItemAvatar>
          <Avatar alt="Profile Picture">{props.name[0].toUpperCase()}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.name} secondary={props.lastMessage} className={classes.text}/>
      </ListItem>
    </NavLink>
  )
}
export default Dialog;