import {getUserData, getUserStatus, updateUserStatus} from './../API/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const UPDATE_USER_STATUS = 'UPDATE-USER-STATUS';

let initialState = {
    postsData: [
        {id: 1, message: 'tired', likesCount: '2'},
        {id: 2, message: 'havesadssdsdasdsasassad no time', likesCount: '2'},
        {id: 3, message: 'have no money', likesCount: '2'},
        {id: 4, message: 'buy new vape', likesCount: '2'},
        {id: 5, message: 'yo', likesCount: '2'},
    ],
    userData: null,
};

const profileReducer = (profilePage = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return  {
                ...profilePage,
                postsData:[...profilePage.postsData, {
                    id: profilePage.postsData.length + 1,
                    message: action.text,
                    likesCount: 0
                }],
            }
        }

        case  SET_USER_PROFILE: {
            return {
                ...profilePage,
                userData: action.data,
            }
        }

        case UPDATE_USER_STATUS: {
            return {
                ...profilePage,
                userData: {
                    ...profilePage.userData,
                    status: action.status,
                }
            }
        }

        default: return profilePage;
    }
}
export const addPost = (text) => {
    return {
        type: ADD_POST,
        text
    }
};

export const setUserProfile = (data) => {
    return { 
        type: SET_USER_PROFILE, 
        data 
    }
}

export const setStatus = (status) => {
    return { 
        type: UPDATE_USER_STATUS, 
        status 
    }
}

export const getUserDataThunkCreator = (userId) => (dispatch) => {
    getUserData(userId).then(data => {
        getUserStatus(userId).then(status => 
            dispatch(setUserProfile({...data, status})));
    })
    
}

export const setStatusThunkCreator = (status) => (dispatch) => {
    updateUserStatus(status).then(data => {
            if(data.resultCode === 0) dispatch(setStatus(status));
    })
    
}

export default profileReducer;
