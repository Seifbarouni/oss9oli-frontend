import React from 'react'
import { Auth } from '../components/Auth'
import orange_blob2 from '../assets/svgs/orange_blob2.svg'

export const AuthPage = () => {
    return (
        <div className='min-h-screen w-full flex justify-center items-center relative z-50'>
            <Auth />
            <div className='absolute -z-20 bottom-0 w-full'>
                <img src={orange_blob2} alt="" />
            </div>
        </div>
    )
}
