import React from 'react';
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import Grid from '@material-ui/core/Grid';

const Profile = (props) => {
    return ( 
    <Grid>
        <ProfileInfo  
            userData={props.userData} setStatus={props.setStatus}/>

        <Posts  
            postsData={props.postsData} 
            addPost={props.addPost}/>
    </Grid>
    )
}
export default Profile;