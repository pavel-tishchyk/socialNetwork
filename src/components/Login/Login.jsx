import React from 'react';
import {Grid } from '@material-ui/core';
import LoginForm from './LoginForm';

const Login = (props) =>{
    const { captchaUrl, logIn } = props;
    const onSubmit = (data) => {
        logIn(data);
    }

    return (
        <Grid>
            <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </Grid>
    );
}

export default Login;
