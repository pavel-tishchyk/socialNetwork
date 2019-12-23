import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from "react-redux";
import {withAuthRedirect} from './../../hoc/withAuthRedirect';
import Search from "./Search";
import PreLoader from './../common/PreLoader'
import {
    follow,
    setCurrentPage, 
    unfollow,
    getUsersThunkCreator, } from "../../redux/search-reducer";
import { 
    usersDataSelector,  
    pageSizeSelector, 
    totalUsersCountSelector, 
    currentPageSelector, 
    isLoadingSelector } from '../../redux/search-selectors';

class UsersContainer extends Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    giveNewPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        const { 
            props: { 
                isLoading, totalUsersCount, pageSize, 
                currentPage, usersData, follow, unfollow 
            }, 
            giveNewPage } = this;
        return isLoading 
            ? <PreLoader />
            : <Search 
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                usersData={usersData}
                follow={follow}
                unfollow={unfollow}
                giveNewPage={giveNewPage}/>
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: usersDataSelector(state),
        pageSize: pageSizeSelector(state),
        totalUsersCount: totalUsersCountSelector(state),
        currentPage: currentPageSelector(state),
        isLoading: isLoadingSelector(state),
    }

};

let mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (pageNumber, pageSize) => dispatch(getUsersThunkCreator(pageNumber, pageSize)),
        setCurrentPage: (pageNumber) => dispatch(setCurrentPage(pageNumber)),
        follow: (userId) => dispatch(follow(userId)),
        unfollow: (userId) => dispatch(unfollow(userId)),

    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps), 
    withAuthRedirect)(UsersContainer);
