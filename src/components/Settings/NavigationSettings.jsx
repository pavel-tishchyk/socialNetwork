import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { Grid, FormControlLabel, Checkbox, Button } from "@material-ui/core"

const styles = theme => ({
    
});

class NavigationSettings extends React.Component {
    state = {
        customNavigation: [...this.props.navigationData],
    }

    componentDidMount() {

    }

    toggleIsAdd = (id) => {
        this.setState({
            customNavigation: this.state.customNavigation.map(item => {
                return item.id !== id ? item : {...item, isAdd: !item.isAdd}
                }),
        })
    }

    render () {
        let {props:{ changeNavigation }, state: { customNavigation }, toggleIsAdd} = this;
    
        let test = customNavigation.map(item => {
            return <FormControlLabel
                        key={item.id}
                        control={
                        <Checkbox
                            checked={item.isAdd}
                            onChange={() => toggleIsAdd(item.id)}
                            color="primary"
                        />
                        }
                        label={item.name}
                    />
        })

        return (
            <Grid item xs={12}>
                {test}
                <Button variant="contained" color="primary" onClick={() => changeNavigation(customNavigation)} >Save</Button>
            </Grid>
        )
    }
}

export default withStyles(styles)(NavigationSettings);