import React from 'react'
import { Hamburger } from '../buttons/Hamburger'
import { JoinButton } from '../buttons/JoinButton'

import { useNavigate } from 'react-router-dom'
import black_logo from '../../assets/svgs/black_logo.svg'
import { useOpen } from '../../store/store'
import { useCookies } from 'react-cookie'
import { decode } from '../../jwt/jwt'
import { useAudio } from '../../store/store'

export const AuthenticatedNavbar = () => {
    const setOpen = useOpen((state) => state.setOpen)
    const [cookies, setCookie, removeCookie] = useCookies(['oss9oli']);
    const { pack, customSeed } = decode(cookies.oss9oli)
    const closeAudio = useAudio((state) => state.closeAudio)
    const navigate = useNavigate()
    const logout = () => {
        removeCookie("oss9oli", { path: "/", sameSite: "strict" })
        localStorage.clear()
        closeAudio()
        window.location = "/auth"
    }
    return (
        <nav className="flex items-center justify-evenly p-3 z-50 w-full xl:px-12 sticky top-0 border-b border-black bg-gris2">
            <div className='flex items-center w-full'>
                <div onClick={() => setOpen()}>
                    <Hamburger />
                </div>
                {(pack === "" || pack === "free") && <div className='pl-8 md:flex hidden'>
                    <JoinButton
                        cd1={"relative z-20"}
                        cd2={"bg-asfer rounded-full py-2 px-5 text-center border border-black transition duration-150 hover:-translate-x-1 hover:translate-y-1 text-white w-full "}
                        cd3={"border border-black rounded-full py-2 px-5 absolute right-1 top-1 -z-10 w-full"}
                        data={"VIENS! ON T'ATTEND"}
                        to={'/auth'}
                    />
                </div>}
            </div>
            <div className='w-full flex justify-center'>
                <div
                    onClick={() => navigate('/accueil')}
                >
                    <img src={black_logo} alt="" />
                </div>
            </div>
            <div className='w-full flex justify-end items-center'>
                <div className='pr-4  hover:underline' onClick={() => logout()}>
                    Se déconnecter
                </div>
                <div
                    onClick={() => navigate("/profile")}
                >
                    <div className='h-16 w-16 border border-black rounded-full bg-white'>
                        <img src={`https://avatars.dicebear.com/api/croodles/${customSeed}.svg`} alt="" referrerpolicy="no-referrer" className='rounded-full' />
                    </div>
                </div>
            </div>
        </nav>
    )
}
