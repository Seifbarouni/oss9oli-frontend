import React, { useEffect, useState } from 'react'
import img3 from '../assets/images/3.png'
import img4 from '../assets/images/4.png'
import img5 from '../assets/images/5.png'
import img6 from '../assets/images/6.png'
import red_blob from '../assets/svgs/red_blob.svg'
import green_blob from '../assets/svgs/green_blob.svg'
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
import axios from 'axios'
import { Podcast } from '../components/Podcast'

export const ProfilePage = () => {
    const open = useOpen((state) => state.open)
    const navigate = useNavigate()
    const [cookies] = useCookies(['oss9oli']);
    const user = decode(cookies.oss9oli)
    const [focus, setFocus] = useState("liked")
    const [podcasts, setPodcasts] = useState([])

    const getLiked = ()=>{
        setFocus("liked")
        setPodcasts([])
        axios.get(`${process.env.REACT_APP_PODCAST_SERVICE}/api/v1/playlist/liked`,{
            headers: {
                Authorization: `Bearer ${cookies.oss9oli}`
            }
        }).then(res=>{
            if (res.data.success)
            setPodcasts(res.data.data)
        })
    }

    const getLater = ()=>{
        setFocus("later")
        setPodcasts([])
        axios.get(`${process.env.REACT_APP_PODCAST_SERVICE}/api/v1/playlist/later`,{
            headers: {
                Authorization: `Bearer ${cookies.oss9oli}`
            }
        }).then(res=>{
            if (res.data.success)
            setPodcasts(res.data.data)
        })
    }

    const getUnfinished = ()=>{
        setFocus("unfinished")
        setPodcasts([])
        axios.get(`${process.env.REACT_APP_PODCAST_SERVICE}/api/v1/playlist/unfinished`,{
            headers: {
                Authorization: `Bearer ${cookies.oss9oli}`
            }
        }).then(res=>{
            if (res.data.success)
            setPodcasts(res.data.data)
        })
    }

    useEffect(() => {
        if (Object.entries(cookies).length === 0) {
            navigate("/auth")
        }
        window.scrollTo(0, 0)
        getLiked();
    }, [])

    return (
        <div className='flex flex-col realtive pb-12'>
            <AuthenticatedNavbar />

            {user.pack === "community_pack" && <div className='absolute right-0 top-0'>
                <img src={green_blob} alt="" className='' />
            </div>}
            {(user.pack === "producer_pack" || user.pack === "free") && <div className='absolute right-0 top-0'>
                <img src={red_blob} alt="" className='' />
            </div>}

            <div className='flex z-40'>
                <div>
                    {open && <div className='lg:flex hidden sticky top-24'>
                        <Sidebar selected={"profile"} />
                    </div>}
                </div>
                {open && <div className='flex lg:hidden absolute top-0 z-50'>
                    <SmallScreenNav selected={"profile"} />
                </div>}
                <div className='flex flex-col flex-grow -z-20 pb-44'>
                    <div className=' flex flex-col'>
                        <ProfileBanner name={user.name} desc={user.description} />
                    </div>
                    {/* <div className='mt-16 flex xl:space-x-8 space-x-0
                        xl:space-y-0 space-y-4  xl:flex-row flex-col p-6'>
                        <Tags />
                        <Channels />
                    </div> */}
                    <div className='mt-64 flex sm:flex-row flex-col space-x-8  sm:text-2xl sm:space-y-1 space-y-8  lg:justify-evenly justify-center px-6 relative '>
                            <span className={`underline-offset-8 hover:underline  ${focus === "liked" ? "underline font-bold" : ""}`}
                                onClick={() => getLiked()}
                            >PODCASTS ADORES</span>
                            <span
                                className={`underline-offset-8 hover:underline  ${focus === "unfinished" ? "underline font-bold" : ""}`}
                                onClick={() => getUnfinished()}

                            >CONTINUER L'ECOUTE</span>
                            <span
                                className={`underline-offset-8 hover:underline  ${focus === "later" ? "underline font-bold" : ""}`}
                                onClick={() => getLater()}

                            >A ECOUTER PLUS TARD</span>
                        </div>
                        <div className='flex flex-col mt-8'>

                            {podcasts.map((podcast) => (
                                <div className={`mt-3 ${!open ? "md:px-44" : ""}`}>
                                    <Podcast
                                        episodeId={podcast._id}
                                        podcastId={podcast.podcastId}
                                        img={podcast.podcastId.image}
                                        creator={podcast.podcastId.name}
                                        title={podcast.title} duration={podcast.length}
                                        description={podcast.description} status={podcast.status}
                                        guest={podcast.guest}
                                        listens={podcast.numberOfListeners}
                                        number={podcast.episodeNumber}
                                        tags={podcast.tags}
                                        w={"w-full"} h={"sm:h-96"} />
                                </div>
                            ))}
                        </div>
                    <div className='mt-16 flex xl:flex-row flex-col p-6 flex-wrap justify-center items-center'>
                        <div className='p-5'>
                            <SmallPost
                                img={img3} creator={"Oss9oli"} title={"Ep 3 | Qu'est-ce qu'ils pensent? - Le féminisme en Tunisie"} duration={"50:20"}
                            />
                        </div>
                        <div className='p-5'>
                            <SmallPost
                                img={img4} creator={"Oss9o li"} title={"Ep 3 | Qu'est-ce qu'ils pensent? - Le féminisme en Tunisie"} duration={"50:20"}
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
