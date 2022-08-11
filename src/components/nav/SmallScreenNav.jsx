import { XIcon } from '@heroicons/react/solid'
import React from 'react'
import { Link } from 'react-router-dom'
import { useOpen } from '../../store/store'

export const SmallScreenNav = ({ selected }) => {
    const setOpen = useOpen((state) => state.setOpen)
    return (
        <div className='z-50 w-screen'>
            <div className='bg-akhdher2 border border-black relative'>
                <XIcon className='absolute top-6 left-8 cursor-pointer text-white h-12 w-12' onClick={() => setOpen()} />
                <div className='mt-28 flex flex-col space-y-8 text-white text-2xl pl-12 items-center justify-center'>
                    <Link to={"/home"} onClick={() => setOpen()}>
                        <span className={`hover:underline underline-offset-8 cursor-pointer ${selected === "accueil" ? " underline" : ""}`}>ACCUEIL</span>
                    </Link>
                    <span className={`hover:underline underline-offset-8 cursor-pointer ${selected === "pods" ? " underline" : ""}`}>TOUS NOS PODCATS</span>
                    <span className={`hover:underline underline-offset-8 cursor-pointer ${selected === "post" ? " underline" : ""}`}>PUBLIER PODCAST</span>
                    <Link to={"/community"} onClick={() => setOpen()}>
                        <span className={`hover:underline underline-offset-8 cursor-pointer ${selected === "community" ? " underline" : ""}`}>O9 COMMUNITY</span>
                    </Link>
                    <span className={`hover:underline underline-offset-8 cursor-pointer ${selected === "openmic" ? " underline" : ""}`}>OPEN MIC</span>
                    <span className={`hover:underline underline-offset-8 cursor-pointer ${selected === "studio" ? " underline" : ""}`}>STUDIO OSS9OLI</span>
                </div>
                <div className='flex flex-col justify-center items-center space-y-8 mt-40 pl-12 text-white text-2xl mb-12'>
                    <span className={`hover:underline underline-offset-8 cursor-pointer ${selected === "settings" ? " underline" : ""}`}>PARAMETRES</span>
                    <span className={`hover:underline underline-offset-8 cursor-pointer ${selected === "stats" ? " underline" : ""}`}>STATISTIQUES</span>
                </div>
            </div>

        </div>
    )
}
