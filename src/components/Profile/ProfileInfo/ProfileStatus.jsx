import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, TextField, Button, IconButton, Typography, Paper } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';


const styles = theme => ({
    wrapper: {
        position: 'relative',
    },
    form: {
        position: 'absolute',
        width: '45%',
        padding: theme.spacing(5),
        zIndex: 1,

    },
    input: {
        width: '100%',
        margin: theme.spacing(3, 0),
    },
});

const ProfileStatus = (props) => {
    const {classes, status ,setStatus} = props;
    const [editMode, toggleEditMode] = React.useState(false);
    const [changedStatus, updateStatus] = React.useState(status)
        return (
            <div className={classes.wrapper}>
                <Grid container alignItems='center' >
                    <Typography variant='h6' >{status}</Typography>
                    <IconButton onClick={() => toggleEditMode(!editMode)}>
                        <CreateIcon />
                    </IconButton>
                </Grid>
                {editMode && 
                <Paper component="form" className={classes.form} noValidate autoComplete="off">
                    <TextField
                        value={changedStatus}
                        onChange={(e) => updateStatus(e.target.value)}
                        autoFocus={true} 
                        className={classes.input} 
                        id="outlined-basic" 
                        variant="outlined"/>

                    <Grid container justify='space-between'>
                        <Button variant="contained" color="secondary" onClick={() => toggleEditMode(!editMode)}>
                            Cancel
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => {setStatus(changedStatus); toggleEditMode(!editMode)}}>
                            Change
                        </Button>
                    </Grid>
                </Paper>}
            </div>
        )
}

export default withStyles(styles)(ProfileStatus);