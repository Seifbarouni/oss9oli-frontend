import { XIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Hamburger } from '../buttons/Hamburger'
import black_logo from '../../assets/svgs/black_logo.svg'

export const Navbar = () => {
    const navigate = useNavigate()
    //const [isOpen, setIsOpen] = useState(false)
    return (
        <div style={{
            position: "fixed",
            top: 0,
            width: "100%",
            backgroundColor: "white",
            zIndex: 100
        }}>
        <nav
            className="flex items-center justify-between p-6 z-50 w-full xl:px-12"
            
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
            <div className='flex justify-center'>
                <div
                    onClick={() => window.scrollTo(0, 0)}
                >
                    <img src={black_logo} alt="" />
                </div>
            </div>
            <a href="#footer" className=" hover:underline text-lg">CONTACT</a>
        </nav>
                        <div className="border-b border-black z-50 w-full"></div>
        </div>

    )
}
