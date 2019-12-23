import { getAuthUserDataThunkCreator } from './auth-reducer';

const SET_INITIALIZED = 'SET-INITIALIZED';

let initialState = {
    initialized: false,
};

const appReducer = (appData = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:{
            return {...appData,
                initialized: true,
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

export const initializeApp = () => (dispatch) => {
    dispatch(getAuthUserDataThunkCreator())
        .then(() => dispatch(setInitialized()))
}

export default appReducer;