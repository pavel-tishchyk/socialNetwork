import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import Settings from './Settings';
import {
    changeCurrentTheme, 
    changeThemeColor,
    changeNavigation,
    } from './../../redux/settings-reducer';
import { changeLocale } from './../../redux/app-reducer';
import { navigationDataSelector, settingsDataSelector, localeDataSelector } from '../../redux/settings-selectors';

class SettingsContainer extends React.Component {

    componentDidMount() {
        
    }

    render() {  
        return <Settings
            navigationData={this.props.navigationData}
            changeCurrentTheme={this.props.changeCurrentTheme}
            changeThemeColor={this.props.changeThemeColor}
            changeNavigation={this.props.changeNavigation}
            localeData={this.props.localeData}
            changeLocale={this.props.changeLocale}/>
    }
}

let mapStateToProps = (state) => {
    return {
        navigationData: navigationDataSelector(state),
        settingsData: settingsDataSelector(state),
        localeData: localeDataSelector(state),
    }

};

let mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentTheme: (name) => dispatch(changeCurrentTheme(name)),
        changeThemeColor: (color) => dispatch(changeThemeColor(color)),
        changeNavigation: (navigation) => dispatch(changeNavigation(navigation)),
        changeLocale: (locale) => dispatch(changeLocale(locale)),
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps), 
    withAuthRedirect
    )(SettingsContainer);