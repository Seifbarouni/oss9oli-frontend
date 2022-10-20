import React from 'react'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { decode } from '../../jwt/jwt'

export const Sidebar = ({ selected }) => {
    const [cookies] = useCookies(['oss9oli']);
    const { pack } = decode(cookies.oss9oli)
    return (
        <div className='h-full z-50 font-semibold sticky w-80 top-0'>
            <div className='bg-azreg3 border border-black rounded-r-3xl'>
                <div className='mt-28 flex flex-col space-y-12 text-white text-2xl pl-12'>
                    <Link to={"/accueil"}>
                        <span className={`hover:underline underline-offset-8 cursor-pointer ${selected === "accueil" ? " underline" : ""}`}>ACCUEIL</span>
                    </Link>
                    {pack !== "free" && pack !== "consumer_pack" && <Link to={"/community"}>
                        <span className={`hover:underline underline-offset-8 cursor-pointer ${selected === "community" ? " underline" : ""}`}>O9 COMMUNITY</span>
                    </Link>}
                    {pack === "producer_pack" && <Link to={"/mypods"}>
                        <span className={`hover:underline underline-offset-8 cursor-pointer ${selected === "mypods" ? " underline" : ""}`}>MES PODCASTS</span>
                    </Link>}
                    {pack === "producer_pack" && <Link to={"/edit"}>
                        <span className={`hover:underline underline-offset-8 cursor-pointer ${selected === "edit" ? " underline" : ""}`}>EDITER CHAINE</span>
                    </Link>}

                    <span className={`hover:underline underline-offset-8 cursor-pointer ${selected === "openmic" ? " underline" : ""}`}>OPEN MIC</span>
                    <span className={`hover:underline underline-offset-8 cursor-pointer ${selected === "studio" ? " underline" : ""}`}>STUDIO OSS9OLI</span>
                </div>
                <Link
                    to={"/profile"}
                    className='flex flex-col space-y-12 mt-40 pl-12 text-white text-2xl mb-12'>
                    <span className={`hover:underline underline-offset-8 cursor-pointer ${selected === "profile" ? " underline" : ""}`}>PROFILE</span>
                </Link>
            </div>
            <div className=' border border-black rounded-r-3xl absolute top-1 -right-1 -z-10 bg-white w-full'>
                <div className='mt-28 flex flex-col space-y-12 text-white text-2xl pl-12 invisible'>
                    <span>ACCUEIL</span>
                    {pack !== "free" && pack !== "consumer_pack" && <span>O9 COMMUNITY</span>}
                    {pack === "producer_pack" && <span>MES PODCATS</span>}
                    {pack === "producer_pack" && <span>EDITER CHAINE</span>}
                    <span>OPEN MIC</span>
                    <span>STUDIO OSS9OLI</span>
                </div>
                <div className='flex flex-col space-y-12 mt-40 pl-12 text-white text-2xl  mb-12 invisible'>
                    <span>PARAMETRES</span>
                </div>
            </div>
        </div>
    )
}
