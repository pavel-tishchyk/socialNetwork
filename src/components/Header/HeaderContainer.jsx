import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import Header from './Header';
import { logOutThunkCreator } from '../../redux/auth-reducer';
import { isAuthSelector, loginSelector } from '../../redux/auth-selectors';


class HeaderContainer extends React.Component {

    componentDidMount() {
    }

    render() {       
        const { props: { isAuth, login, logOut } } = this;
        return <Header isAuth={isAuth} login={login} logOut={logOut}/>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: isAuthSelector(state),
        login: loginSelector(state),
    }

};

let mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch(logOutThunkCreator()),
    }
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps)
	withAuthRedirect)(HeaderContainer);
