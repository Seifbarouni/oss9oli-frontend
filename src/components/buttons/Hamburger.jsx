import React from 'react'

export const Hamburger = () => {
    return (
        <div className='cursor-pointer'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="1"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
        </div>
    )
}
