import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = ({ selected }) => {
    return (
        <div className='h-full z-50 font-semibold sticky w-96'>
            <div className='bg-akhdher2 border border-black rounded-r-3xl'>
                <div className='mt-28 flex flex-col space-y-8 text-white text-2xl pl-12'>
                    <Link to={"/accueil"}>
                        <span className={`hover:underline underline-offset-8 cursor-pointer ${selected === "accueil" ? " underline" : ""}`}>ACCUEIL</span>
                    </Link>
                    <Link to={"/community"}>
                        <span className={`hover:underline underline-offset-8 cursor-pointer ${selected === "community" ? " underline" : ""}`}>O9 COMMUNITY</span>
                    </Link>
                    <span className={`hover:underline underline-offset-8 cursor-pointer ${selected === "mypods" ? " underline" : ""}`}>MES PODCASTS</span>
                    <span className={`hover:underline underline-offset-8 cursor-pointer ${selected === "edit" ? " underline" : ""}`}>EDITER CHAINE</span>
                    <span className={`hover:underline underline-offset-8 cursor-pointer ${selected === "openmic" ? " underline" : ""}`}>OPEN MIC</span>
                    <span className={`hover:underline underline-offset-8 cursor-pointer ${selected === "studio" ? " underline" : ""}`}>STUDIO OSS9OLI</span>
                </div>
                <div className='flex flex-col space-y-8 mt-40 pl-12 text-white text-2xl mb-12'>
                    <span className={`hover:underline underline-offset-8 cursor-pointer ${selected === "settings" ? " underline" : ""}`}>PARAMETRES</span>
                    <span className={`hover:underline underline-offset-8 cursor-pointer ${selected === "stats" ? " underline" : ""}`}>STATISTIQUES</span>
                </div>
            </div>
            <div className=' border border-black rounded-r-3xl absolute top-1 -right-1 -z-10 bg-white w-full'>
                <div className='mt-28 flex flex-col space-y-8 text-white text-2xl pl-12 invisible'>
                    <span>ACCUEIL</span>
                    <span>O9 COMMUNITY</span>
                    <span>MES PODCATS</span>
                    <span>EDITER CHAINE</span>
                    <span>OPEN MIC</span>
                    <span>STUDIO OSS9OLI</span>
                </div>
                <div className='flex flex-col space-y-8 mt-40 pl-12 text-white text-2xl  mb-12 invisible'>
                    <span>PARAMETRES</span><span>STATISTIQUES</span>
                </div>
            </div>
        </div>
    )
}
