import React from 'react';
import {NavLink} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {MenuItem, ListItemIcon, ListItemText} from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

const useStyles = makeStyles(theme => ({
    link: {
        display: 'flex',
        textDecoration: 'none',
        borderLeft: '10px solid',
        borderColor: 'transparent',
        color: theme.palette.secondary.contrastText,
        marginBottom: '10px',

    },
    active: {
        borderLeft: '10px solid',
        borderColor: theme.palette.primary.main,
        fontWeight: 'bold',
    },
    item: {
        width: '100%',
    },
    icon: {
        color: theme.palette.primary.dark,
    },
    text: {
        color: theme.palette.primary.dark,
    },
}));

const NavBarItem = ({path, icon, name}) =>{
    const classes = useStyles();

    return(
        <NavLink to={path} className={classes.link} activeClassName={classes.active}>
            <MenuItem className={classes.item}>
                <ListItemIcon className={classes.icon}>
                    {icon}
                </ListItemIcon>
                <ListItemText 
                    className={classes.text} 
                    primary={
                    <FormattedMessage id={name}/>
                    }
                />
            </MenuItem>
        </NavLink>
    )
}

export default NavBarItem;