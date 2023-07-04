import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ()=>{
    return (
        <React.Fragment>
            <NavLink to='/' activeClassName="active-navigation">Home</NavLink>
            {/* <NavLink to='/experience' activeStyle={{color:'red'}}>Experience<s/NavLink> */}
            <NavLink to='/projects' activeClassName="active-navigation">Projects</NavLink>
        </React.Fragment>
    )
}
export default Navigation;
