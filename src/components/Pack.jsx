import React from 'react'
import { JoinButton } from './buttons/JoinButton'

export const Pack = ({ children, color, price, buttonText, title, desc, more }) => {
    return (
        <div className='flex flex-col bg-white rounded-[50px] w-96 border border-black'>
            <div className={`flex flex-col bg-${color} text-white rounded-t-[50px] p-6 items-center text-center h-36 border-b border-black`}>
                <span className='font-bold text-2xl'>{title}</span>
                <span className='mt-4'>{desc}</span>
            </div>
            <div className='flex flex-col items-center '>
                <div className='flex pt-8'>
                    <span className='text-6xl font-bold'>{price}</span>
                    <span className='font-bold'>dt</span>
                </div>
                <div className='flex flex-col p-12 text-center h-72'>
                    {children}
                </div>
                <div className={'text-xs pb-2'}>
                    {more}
                    {!more && <span className='invisible'>text</span>}
                </div>
                <div className='pb-12'>
                    <JoinButton
                        cd1={"relative z-40"}
                        cd2={`text-white bg-${color} rounded-full py-2 px-12 text-center cursor-pointer border border-black transition duration-150 hover:-translate-x-1 hover:translate-y-1 text-3xl -z-20`}
                        cd3={"border border-black rounded-full py-3.5 px-12 absolute right-1 top-1 -z-30 w-full"}
                        data={buttonText}
                        to={'/auth'}
                    />
                </div>
            </div>
        </div>
    )
}
