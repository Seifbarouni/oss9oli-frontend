import React, { useEffect } from 'react'
import { Form } from '../components/forms/Form'
import { AuthenticatedNavbar } from '../components/nav/AuthenticatedNavbar'
import { Sidebar } from '../components/nav/Sidebar'
import { SmallScreenNav } from '../components/nav/SmallScreenNav'
import { Seperator } from '../components/Seperator'
import { useOpen } from '../store/store'
import { useCookies } from 'react-cookie'
import { decode } from '../jwt/jwt'
import { useNavigate } from 'react-router-dom'

export const AddPodcastPage = () => {
    const navigate = useNavigate()
    const [cookies] = useCookies(['oss9oli']);
    const open = useOpen((state) => state.open)
    useEffect(() => {
        if (Object.entries(cookies).length === 0) {
            navigate("/auth")
        }
        const { pack } = decode(cookies.oss9oli)
        if (pack !== "producer_pack") {
            navigate("/accueil")
        }
    }, [])
    return (
        <div className='flex flex-col'>
            <AuthenticatedNavbar />
            {/* <Seperator mt={0} /> */}
            <div className='flex'>
                <div>
                    {open && <div className='lg:flex hidden sticky top-24 z-50'>
                        <Sidebar selected={"addpod"} />
                    </div>}
                </div>
                {open && <div className='flex lg:hidden absolute top-0 z-50'>
                    <div className='sticky'>
                        <SmallScreenNav selected={"addpod"} />
                    </div>
                </div>}
                <div className='flex flex-col z-40 w-full xl:p-12 p-6'>
                    <div className={`flex mt-4 justify-between items-end ${!open ? "xl:px-44" : ""}`}>
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}
