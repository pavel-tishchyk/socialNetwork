import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const CHANGE_CURRENT_THEME = 'CHANGE-CURRENT-THEME';
const CHANGE_THEME_COLOR = 'CHANGE-THEME-COLOR';
const CHANGE_NAVIGATION = 'CHANGE-NAVIGATION';

let initialState = {
    theme: {
        palette: {
            type: "light",
            primary: {
                main: '#536976',
                contrastText: '#ffffff',
            },
            secondary: {
                main: '#26d0ce',
                contrastText: '#ffffff',
            },
            // error: 
        },
        overrides: {
            
        },
        spacing: 4,
    },

    currentTheme: 'default',

    navigationData: [
        {id: 0, path: '/profile', icon: <PersonIcon/>, name: 'profile', isAdd: true},
        {id: 1, path: '/messages', icon: <EmailIcon/>, name: 'messages', isAdd: true},
        {id: 2, path: '/news', icon: <MenuBookIcon/>, name: 'news', isAdd: true},
        {id: 3, path: '/settings', icon: <SettingsIcon/>, name: 'settings', isAdd: true},
    ],

    localeData: [
        {id: 0, locale: 'en', name: 'english'},
        {id: 1, locale: 'ru', name: 'russian'},
    ]
};

const settingsReducer = (settingsData = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENT_THEME:{
            return {...settingsData,
                currentTheme: action.name 
            }
        }

        case CHANGE_THEME_COLOR:{
            return {...settingsData,
                theme: {
                    ...settingsData.theme,
                    palette: {
                        ...settingsData.theme.palette,
                        primary: {
                            main: action.color,
                        }
                    }
                } 
            }
        }

        case CHANGE_NAVIGATION: {
            return {...settingsData,
                navigationData: action.navigation,
            }
        }
 
        default: return settingsData;
    }

}

export const  changeCurrentTheme = (name) => {
    return {
        type: CHANGE_CURRENT_THEME, 
        name
    }
}

export const changeThemeColor = (color) => {
    return {
        type: CHANGE_THEME_COLOR,
        color
    }
}

export const  changeNavigation = (navigation) => {
    return {
        type: CHANGE_NAVIGATION,
        navigation
    }
}


export default settingsReducer;