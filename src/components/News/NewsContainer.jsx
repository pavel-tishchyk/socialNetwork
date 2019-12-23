import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import News from './News';
import PreLoader from './../common/PreLoader';
import { changeNewsCountry, getNewsDataThunkCreator } from '../../redux/news-reducer';
import { isAuthSelector } from '../../redux/auth-selectors';
import { newsDataSelector, newsCountrySelector } from '../../redux/news-selectors';

class NewsContainer extends React.Component {

    componentDidMount() {
        this.props.getNewsData();
    }

    changeNewsCountry = (country)=>{
        this.props.changeNewsCountry(country);
        this.props.getNewsData(country);
    }

    render(){
        const { props: { newsData, changeNewsCountry } } = this;
        return newsData 
            ? <News changeNewsCountry={changeNewsCountry} 
                newsData ={newsData}/>
            : <PreLoader/>
    }
}
let mapStateToProps =(state) =>{
    return {
        isAuth: isAuthSelector(state),
        newsData: newsDataSelector(state),
        newsCountry: newsCountrySelector(state),
    }

};

let mapDispatchToProps = (dispatch) => {
    return {
        getNewsData: (country) => dispatch(getNewsDataThunkCreator(country)),
        changeNewsCounty: (country) => dispatch(changeNewsCountry(country)),
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(NewsContainer);
