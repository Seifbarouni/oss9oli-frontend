import React from 'react'
import logo from '../assets/svgs/logo.svg'

export const Footer = () => {
    return (
        <div className="bg-white flex flex-col justify-start p-12 lg:px-64">
            <img src={logo} alt="" className="h-44 w-44" />
            <div className="flex flex-col mt-28">
                <span>Tous droits réservés</span>
                <span>2022</span>
            </div>
        </div>
    )
}
