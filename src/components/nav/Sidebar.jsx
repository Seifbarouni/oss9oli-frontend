import React from 'react'

export const Sidebar = () => {
    return (
        <div className='h-full z-50 font-semibold sticky w-96'>
            <div className='bg-akhdher2 border border-black rounded-r-3xl'>
                <div className='mt-28 flex flex-col space-y-8 text-white text-2xl pl-12'>
                    <span className='hover:underline underline-offset-8 cursor-pointer'>ACCUEIL</span>
                    <span className='hover:underline underline-offset-8 cursor-pointer'>TOUS NOS PODCATS</span>
                    <span className='hover:underline underline-offset-8 cursor-pointer'>PUBLIER PODCAST</span>
                    <span className='underline underline-offset-8 cursor-pointer'>O9 COMMUNITY</span>
                    <span className='hover:underline underline-offset-8 cursor-pointer'>OPEN MIC</span>
                    <span className='hover:underline underline-offset-8 cursor-pointer'>STUDIO OSS9OLI</span>
                </div>
                <div className='flex flex-col space-y-8 mt-40 pl-12 text-white text-2xl  mb-12'>
                    <span className='hover:underline underline-offset-8 cursor-pointer'>PARAMETRES</span>
                    <span className='hover:underline underline-offset-8 cursor-pointer'>STATISTIQUES</span>
                </div>
            </div>
            <div className=' border border-black rounded-r-3xl absolute top-1 -right-1 -z-10 bg-white w-full'>
                <div className='mt-28 flex flex-col space-y-8 text-white text-2xl pl-12 invisible'>
                    <span>ACCUEIL</span><span>TOUS NOS PODCATS</span><span>PUBLIER PODCAST</span><span>O9 COMMUNITY</span><span>OPEN MIC</span><span>STUDIO OSS9OLI</span>
                </div>
                <div className='flex flex-col space-y-8 mt-40 pl-12 text-white text-2xl  mb-12 invisible'>
                    <span>PARAMETRES</span><span>STATISTIQUES</span>
                </div>
            </div>
        </div>
    )
}
