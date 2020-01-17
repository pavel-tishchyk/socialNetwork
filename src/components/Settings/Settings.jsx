import React from 'react';
import ThemeSettings from './ThemeSettings';
import NavigationSettings from './NavigationSettings';
import LocaleSettings from './LocaleSettings';
import { Grid } from "@material-ui/core"

const Settings = (props) =>{
    let {navigationData,
        changeCurrentTheme, 
        changeThemeColor, 
        changeNavigation,
        localeData,
        changeLocale,} = props;
    return (
        <Grid container>
            <ThemeSettings changeCurrentTheme={changeCurrentTheme} changeThemeColor={changeThemeColor}/>
            <NavigationSettings navigationData={navigationData} changeNavigation={changeNavigation}/>
            <LocaleSettings localeData={localeData} changeLocale={changeLocale}/>
        </Grid>
    );
}

export default Settings;