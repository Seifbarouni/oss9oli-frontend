import React from 'react'
import person from '../assets/svgs/person.svg'

export const ChannelBanner = ({ name, img }) => {
    return (
        <div className='p-6 bg-contain h-64 px-16 z-30 relative bg-opacity-95'
            style={
                {
                    backgroundImage: `url(${img})`,
                }
            }
        >
            <div className='absolute flex -bottom-24'>
                <div className='border border-black bg-white rounded-full h-52 w-52 relative flex  justify-center items-center'>
                    <div className='border border-black bg-orng rounded-full h-52 w-52 absolute top-1 left-1 -z-20'>
                    </div>
                    <img src={person} alt="" className='h-24 w-24' />
                </div>
                <div className='flex flex-col ml-28 mt-11'>
                    <span className='text-lg text-gray-800'>Chaine</span>
                    <span className='text-4xl font-black'>{name}</span>
                </div>
            </div>


        </div>
    )
}
