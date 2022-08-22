import React from 'react'
import spark from '../assets/svgs/spark2.svg'

export const ProfileBanner = ({ shows, episodes, name, img }) => {
    return (
        <div className='border border-black border-l-0 border-t-0 bg-orng4 flex md:flex-row flex-col items-center'>
            <div className='md:border-r border-black p-12  z-50'>
                <div className='border border-black bg-white rounded-full h-44 w-44 relative flex  justify-center'>
                    <div className='border border-black bg-orng rounded-full h-44 w-44 absolute top-1 left-1 -z-10'>
                    </div>
                    <img src={img} alt="" className='rounded-full' />
                </div>
            </div>
            <div className='p-12 flex flex-col'>
                <div className=''>
                    <span className='xl:text-5xl lg:text-3xl text-2xl font-bold relative'>
                        <div className='absolute xl:bottom-4 bottom-2 -right-8'>
                            <img src={spark} alt="" />
                        </div>
                        {name}
                    </span>
                </div>
                <div className='flex space-x-2  text-gray-700 mt-6'>
                    <span>{shows} shows</span><span>-</span><span>{episodes} épisodes </span>
                </div>
                <div className='mt-4 border border-black rounded-xl flex-grow  '>

                    <input type="text" className='h-full w-full rounded-xl bg-asfer3  p-6 placeholder:text-gray-400 focus:outline-none' placeholder='Décrivez-vous au monde..' />
                </div>
            </div>
        </div>
    )
}
