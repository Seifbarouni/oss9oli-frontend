import { XIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { Hamburger } from '../buttons/Hamburger'

export const Navbar = () => {
    //const [isOpen, setIsOpen] = useState(false)
    return (
        <nav
            className="flex items-center justify-between p-4 z-50 w-full xl:px-12"
        >
            <div className='flex items-center space-x-8'>
                {/* {!isOpen && <div onClick={() => setIsOpen(true)}>
                    <Hamburger />
                </div>} */}
                {/* {isOpen && <div onClick={() => setIsOpen(false)}>
                    <XIcon className='h-10 w-10 text-gray-700' />
                </div>} */}
                <div className='sm:flex hidden space-x-8'>
                    <a href='#join' className=" hover:underline text-lg">REJOINDRE</a>
                    <a href='#values' className=" hover:underline text-lg">NOS VALEURS</a>
                </div>
            </div>
            <a href="#footer" className=" hover:underline text-lg">CONTACT</a>
        </nav>
    )
}
