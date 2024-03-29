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
import { useOpen } from '../store/store'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { decode } from '../jwt/jwt'
import axios from 'axios'
import { Podcast } from '../components/Podcast'
import { PodBanner } from '../components/PodBanner'
import { useAnimation } from '../hooks/useAnimation'

export const ProfilePage = () => {
    const open = useOpen((state) => state.open)
    const navigate = useNavigate()
    const [cookies] = useCookies(['oss9oli']);
    const user = decode(cookies.oss9oli)
    const [focus, setFocus] = useState("pods")
    const [podcasts, setPodcasts] = useState([])
    const [episodes, setEpisodes] = useState([])
    const { props, a } = useAnimation();

    const getLiked = () => {
        setFocus("liked")
        setEpisodes([])
        setPodcasts([])
        axios.get(`${process.env.REACT_APP_PODCAST_SERVICE}/api/v1/playlist/liked`, {
            headers: {
                Authorization: `Bearer ${cookies.oss9oli}`
            }
        }).then(res => {
            if (res.data.success)
                setEpisodes(res.data.data)
        })
    }

    const getLater = () => {
        setFocus("later")
        setEpisodes([])
        setPodcasts([])
        axios.get(`${process.env.REACT_APP_PODCAST_SERVICE}/api/v1/playlist/later`, {
            headers: {
                Authorization: `Bearer ${cookies.oss9oli}`
            }
        }).then(res => {
            if (res.data.success)
                setEpisodes(res.data.data)
        })
    }

    const getUnfinished = () => {
        setFocus("unfinished")
        setEpisodes([])
        setPodcasts([])
        axios.get(`${process.env.REACT_APP_PODCAST_SERVICE}/api/v1/playlist/unfinished`, {
            headers: {
                Authorization: `Bearer ${cookies.oss9oli}`
            }
        }).then(res => {
            if (res.data.success)
                setEpisodes(res.data.data)
        })
    }

    const getPodcasts = () => {
        setFocus("pods")
        setEpisodes([])
        setPodcasts([])
        axios.get(`${process.env.REACT_APP_PODCAST_SERVICE}/api/v1/playlist/podcast`, {
            headers: {
                Authorization: `Bearer ${cookies.oss9oli}`
            }
        }).then(res => {
            if (res.data.success)
                setPodcasts(res.data.data)
        })
    }

    useEffect(() => {
        if (Object.entries(cookies).length === 0) {
            navigate("/auth")
        }
        window.scrollTo(0, 0)
        getPodcasts();
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
                <a.div
                    style={props}
                    className='flex flex-col flex-grow -z-20 pb-44'>
                    <div className=' flex flex-col'>
                        <ProfileBanner name={user.name} desc={user.description} />
                    </div>
                    {/* <div className='mt-16 flex xl:space-x-8 space-x-0
                        xl:space-y-0 space-y-4  xl:flex-row flex-col p-6'>
                        <Tags />
                        <Channels />
                    </div> */}
                    <div className='mt-64 flex sm:flex-row flex-col space-x-8  sm:text-2xl sm:space-y-1 space-y-8  lg:justify-evenly justify-center px-6 relative '>
                        <span className={`underline-offset-8 hover:underline  ${focus === "pods" ? "underline font-bold" : ""}`}
                            onClick={() => getPodcasts()}
                        >PODCASTS SUIVIS</span>
                        <span className={`underline-offset-8 hover:underline  ${focus === "liked" ? "underline font-bold" : ""}`}
                            onClick={() => getLiked()}
                        >SONS ADORES</span>
                        {/*<span
                            className={`underline-offset-8 hover:underline  ${focus === "unfinished" ? "underline font-bold" : ""}`}
                            onClick={() => getUnfinished()}

                        >CONTINUER L'ECOUTE</span>*/}
                        <span
                            className={`underline-offset-8 hover:underline  ${focus === "later" ? "underline font-bold" : ""}`}
                            onClick={() => getLater()}

                        >A ECOUTER PLUS TARD</span>
                    </div>
                    <div className='px-32 mt-12'>
                        <div className='flex flex-col mt-8'>
                            {episodes.map((podcast, index) => (
                                <div key={"ep-"+index} className={`mt-3 ${!open ? "md:px-44" : ""}`}>
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

                            {podcasts.map((pod, index) => {
                                return (
                                    <PodBanner
                                        key={"pod-"+index} 
                                        podcastId={pod._id}
                                        name={pod.name}
                                        img={pod.image}
                                        desc={pod.description}
                                        listEps={true}
                                        liked={true}
                                        myPodcast={false}
                                    />
                                )
                            })}
                        </div>
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
                </a.div>
            </div>

        </div>
    )
}
