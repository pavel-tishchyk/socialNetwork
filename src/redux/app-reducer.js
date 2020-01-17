import { getAuthUserDataThunkCreator } from './auth-reducer';

const SET_INITIALIZED = 'SET-INITIALIZED';
const CHANGE_LOCALE = 'CHANGE-LOCALE';

let initialState = {
    initialized: true,//false
    locale: "en",
};

const appReducer = (appData = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {...appData,
                initialized: true,
            }
        }

        case CHANGE_LOCALE: {
            return {...appData,
                locale: action.locale,
            }
        }

        default: return appData;
    }

}

export const setInitialized = () => {
    return {
        type: SET_INITIALIZED,
    }
}

export const changeLocale = (locale) => {
    debugger;
    return {
        type: CHANGE_LOCALE,
        locale
    }
}

export const initializeApp = () => (dispatch) => {
    dispatch(getAuthUserDataThunkCreator())
        .then(() => dispatch(setInitialized()))
}

export default appReducer;