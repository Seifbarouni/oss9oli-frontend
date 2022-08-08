import React from 'react'
import { Events } from '../components/Events'
import { AuthenticatedNavbar } from '../components/nav/AuthenticatedNavbar'
import { Sidebar } from '../components/nav/Sidebar'
import { Seperator } from '../components/Seperator'
import { Sujet } from '../components/Sujet'

export const CommunityPage = () => {
    return (
        <div className='flex flex-col'>
            <AuthenticatedNavbar />
            <Seperator mt={0} />
            <div className='flex gap-4'>
                <div className='md:flex hidden'>
                    <Sidebar />
                </div>
                <div className='p-16  flex-grow flex flex-col'>
                    <div className='flex flex-col space-y-2'>
                        <span className='header text-5xl'>Bonjour!</span>
                        <span className='text-3xl'>Minassa lab</span>
                    </div>
                    <div className='flex flex-col mt-24'>
                        <span className='text-3xl font-semibold'>Evènements à venir</span>
                        <div className='mt-4'>
                            <Events />
                        </div>
                    </div>
                    <div className='flex flex-col mt-24'>
                        <span className='text-3xl font-semibold'>Notre prochain sujet</span>
                        <span className='text-gray-500'>C'est le sujet qu'on va enregistrer dans notre podcast prochain</span>
                        <div className='mt-4'>
                            <Sujet />
                        </div>
                    </div>
                    <div className='border-b border-black mt-12'></div>
                    <div className='mt-12'>
                        {/* post */}
                    </div>
                </div>
            </div>
        </div>
    )
}
