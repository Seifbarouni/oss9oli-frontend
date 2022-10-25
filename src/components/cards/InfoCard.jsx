import React from 'react'

export const InfoCard = ({ bg, img, children }) => {
    return (
        <div
            className={`flex items-center justify-evenly p-3 ${bg} rounded-3xl cursor-pointer`}
        >
            <div className=" flex justify-center h-20 w-20">
                <img src={img} alt="" />
            </div>
            <div className="text-white lg:text-xl ml-12 font-bold w-3/4">
                {children}
            </div>
        </div>
    )
}
