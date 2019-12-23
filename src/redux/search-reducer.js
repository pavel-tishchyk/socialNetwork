import {getUsers} from "../API/api";

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET-STATE-USERS';
let SET_STATE_CURRENT_PAGE ='SET-STATE-CURRENT-PAGE';
let SET_USERS_COUNT = 'SET-USERS-COUNT';
let TOGGLE_IS_LOADING = 'TOGGLE-IS-LOADING';

let initialState = {
    usersData: [],
    pageSize:5,
    totalUsersCount: 0,
    currentPage:1,
    isLoading: false,
};


const searhReducer = (searchPage = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...searchPage,
                usersData: searchPage.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW :
            return {
                ...searchPage,
                usersData: searchPage.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS : {
            return {...searchPage, 
                usersData: [...searchPage.usersData, ...action.users]                
            }
        }
        case SET_STATE_CURRENT_PAGE:{
            return {...searchPage, 
                currentPage: action.currentPage
            }
        }
        case  SET_USERS_COUNT:{
            return {...searchPage, 
                totalUsersCount: action.totalUsersCount 
            }
        }
        case  TOGGLE_IS_LOADING:{
            return {...searchPage, 
                isLoading: action.isLoading
            }
        }
        default:
            return searchPage;
    }

}
export const follow = (userId) => {
    return {
        type:FOLLOW, 
        userId
    }
}

export const unfollow = (userId) => {
    return {
        type:UNFOLLOW, 
        userId
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS, 
        users
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type:SET_STATE_CURRENT_PAGE, 
        currentPage 
    }
}

export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type:SET_USERS_COUNT, 
        totalUsersCount 
    }
}

export const setIsLoading = (isLoading) => {
    return {
        type:TOGGLE_IS_LOADING, 
        isLoading 
    }
}

export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {
    dispatch(setIsLoading(true));
    getUsers(currentPage, pageSize).then(data => {
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    });
    dispatch(setIsLoading(false));
}



export default searhReducer;