import React, { useEffect } from 'react'
import { Form } from '../components/forms/Form'
import { AuthenticatedNavbar } from '../components/nav/AuthenticatedNavbar'
import { Sidebar } from '../components/nav/Sidebar'
import { SmallScreenNav } from '../components/nav/SmallScreenNav'
import { useOpen } from '../store/store'
import { useCookies } from 'react-cookie'
import { decode } from '../jwt/jwt'
import { useNavigate } from 'react-router-dom'
import { useAnimation } from '../hooks/useAnimation'


export const AddPodcastPage = () => {
    const navigate = useNavigate()
    const [cookies] = useCookies(['oss9oli']);
    const open = useOpen((state) => state.open)
    const { props, a } = useAnimation();
    useEffect(() => {
        if (Object.entries(cookies).length === 0) {
            navigate("/auth")
        }
        const { pack } = decode(cookies.oss9oli)
        if (pack !== "producer_pack") {
            navigate("/accueil")
        }
        // scroll to top
        window.scrollTo(0, 0)
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
                <a.div
                    style={props}
                    className='flex flex-col z-40 w-full xl:p-12 p-6'>
                    <div className={`flex mt-4 justify-between items-end ${!open ? "xl:px-44" : ""}`}>
                        <Form />
                    </div>
                </a.div>
            </div>
        </div>
    )
}
