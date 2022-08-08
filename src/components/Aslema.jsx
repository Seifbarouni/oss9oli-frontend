import React from 'react'
import group_blob from '../assets/svgs/group_blob.svg'
import line from '../assets/svgs/line.svg'
import two_stars from '../assets/svgs/two_stars.svg'

export const Aslema = () => {
    return (
        <div className='flex justify-center items-center relative'>
            <div className='text-9xl header z-50 relative'>
                <div className='absolute -right-8 -top-10'>
                    <img src={two_stars} alt="" />
                </div>
                ASLEMA
            </div>
            <div className='absolute h-full w-full'>
                <img src={group_blob} alt="" />
            </div>
            <div className='absolute left-0'>
                <img src={line} alt="" />
            </div>

        </div>
    )
}
