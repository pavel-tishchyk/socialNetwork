import React from 'react';
import ThemeSettings from './ThemeSettings';
import NavigationSettings from './NavigationSettings';
import { Grid } from "@material-ui/core"

const Settings = (props) =>{
    let {navigationData,
        changeCurrentTheme, 
        changeThemeColor, 
        changeNavigation} = props;
    
    return (
        <Grid container>
            <ThemeSettings changeCurrentTheme={changeCurrentTheme} changeThemeColor={changeThemeColor}/>
            <NavigationSettings navigationData={navigationData} changeNavigation={changeNavigation}/>
        </Grid>
    );
}

export default Settings;