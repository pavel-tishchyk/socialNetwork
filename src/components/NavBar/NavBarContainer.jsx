import React from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import { isAuthSelector } from '../../redux/auth-selectors';
import { navigationDataSelector } from '../../redux/settings-selectors';

class NavBarContainer extends React.Component {

    componentDidMount() {
        
    }

    render() { 
        const { props: { isAuth, navigationData } } = this;
        return isAuth &&  <NavBar navigationData={navigationData} />
    }
}

let mapStateToProps = (state) => {
    return {
        navigationData: navigationDataSelector(state),
        isAuth: isAuthSelector(state),  
    }
};

let mapDispatchToProps = (dispatch) => {
    return {    

    }
};


export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);