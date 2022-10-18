import React from 'react'
import person from '../assets/svgs/person.svg'

export const ChannelBanner = ({ name, img, desc }) => {
    return (
        <div className='p-6 bg-cover bg-center h-96 px-16 z-30 relative flex'
            style={
                {
                    backgroundImage: `url(data:${img?.contentType};base64,${img?.data?.toString('base64')})`,
                }
            }
        >
            <div className='bg-akhdher  absolute opacity-30 z-30 top-0 left-0 h-96 w-full'>
            </div>
            <div className='mt-56 flex sm:flex-row flex-col top-64  h-96 z-50 '>
                <div className=''>
                    <div className='border border-black bg-white rounded-full h-52 w-52 relative flex  justify-center items-center'>
                        <div className='border border-black bg-orng rounded-full h-52 w-52 absolute top-1 left-1 -z-20'>
                        </div>
                        <img src={person} alt="" className='h-24 w-24' />
                    </div>
                </div>
                <div className='flex flex-col sm:ml-28 ml-0 mt-11 space-y-2'>
                    <span className='text-lg '>Chaine</span>
                    <span className='text-5xl font-black '>{name}</span>
                    <span className='text-lg '>1 podcasts - 8 sons </span>
                    <span className='w-5/6 overflow-y-scroll h-44'>
                        {desc}
                    </span>
                </div>
            </div>


        </div>
    )
}
