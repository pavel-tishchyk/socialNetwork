import React from 'react';

const User = (props) => {;
    // console.log(props);
    let {user} = props;
    return (
        <div>
            {user.name}
        </div>
    )
}

export default User;