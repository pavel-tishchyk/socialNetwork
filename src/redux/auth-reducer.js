import { getAuthUserData, logIn, logOut, getCaptchaUrl } from './../API/api';
import { stopSubmit } from 'redux-form';

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';
const SET_CAPTCHA_URL = 'SET-CAPTCHA-URL'

let initialState = {
    userData: {
        id:null,
        email:null,
        login: null,
        isAuth: false,
    },
    captchaUrl: null,
};

const authReducer = (authData = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {...authData,
                userData: {
                    ...action.data,  
                    isAuth: !authData.userData.isAuth,
                }
            }
        }

        case SET_CAPTCHA_URL: {
            return {...authData,
                captchaUrl: action.captchaUrl,
                }
        }

        default: return authData;
    }

}

export const setAuthUserData = (data) => {
    return {
        type: SET_AUTH_USER_DATA, 
        data
    }
}

export const setCaptchaUrl = (captchaUrl) => {
    return {
        type: SET_CAPTCHA_URL, 
        captchaUrl
    }
}

export const getAuthUserDataThunkCreator = () => (dispatch) => {
    return getAuthUserData().then(data => {
        if(data.resultCode === 0){
            dispatch(setAuthUserData(data.data)); 
            
        }
        
    });
}

export const logInThunkCreator = (props) => (dispatch) => {
    logIn(props).then(data => {
        switch(data.resultCode) {
            case 1: {
                return dispatch(stopSubmit('login', {
                        _error: "Wrong email or password ", 
                    }));
            }
            case 10: {
                return getCaptchaUrl().then(data => {
                    dispatch(setCaptchaUrl(data.url));
                })

            }

            default: {
                return getAuthUserData().then(data => {
                    if(data.resultCode === 0){
                        dispatch(setAuthUserData(data.data)); 
                        dispatch(setCaptchaUrl(null));
                    } 
                })
            }
        }
    });
}

export const logOutThunkCreator = () => (dispatch) => {
    logOut().then(data => {
        if(data.resultCode === 0){
            dispatch(setAuthUserData(data.data)); 
        }
    });
}


export default authReducer;