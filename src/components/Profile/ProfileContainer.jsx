import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import Profile from './Profile';
import PreLoader from './../common/PreLoader';
import { getUserDataThunkCreator, setStatusThunkCreator, addPost } from '../../redux/profile-reducer';
import { authIdSelector } from '../../redux/auth-selectors';
import { userDataSelector, postsDataSelector } from '../../redux/profile-selectors';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) userId = this.props.authId;
        this.props.getUserData(userId)
    }

    render(){
        const { props: { userData, postsData, addPost, setStatus } } = this;
        return userData 
            ? <Profile userData={userData}
                postsData={postsData}
                addPost={addPost}
                setStatus={setStatus}/> 
            : <PreLoader/> 
    }
}

let mapStateToProps = (state) => {
    return {
        authId: authIdSelector(state),
        userData: userDataSelector(state),
        postsData: postsDataSelector(state),
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getUserData: (userId) => dispatch(getUserDataThunkCreator(userId)),
        setStatus: (status) => dispatch(setStatusThunkCreator(status)),
        addPost: (text) => dispatch(addPost(text)),        
    }
};

 export default compose(
    connect(mapStateToProps, mapDispatchToProps), 
    withRouter, 
    withAuthRedirect)(ProfileContainer);