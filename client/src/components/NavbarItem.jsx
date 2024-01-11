import React from 'react'

const NavbarItem = (props) => {
    const { label } = props
    return (
        <div className='
            text-white cursor-pointer transition hover:text-gray-300
        '>
            {label}
        </div>
    )
}

export default NavbarItem