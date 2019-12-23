import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
    loader: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
    },
}));

const PreLoader = () => {
    const classes = useStyles();
    return (
        <div className={classes.loader}>
            <CircularProgress/>
        </div>
    )
}
export default PreLoader;