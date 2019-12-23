import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Login from './Login';
import { logInThunkCreator } from './../../redux/auth-reducer';
import { isAuthSelector, captchaUrlSelector } from '../../redux/auth-selectors';


class LoginContainer extends React.Component {

    componentDidMount() {
        
    }

    render() { 
        const { props: { isAuth, captchaUrl, logIn } } = this;
        if(isAuth) return <Redirect to="/profile"/>     
        return <Login logIn={logIn} captchaUrl={captchaUrl} />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: isAuthSelector(state),
        captchaUrl: captchaUrlSelector(state), 
    }

};

let mapDispatchToProps = (dispatch) => {
    return {
        logIn: (data) => dispatch(logInThunkCreator(data)),
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
