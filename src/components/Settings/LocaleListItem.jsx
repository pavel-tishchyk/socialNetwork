import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import { ListItem, ListItemText } from "@material-ui/core"
import { FormattedMessage } from 'react-intl';

const styles = theme => ({
    
});

class LocaleListItem extends React.Component {
    componentDidMount() {

    }

    render () {
        let { props: { locale, changeLocale } } = this;
        return (
            <ListItem onClick={() => changeLocale(locale.locale)}>
                <ListItemText>
                    <FormattedMessage id={locale.name}/>
                </ListItemText>
            </ListItem>
        )
    }
}

export default withStyles(styles)(LocaleListItem);