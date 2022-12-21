import React, { useEffect, useState } from 'react'
import { useOpen } from '../store/store'
import { useNavigate } from 'react-router-dom'
import { decode } from '../jwt/jwt'
import { useCookies } from 'react-cookie'
import { AuthenticatedNavbar } from '../components/nav/AuthenticatedNavbar'
import { Sidebar } from '../components/nav/Sidebar'
import { SmallScreenNav } from '../components/nav/SmallScreenNav'
import { OpenMicForm } from '../components/forms/OpenMicForm'
import { useAnimation } from '../hooks/useAnimation'

import blue_blob from "../assets/svgs/blue_blob.svg";
import blue_stars from "../assets/svgs/blue_stars.svg";



export const OpenMicPage = () => {
    const navigate = useNavigate()
    const [cookies] = useCookies(['oss9oli']);
    const open = useOpen((state) => state.open)
    const { props, a } = useAnimation();

    useEffect(() => {
        if (Object.entries(cookies).length === 0) {
            navigate("/auth")
        }
        const { pack, name } = decode(cookies.oss9oli)
        if (pack === "" || pack === "free" || pack === "consumer_pack") {
            navigate("/accueil")
        }
    }, [])
    return (
        <div className='flex flex-col realtive z-50'>
            <AuthenticatedNavbar />
            <div className="absolute bottom-0 left-0 z-10">
                <img src={blue_blob} alt="" className="" />
            </div>
            <div className='flex z-40'>
                <div>
                    {open && <div className='lg:flex hidden sticky top-24'>
                        <Sidebar selected={"openmic"} />
                    </div>}
                </div>
                {open && <div className='flex lg:hidden absolute top-0 z-50'>
                    <SmallScreenNav selected={"openmic"} />
                </div>}
                <a.div
                    style={props}
                    className=' flex-col z-40 mt-12 relative'>
                    <div className="absolute bottom-32 left-10 z-50 ">
                        <img src={blue_stars} alt="" className="" />
                    </div>
                    <OpenMicForm />
                </a.div>
            </div>
        </div>
    )
}
