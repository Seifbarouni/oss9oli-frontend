import React from 'react'
import red_heart from '../assets/svgs/red_heart.svg'

export const Tags = () => {
    return (
        <div className='z-50 xl:w-1/2 w-full relative'>
            <div className='border border-black bg-white p-6 flex flex-col rounded-3xl h-96 w-full relative'>
                <div className='absolute -top-12 sm:-right-6 -right-2'>
                    <img src={red_heart} alt="" />
                </div>
                <div className='absolute bottom-4 right-8'>
                    <span className='text-xl text-gray-400 underline underline-offset-8 hover:text-gray-600 cursor-pointer'>Voir tous les tags {'>'}  </span>
                </div>

                <span className='text-4xl'>Tags suivis</span>
                <div className='mt-12 flex p-2 flex-wrap lg:flex-col overflow-scroll'>
                    <div className='p-3'>
                        <span className='bg-akhdher px-8 py-3 rounded-full border border-black text-white text-lg flex items-center justify-between space-x-4 w-44'>
                            <span>Féminité</span><span className='text-base'>x</span>
                        </span>
                    </div>
                    <div className='p-3'>
                        <span className='bg-asfer2 px-8 py-3 w-44 rounded-full border border-black text-white text-lg flex items-center justify-between space-x-4'>
                            <span>Culture</span><span className='text-base'>x</span>
                        </span>
                    </div>
                    <div className='p-3'>
                        <span className='bg-azreg2 px-8 py-3 rounded-full border border-black text-white text-lg flex items-center justify-between space-x-4 w-44'>
                            <span>Art</span><span className='text-base'>x</span>
                        </span>
                    </div>
                    <div className='p-3'>
                        <span className='bg-orng2 px-8 py-3 rounded-full border border-black text-white text-lg flex items-center justify-between space-x-4 w-44'>
                            <span>Société</span><span className='text-base'>x</span>
                        </span>
                    </div>
                    <div className='p-3'>
                        <span className='bg-akhdher2 px-8 py-3 rounded-full border border-black text-white text-lg flex items-center justify-between space-x-4 w-44'>
                            <span>Economie</span><span className='text-base'>x</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className='absolute h-96 w-full border border-black rounded-3xl top-1 left-1 -z-10'>
            </div>
        </div>
    )
}
