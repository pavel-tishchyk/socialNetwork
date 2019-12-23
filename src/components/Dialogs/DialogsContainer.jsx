import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import Dialogs from './Dialogs';
import {sendMessage, } from '../../redux/message-reducer';
import { messagesPageSelector } from '../../redux/message-selectors';

class DialogsContainer extends React.Component {

    componentDidMount() {
          
    }

    render(){ 
        const { props: { messagesPage, match, sendMessage } } = this;
        return  <Dialogs messagesPage={messagesPage}
            dialogId={match.params.dialogId}
            sendMessage={sendMessage}/> 
 
    }
}

let mapStateToProps = (state) => {
    return {
        messagesPage: messagesPageSelector(state),
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (message, dialogId) => dispatch(sendMessage(message, dialogId)),
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect)(DialogsContainer)
