import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import {colors, Grid, Paper, FormControlLabel, Switch} from "@material-ui/core"

const styles = theme => ({
    wrapper: {
        display: 'flex', 
        overflowX: 'auto',
        '&::-webkit-scrollbar': {
            height: '10px',
            width: '6px',
            background: '#fff',
            '-webkit-border-radius': `4px`,
        },
        '&::-webkit-scrollbar-thumb': {
            background: theme.palette.primary.main,
            '-webkit-border-radius': `4px`,
        },
         
        '&::-webkit-scrollbar-corner': {
            background: '#fff',
        },
    },
    colors: {
        margin: theme.spacing(2, 2),
    },
    color: {
        '&:first-child': {
            borderTop: '1px solid',
            borderTopLeftRadius: theme.spacing(1),
            borderTopRightRadius: theme.spacing(1),

        },
        '&:last-child': {
            borderBottom: '1px solid',
            borderBottomLeftRadius: theme.spacing(1),
            borderBottomRightRadius: theme.spacing(1),
        },
        width: theme.spacing(25),
        padding: theme.spacing(3, 5),
        borderRight: '1px solid',
        borderLeft: '1px solid',
        borderColor: theme.palette.primary.dark,
        textAlign: 'center',
        cursor: 'pointer',
    },
    
});

class ThemeSettings extends React.Component {    
    state = {
        isShowTints: false,
    };

    toggleShowTints = () => {
        this.setState({
            isShowTints: !this.state.isShowTints,
        });
    };
    
    render () {
        const { props: { classes, changeThemeColor }, state: { isShowTints }, toggleShowTints } = this;

        let [common, ...currentColors] = Object.keys(colors);
        console.log(common);
        const flag = isShowTints ? [0, 10] : [5, 6, true];
        let palette = currentColors.map(color => 
            <Paper key={color} className={classes.colors}>{
                    Object.keys(colors[color]).slice(flag[0], flag[1]).map(tint => 
                        <div
                            key={colors[color][tint]} 
                            className={classes.color} 
                            style={{backgroundColor: colors[color][tint]}}
                            onClick={() => changeThemeColor(colors[color][tint])}
                        >{flag[2] ? color.toUpperCase() : colors[color][tint].toUpperCase()}</div>
                    ) 
            }</Paper>);

        return (
            <Grid item xs={12}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={isShowTints}
                            onChange={toggleShowTints}
                            color="primary"
                        />
                    }   
                    label="Show Tints"
                />
                <Paper className={classes.wrapper}>{palette}</Paper>
            </Grid>
        );
    }
}

export default withStyles(styles)(ThemeSettings);