import React from 'react'

export const InfoCard = ({ bg, img, children }) => {
    return (
        <div
            className={`flex items-center justify-evenly p-6 ${bg} rounded-3xl`}
        >
            <div className="w-1/4 flex justify-center">
                <img src={img} alt="" />
            </div>
            <div className="text-white lg:text-xl ml-12 font-bold w-3/4">
                {children}
            </div>
        </div>
    )
}
