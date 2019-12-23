import {getNewsData} from '../API/api';

let SET_NEWS_DATA ="SET-NEWS-DATA";
let CHANGE_COUNTRY_NEWS = 'CHANGE-COUNTRY-NEWS';

let initialState = {
    newsData: null,
    newsCountry: 'us',
};

const newsReducer = (newsPage = initialState, action) => {
    switch (action.type) {
        case SET_NEWS_DATA : {
            return {...newsPage, newsData: action.data}
        }
        case CHANGE_COUNTRY_NEWS:{
            return {...newsPage, newsCountry: action.country }
        }
        default:
            return newsPage;
    }

}
export const setNewsData = (data) => { 
    return {
        type: SET_NEWS_DATA, 
        data
    }
}

export const changeNewsCountry = (country) => { 
    return {
        type: CHANGE_COUNTRY_NEWS, 
        country
    }
}

export const getNewsDataThunkCreator = (country) => (dispatch) => {
    getNewsData(country).then(data => {
        dispatch(setNewsData(data.articles));
    })
}

export default newsReducer;