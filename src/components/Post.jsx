import React from 'react'

export const Post = ({ name, data }) => {
    return (
        <div className='flex xl:w-2/3'>
            <div className='relative z-50'>
                <div className='h-20 w-20 border border-black rounded-full bg-white flex items-center justify-center'>
                    <img src="https://avatars.dicebear.com/api/croodles/BRRRR.svg" alt="" />
                </div>
                <div className='h-20 w-20 absolute rounded-full border border-black top-1 left-1 -z-10'>

                </div>
            </div>
            <div className='flex flex-col w-full pl-8'>
                <span className='leading-tight'>
                    {name} <br />
                    <span className='text-gray-500 text-sm'>
                        a publié une pensée
                    </span>
                </span>
                <span className='lg:text-xl text-lg p-6 flex justify-center h-44 overflow-y-scroll'>
                    <span>
                        {data}
                    </span>
                </span>
                <div className='flex items-center w-full p-1 rounded-3xl border border-black bg-white mt-2'>
                    <div className='h-12 w-12 border border-black rounded-full bg-white flex items-center justify-center'>
                        <img src="https://avatars.dicebear.com/api/croodles/yo.svg" alt="" />
                    </div>
                    <input type="text" placeholder="Qu'est ce que vous en pensez?" className='w-full focus:outline-none pl-4 placeholder:text-gris' />
                </div>
            </div>

        </div>
    )
}
