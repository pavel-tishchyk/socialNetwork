import React from 'react';
import NavBarItem from './NavBarItem';
import {MenuList} from '@material-ui/core';

const NavBar =({navigationData}) =>{

    let NavBarElements = navigationData.filter(item => item.isAdd)
    .map(item => <NavBarItem 
        key={item.id} 
        path={item.path} 
        icon={item.icon} 
        name={item.name}/>)

    return(
        <MenuList>
            {NavBarElements}
        </MenuList>
    )
}

export default NavBar;