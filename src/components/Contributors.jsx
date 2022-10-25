import React from 'react'
import hrt from '../assets/svgs/heart.svg'


export const Contributors = ({ bg, children, num, img, heart }) => {
    return (
        <div
            className="relative w-[340px]  z-40"

        >
            {heart && <div className='absolute -left-10 -top-10 z-50'>
                <img src={hrt} alt="" />
            </div>}
            <div className={`sm:text-3xl text-2xl  header text-white  absolute
            [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)]
                ${num === "1" && "bottom-2 -left-6"}
                ${num === "2" && "top-1 -left-6"}
                ${num === "3" && "bottom-12 -right-20"}
                `}>
                {children}
            </div>
            <div
                className={`flex flex-col justify-between h-96 border border-black  text-black  p-6 w-full z-50 bg-fit  bg-no-repeat
                
                ${num === "1" && "rounded-tl-[200px]"}
                ${num === "2" && "rounded-br-[200px]"}
                ${num === "3" && "rounded-bl-[200px]"}
                `}
                style={
                    {
                        backgroundImage: `url(${img})`,
                    }
                }
            >


            </div>
            <div
                className={`flex flex-col justify-between h-96 border border-black ${bg} text-black  p-6 absolute   -z-10 w-full
                ${num === "1" && "rounded-tl-[200px] top-2 -left-2"}
                ${num === "2" && "rounded-br-[200px] top-2 right-2"}
                ${num === "3" && "rounded-bl-[200px] top-2 right-2"}

                
                `}
            >
                <div className="text-xl font-bold invisible">
                    {children}
                </div>
                <div className="flex items-start space-x-8 invisible">
                    <div
                        className="rounded-full bg-white h-20 w-20 border border-black"
                    ></div>
                </div>
            </div>
        </div>
    )
}
