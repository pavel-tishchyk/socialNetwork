import React from 'react';

import LocaleListItem from './LocaleListItem';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button, List, ListItem, Paper } from "@material-ui/core"
import { FormattedMessage } from 'react-intl';

const styles = theme => ({
    
});

class LocaleSettings extends React.Component {
    state = {
        // customNavigation: [...this.props.navigationData],
        isOpen: false,

    }

    componentDidMount() {

    }

    hangleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }

    render () {
        let { props: { localeData, changeLocale}, state: { isOpen }, hangleToggle } = this;
        console.log(localeData)

        let listElements = localeData.map( locale => <LocaleListItem key={locale.id} locale={locale} changeLocale={changeLocale}/>)

        return (
            <Grid item xs={1}>
                <Button 
                    variant="contained" 
                    color="primary"
                    onClick={hangleToggle}>
                        <FormattedMessage id="language"/>
                </Button>
                {
                isOpen ? 
                <Paper>
                    <List>
                        {listElements}
                    </List>
                </Paper>
                :
                undefined
                }
            </Grid>
        )
    }
}

export default withStyles(styles)(LocaleSettings);