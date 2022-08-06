import React from 'react'
import { Hamburger } from './buttons/Hamburger'

export const Navbar = () => {
    return (
        <nav
            className="flex items-center justify-between p-6 z-50 w-full lg:px-44 px-12"
        >
            <Hamburger />
            <div className="cursor-pointer hover:underline">CONTACT</div>
        </nav>
    )
}
