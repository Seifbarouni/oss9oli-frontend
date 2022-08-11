import React from 'react'
import { Hamburger } from '../buttons/Hamburger'
import { JoinButton } from '../buttons/JoinButton'

import { Link } from 'react-router-dom'
import black_logo from '../../assets/svgs/black_logo.svg'
import { useOpen } from '../../store/store'

export const AuthenticatedNavbar = () => {
    const setOpen = useOpen((state) => state.setOpen)
    return (
        <nav className="flex items-center justify-evenly p-3 z-50 w-full xl:px-32 sm:px-12">
            <div className='flex items-center w-full'>
                <div onClick={() => setOpen()}>
                    <Hamburger />
                </div>
                <div className='pl-8 md:flex hidden'>
                    <JoinButton
                        cd1={"relative z-20"}
                        cd2={"bg-asfer rounded-full py-2 px-5 text-center cursor-pointer border border-black transition duration-150 hover:-translate-x-1 hover:translate-y-1 text-white w-full "}
                        cd3={"border border-black rounded-full py-2 px-5 absolute right-1 top-1 -z-10 w-full"}
                        data={"VIENS! ON T'ATTEND"}
                        to={'/auth'}
                    />
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <Link to={'/'}>
                    <img src={black_logo} alt="" />
                </Link>
            </div>
            <div className='w-full flex justify-end'>
                <Link to={"/profile"}>
                    <div className='h-16 w-16 border border-black rounded-full bg-white'>
                        <img src="https://avatars.dicebear.com/api/croodles/me.svg" alt="" />
                    </div>
                </Link>
            </div>
        </nav>
    )
}
