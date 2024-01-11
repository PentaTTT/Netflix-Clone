import React, { useEffect } from 'react'
import { useState } from 'react'
import logo from '../public/images/logo.png'
import avaProfile from '../public/images/default-blue.png'
import NavbarItem from './NavbarItem'
import { BsBell, BsChevronDown, BsSearch } from 'react-icons/bs'
import MobileMenu from './MobileMenu'
import ProfileMenu from './ProfileMenu'

const TOP_OFFSET = 66;

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [showProfileMenu, setShowProfileMenu] = useState(false)
    const [showBackground, setShowBackground] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true)
            } else {
                setShowBackground(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <nav className='w-full fixed z-[99]'>
            <div
                className={`
                    px-4
                    md:px-16
                    py-6
                    flex
                    flex-row
                    items-center
                    transition
                    duration-500
                    ${showBackground ?
                        'bg-zinc-900 bg-opacity-90'
                        :
                        ''
                    }
               
            `}>
                <img className='h-4 lg:h-7' src={logo} alt='logo' />

                {/* --left-content */}
                <div
                    className='
                        hidden
                        lg:flex
                        flex-row
                        ml-8
                        gap-7
                    '
                >
                    <NavbarItem label={'Home'} />
                    <NavbarItem label={'Series'} />
                    <NavbarItem label={'Films'} />
                    <NavbarItem label={'New & Popular'} />
                    <NavbarItem label={'My List'} />
                    <NavbarItem label={'Browse by'} />
                </div>

                {/* --menu-- */}
                <div
                    className='
                        lg:hidden
                        flex
                        flex-row
                        items-center
                        gap-2
                        ml-8
                        cursor-pointer
                        relative
                        hover:text-gray-300
                    '
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                >
                    <p className='text-white text-sm'>Browse</p>
                    <BsChevronDown className={`text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
                    <MobileMenu visible={showMobileMenu} />
                </div>

                {/* --right-content-- */}
                <div className='flex flex-row gap-7 items-center ml-auto text-sm lg:text-lg'>
                    <div className='text-gray-200 hover:text-gray-300 cursor-pointer'>
                        <BsSearch />
                    </div>
                    <div className='text-gray-200 hover:text-gray-300 cursor-pointer'>
                        <BsBell />
                    </div>
                    <div className='flex flex-row items-center gap-2 cursor-pointer relative'
                        onClick={() => setShowProfileMenu(!showProfileMenu)}
                    >
                        <div className='w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden'>
                            <img src={avaProfile} alt='avatar profile' />
                        </div>
                        <BsChevronDown className={`text-white transition ${showProfileMenu ? 'rotate-180' : 'rotate-0'}`} />
                        <ProfileMenu visible={showProfileMenu} />
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar