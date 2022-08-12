import React from 'react'
import hrt from '../assets/svgs/heart.svg'


export const Contributors = ({ bg, children, type, data, img, heart }) => {
    return (
        <div className="relative lg:w-96 md:w-7/12 w-11/12 z-40">
            {heart && <div className='absolute -left-10 -top-10 z-50'>
                <img src={hrt} alt="" />
            </div>}
            <div
                className={`flex flex-col justify-between h-96 border border-black ${bg} text-black rounded-3xl p-6 w-full z-50`}
            >
                <div className="sm:text-3xl text-2xl font-bold mt-4">
                    {children}
                </div>
                <div className="flex sm:flex-row flex-col items-start w-full">
                    <div className="lg:w-1/3 w-1/5 h-full">
                        <div
                            className="rounded-full bg-white h-20 w-20 border border-black"
                        >
                            <img
                                src={img}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="flex flex-col lg:w-2/3 w-4/5">
                        <span className="text-lg font-bold">{type}</span>
                        <span>{data}</span>
                    </div>
                </div>
            </div>
            <div
                className="flex flex-col justify-between h-96 border border-black text-black rounded-3xl p-6 absolute top-2 left-2 -z-10 w-full"
            >
                <div className="text-xl font-bold">
                    {children}
                </div>
                <div className="flex items-start space-x-8">
                    <div
                        className="rounded-full bg-white h-20 w-20 border border-black"
                    ></div>
                    <div className="flex flex-col">
                        <span className="text-lg font-bold invisible">{type}</span>
                        <span>{data}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
