import React, { useEffect } from 'react'
import img3 from '../assets/images/3.png'
import img4 from '../assets/images/4.png'
import img5 from '../assets/images/5.png'
import img6 from '../assets/images/6.png'
import red_blob from '../assets/svgs/red_blob.svg'
import two_green_stars from '../assets/svgs/two_green_stars.svg'
import { Channels } from '../components/Channels'
import { AuthenticatedNavbar } from '../components/nav/AuthenticatedNavbar'
import { Sidebar } from '../components/nav/Sidebar'
import { SmallScreenNav } from '../components/nav/SmallScreenNav'
import { ProfileBanner } from '../components/ProfileBanner'
import { SmallPost } from '../components/SmallPost'
import { Tags } from '../components/Tags'
import { useOpen } from '../store/store'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { decode } from '../jwt/jwt'

export const ProfilePage = () => {
    const open = useOpen((state) => state.open)
    const navigate = useNavigate()
    const [cookies] = useCookies(['oss9oli']);
    const user = decode(cookies.oss9oli)
    useEffect(() => {
        if (Object.entries(cookies).length === 0) {
            navigate("/auth")
        }
    }, [])

    return (
        <div className='flex flex-col realtive z-50'>
            <AuthenticatedNavbar />
            <div className='absolute right-0 top-44  '>
                <img src={red_blob} alt="" className='' />
            </div>

            <div className='flex z-40'>
                <div>
                    {open && <div className='lg:flex hidden sticky top-24'>
                        <Sidebar selected={"profile"} />
                    </div>}
                </div>
                {open && <div className='flex lg:hidden absolute top-0 z-50'>
                    <SmallScreenNav selected={"profile"} />
                </div>}
                <div className='flex flex-col flex-grow -z-20'>
                    <div className=' flex flex-col'>
                        <ProfileBanner episodes={13} shows={5} name={user.name} img={user.picture} desc={user.description} />
                    </div>
                    <div className='mt-16 flex xl:space-x-8 space-x-0
                        xl:space-y-0 space-y-4  xl:flex-row flex-col p-6'>
                        <Tags />
                        <Channels />
                    </div>
                    <div className='mt-16 flex sm:flex-row flex-col space-x-8  sm:text-2xl sm:space-y-1 space-y-8  lg:justify-evenly justify-center px-6 relative '>
                        <div className='absolute -top-6 right-6 md:flex hidden'>
                            <img src={two_green_stars} alt="" />
                        </div>
                        <span className='underline underline-offset-8'>PODCASTS ADORES</span>
                        <span>CONTINUER L'ECOUTE</span>
                        <span>A ECOUTER PLUS TARD</span>
                    </div>
                    <div className='mt-16 flex xl:flex-row flex-col p-6 flex-wrap justify-center items-center'>
                        <div className='p-5'>
                            <SmallPost
                                img={img3} creator={"Oss9oli"} title={"Ep 3 | Qu'est-ce qu'ils pensent? - Le féminisme en Tunisie"} duration={"50:20"}
                            />
                        </div>
                        <div className='p-5'>
                            <SmallPost
                                img={img4} creator={"Oss9oli"} title={"Ep 3 | Qu'est-ce qu'ils pensent? - Le féminisme en Tunisie"} duration={"50:20"}
                            />
                        </div>
                        <div className='p-5'>
                            <SmallPost
                                img={img5} creator={"Oss9oli"} title={"Ep 3 | Qu'est-ce qu'ils pensent? - Le féminisme en Tunisie"} duration={"50:20"}
                            />
                        </div>
                        <div className='p-5'>
                            <SmallPost
                                img={img6} creator={"Oss9oli"} title={"Ep 3 | Qu'est-ce qu'ils pensent? - Le féminisme en Tunisie"} duration={"50:20"}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
