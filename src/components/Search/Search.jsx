import React from 'react';
import User from './User'
import { Button } from '@material-ui/core';

const Search = (props) => {;
    // console.log(props);
    let { currentPage, usersData, giveNewPage } = props;
    let searchElement = usersData.map(user => <User user={user}/>);

    return (
        <div>
            {searchElement}
            <div >
                <Button
                variant="contained"
                color="primary"
                onClick={() => {giveNewPage(currentPage+1)}}
                >
                Load more
                </Button>
            </div>
        </div>
        
    )
}

export default Search;