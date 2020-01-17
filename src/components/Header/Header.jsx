import React from 'react';
import {NavLink} from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import { 
    AppBar, Toolbar, Typography, 
    Avatar, Grid, Button, IconButton
    } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const styles = theme => ({
    title: {
      flexGrow: 1,
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    user: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        backgroundColor: theme.palette.secondary.main,
        marginRight: theme.spacing(2.5), 
    },
    link: {
        textDecoration: 'none',
    },
    button: {
        margin: theme.spacing(1, 2),
    },
    menu: {
        position: 'absolute',
        right: 0,
        zIndex: '2',
    },
    icon: {
        minWidth: '30px',
    },
});

class Header extends React.Component {
    render () {
        const { props: { classes, isAuth, login, logOut } } = this;
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <FormattedMessage id="logo"/>
                    </Typography>
                    {isAuth 
                    ?<Grid className={classes.wrapper}>
                        <Grid className={classes.user}>
                            <Avatar className={classes.avatar} >{login[0].toUpperCase()}</Avatar>
                            <Typography variant="subtitle1">{login}</Typography>
                        </Grid>
                        <IconButton color="secondary" onClick={logOut}>
                            <ExitToAppIcon />
                        </IconButton>
                    </Grid>
                    : <Grid>
                        <NavLink to='/login' className={classes.link}>
                            <Button variant="contained" color="secondary" className={classes.button}>
                                <FormattedMessage id="singIn"/>
                            </Button>
                        </NavLink>
                        <NavLink to='/registration' className={classes.link}>
                            <Button variant="contained" className={classes.button}>
                                <FormattedMessage id="singUp"/>
                            </Button>
                        </NavLink>
                    </Grid>}
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(Header);