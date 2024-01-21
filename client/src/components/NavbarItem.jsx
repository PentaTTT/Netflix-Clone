import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarItem = (props) => {
    const { label, link } = props
    return (
        <NavLink to={link}
            className={({ isActive }) => (isActive ? 'font-bold' : '')}
        >
            <div className='
            text-white cursor-pointer transition hover:text-gray-300
            '>
                {label}
            </div>
        </NavLink>
    )
}

export default NavbarItem