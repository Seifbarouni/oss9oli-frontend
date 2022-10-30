import { XIcon } from '@heroicons/react/solid'
import React from 'react'
import { Link } from 'react-router-dom'
import { useOpen } from '../../store/store'
import { useCookies } from 'react-cookie'
import { decode } from '../../jwt/jwt'

export const SmallScreenNav = ({ selected }) => {
    const setOpen = useOpen((state) => state.setOpen)
    const [cookies] = useCookies(['oss9oli']);
    const { pack } = decode(cookies.oss9oli)
    return (
        <div className='z-50 w-screen'>
            <div className='bg-azreg3 border border-black relative'>
                <XIcon className='absolute top-6 left-2 cursor-pointer text-white h-12 w-12' onClick={() => setOpen()} />
                <div className='mt-28 flex flex-col space-y-8 text-white text-2xl pl-12 items-center justify-center'>
                    <Link to={"/accueil"}>
                        <span className={`hover:underline underline-offset-8 cursor-pointer ${selected === "accueil" ? " underline" : ""}`} onClick={() => setOpen()}>ACCUEIL</span>
                    </Link>
                    {pack !== "free" && pack !== "consumer_pack" && <Link to={"/community"}>
                        <span className={`hover:underline underline-offset-8 cursor-pointer ${selected === "community" ? " underline" : ""}`} onClick={() => setOpen()}>O9 COMMUNITY</span>
                    </Link>}
                    {pack === "producer_pack" && <Link to={"/addpod"}>
                        <span className={`hover:underline underline-offset-8 cursor-pointer ${selected === "addpod" ? " underline" : ""}`} onClick={() => setOpen()}>AJOUTER PODCAST</span>
                    </Link>}
                    {pack === "producer_pack" && <Link to={"/mychannel"}>
                        <span className={`hover:underline underline-offset-8 cursor-pointer ${selected === "edit" ? " underline" : ""}`} onClick={() => setOpen()}>MA CHAINE</span>
                    </Link>}

                    <span className={`hover:underline underline-offset-8 cursor-pointer ${selected === "openmic" ? " underline" : ""}`}>OPEN MIC</span>
                    <span className={`hover:underline underline-offset-8 cursor-pointer ${selected === "studio" ? " underline" : ""}`}>STUDIO OSS9OLI</span>
                </div>
                <Link
                    to={"/profile"}
                    className='flex flex-col justify-center items-center space-y-8 mt-40 pl-12 text-white text-2xl mb-12'>
                    <span className={`hover:underline underline-offset-8 cursor-pointer ${selected === "profile" ? " underline" : ""}`}>PROFILE</span>
                </Link>
            </div>

        </div>
    )
}
