import React from 'react'
import {
    Link, useNavigate
} from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { decode } from '../../jwt/jwt'

export const Sidebar = ({ selected }) => {
    const [cookies] = useCookies(['oss9oli']);
    const { pack } = decode(cookies.oss9oli)
    const navigate = useNavigate()
    return (
        <div className='h-full z-40 font-semibold sticky w-80 top-0'>
            <div className='bg-azreg3 border border-black rounded-r-3xl'>
                <div className='mt-28 flex flex-col space-y-12 text-white text-2xl pl-12'>
                    <div
                        onClick={() => navigate("/accueil")}
                    >
                        <span className={`hover:underline underline-offset-8  ${selected === "accueil" ? " underline" : ""}`}>ACCUEIL</span>
                    </div>
                    {pack !== "free" && pack !== "consumer_pack" && <div
                        onClick={() => navigate("/community")}
                    >
                        <span className={`hover:underline underline-offset-8  ${selected === "community" ? " underline" : ""}`}>O9 COMMUNITY</span>
                    </div>}

                    {pack === "producer_pack" && <div
                        onClick={() => navigate("/mychannel")}
                    >
                        <span className={`hover:underline underline-offset-8  ${selected === "edit" ? " underline" : ""}`}>MA CHAINE</span>
                    </div>}

                    <span className={`hover:underline underline-offset-8  ${selected === "openmic" ? " underline" : ""}`}>OPEN MIC</span>
                    <span className={`hover:underline underline-offset-8  ${selected === "studio" ? " underline" : ""}`}>STUDIO OSS9OLI</span>
                </div>
                <div
                    onClick={() => navigate("/profile")}
                    className='flex flex-col space-y-12 mt-32 pl-12 text-white text-2xl mb-12'>
                    <span className={`hover:underline underline-offset-8 ${selected === "profile" ? " underline" : ""}`}>PROFILE</span>
                </div>
            </div>
            <div className=' border border-black rounded-r-3xl absolute top-1 -right-1 -z-10 bg-white w-full'>
                <div className='mt-28 flex flex-col space-y-12 text-white text-2xl pl-12 invisible'>
                    <span>ACCUEIL</span>
                    {pack !== "free" && pack !== "consumer_pack" && <span>O9 COMMUNITY</span>}
                    {pack === "producer_pack" && <span>MA CHAINE</span>}
                    <span>OPEN MIC</span>
                    <span>STUDIO OSS9OLI</span>
                </div>
                <div className='flex flex-col space-y-12 mt-32 pl-12 text-white text-2xl  mb-12 invisible'>
                    <span>PARAMETRES</span>
                </div>
            </div>
        </div>
    )
}
