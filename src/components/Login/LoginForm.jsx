import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Grid, Typography, Button} from '@material-ui/core';
import { renderTextField} from './../common/renderTextField';
import { renderCheckbox} from './../common/renderCheckbox';
import { required, email, aol } from './../../utils/validators';
import { FormattedMessage } from 'react-intl';


const useStyles = makeStyles(theme => ({
    form: {
        width: '35%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: theme.spacing(5),
    },
    input: {
        width: '100%',
        margin: theme.spacing(3, 0),
    },
    '@keyframes example': {
        '0%': {opacity: '0'},
        '1%': {opacity: '1'},
        '99%': {opacity: '1'},
        '100%': {opacity: '0'},
    },
    test: {
        opacity: '0',
        animationName: '$example',
        animationDuration: '4s',
        // animationIterationCount: 'infinite',
    }, 
    captchaInput: {
        width: '45%',
        margin: theme.spacing(3, 0),
    },
    column: {
        flexDirection: 'column',
    },
    bold: {
        fontWeight: 'bold',
    }
}));

const LoginForm = (props) =>{
    const classes = useStyles();
    const { captchaUrl, handleSubmit, reset } = props;
    return (
        <Paper 
            component="form" 
            className={classes.form} 
            noValidate autoComplete="on"
            onSubmit={handleSubmit}>
            <Grid className={classes.column} alignItems='center' container justify="center">
                <Typography> Test Account</Typography>
                <Typography className={classes.bold}> Login:  free@samuraijs.com</Typography>
                <Typography className={classes.bold}> Password: free</Typography>
            </Grid>
            <Grid container justify="center" className={props.error && classes.test}>
                <Typography color="error">{props.error}</Typography>
            </Grid>
            <Field 
                component={renderTextField}
                name="email"
                className={classes.input} 
                id="outlined-email" 
                label={
                    <FormattedMessage id="login"/>
                }  
                variant="outlined" 
                validate={[required, email, aol]}/>
            <Field 
                component={renderTextField} 
                name="password"
                className={classes.input} 
                id="outlined-password" 
                label={
                    <FormattedMessage id="password"/>
                }
                type="password" 
                variant="outlined"
                validate={required}/>
            <Grid item xs={12}>
                <Field 
                    component={renderCheckbox} 
                    name="rememberMe" 
                    label={
                        <FormattedMessage id="rememberMe"/>
                    }/>
            </Grid>
            {captchaUrl && <Grid container justify="center" className={classes.captcha}>
                <Grid container justify="center">
                    <img src={props.captchaUrl} alt="Captcha"/>
                </Grid>
                <Field 
                    component={renderTextField} 
                    name="captcha"
                    className={classes.captchaInput} 
                    id="outlined-captcha" 
                    label={
                        <FormattedMessage id="captcha"/>
                    }
                    type="text" 
                    variant="outlined"
                    autoComplete="off"
                    validate={required}/>
            </Grid>}
            <Grid container justify='center'>
                <Button variant="contained" color="primary" onClick={() => {handleSubmit()}} >
                    <FormattedMessage id="login"/>
                </Button>
            </Grid>
        </Paper>
    );
}

export default reduxForm({form: 'login'})(LoginForm);
