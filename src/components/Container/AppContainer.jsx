import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import LoginContainer from './../Login/LoginContainer';
import HeaderContainer from './../Header/HeaderContainer';
import ProfileContainer from './../Profile/ProfileContainer';
import SettingsContainer from './../Settings/SettingsContainer';
import NavBarContainer from './../NavBar/NavBarContainer';
import DialogsContainer from './../Dialogs/DialogsContainer';
import SearchContainer from './../Search/SearchContainer';
import NewsContainer from './../News/NewsContainer';
import PreLoader from './../common/PreLoader';
import { initializedSelector, } from './../../redux/app-selectors';
import { isAuthSelector, } from './../../redux/auth-selectors';
import { themeSelector, } from './../../redux/settings-selectors';
import { initializeApp } from './../../redux/app-reducer';
import { Container, Grid } from '@material-ui/core';
import { withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const styles = theme => ({
    container: {
        backgroundColor: theme.palette.grey[200],
        minHeight: '100vh',
        height: '100%',
    },
    header: {

    },
    nav: {
        padding: theme.spacing(3, 3, 3, 0),
    },
    content: {
        position: 'relative',
        padding: theme.spacing(3, 0, 3, 3),
        minHeight: '90vh',
    },
});


class AppContainer extends React.Component {     
    componentDidMount() {
        this.props.initializeApp();
    }
    
    render () {
        const { props: { classes, initialized, theme, isAuth } } = this;
        return initialized 
            ? <ThemeProvider theme={createMuiTheme(theme)}>
                    <Container maxWidth={false} className={classes.container}>
                        <Grid container spacing={0}>
                            <Grid item xs={12}  className={classes.header}>
                                <HeaderContainer />
                            </Grid>
                            <Grid item xs={isAuth ? 2 : true} className={classes.nav}>
                                <NavBarContainer />
                            </Grid>
                            <Grid item xs={isAuth ? 10 : 12} className={classes.content}>
                                <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                                <Route path='/messages/:dialogId?' render={() => <DialogsContainer />} />
                                <Route path='/news' render={() => <NewsContainer />} />
                                <Route path='/settings' render={() => <SettingsContainer />} />
                                <Route path='/search' render = {() => <SearchContainer />} />
                                <Route path='/login' render = {() => <LoginContainer />} />
                            </Grid>
                        </Grid>
                    </Container>
                </ThemeProvider> 
            : <PreLoader/>   
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: initializedSelector(state),
        isAuth: isAuthSelector(state),
        theme: themeSelector(state)
    }

};

let mapDispatchToProps = (dispatch) => {
    return {
        initializeApp: () => dispatch(initializeApp())
    }
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles))(AppContainer);