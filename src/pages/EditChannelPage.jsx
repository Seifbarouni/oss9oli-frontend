import React, { useState, useEffect } from 'react'
import { AuthenticatedNavbar } from '../components/nav/AuthenticatedNavbar'
import { Sidebar } from '../components/nav/Sidebar'
import { SmallScreenNav } from '../components/nav/SmallScreenNav'
import { useOpen } from '../store/store'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { decode } from '../jwt/jwt'
import { useNavigate } from 'react-router-dom'
import { ChannelBannerWithEdit } from '../components/ChannelBannerWithEdit'
import { PodBanner } from '../components/PodBanner'
import { Podcast } from '../components/Podcast'
import plus from '../assets/svgs/+.svg'
import { useAnimation } from '../hooks/useAnimation'


export const EditChannelPage = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [file, setFile] = useState()
    const [channelId, setChannelId] = useState("")
    const [episodes, setEpisodes] = useState([])
    const [podcasts, setPodcasts] = useState([])
    const [loading, setLoading] = useState(false)
    const [loading_spinner, setLoadingSpinner] = useState(false)
    const [focus, setFocus] = useState("mes_sons")
    const [cookies] = useCookies(['oss9oli']);
    const open = useOpen((state) => state.open)
    const navigate = useNavigate()
    const { props, a } = useAnimation();
    useEffect(() => {
        if (Object.entries(cookies).length === 0) {
            navigate("/auth")
        }
        const { pack } = decode(cookies.oss9oli)
        if (pack !== "producer_pack") {
            navigate("/accueil")
        }
        setLoading(true)
        axios.get(`${process.env.REACT_APP_PODCAST_SERVICE}/api/v1/channels/chan/get`, {
            headers: { Authorization: `Bearer ${cookies.oss9oli}` }
        }).then(res => {
            setName(res.data.data.name)
            setDescription(res.data.data.description)
            setChannelId(res.data.data._id)
            setFile(res.data.data.image)
            setLoading(false)
            myEps()
        }).catch(err => {
            console.log(err)
            setLoading(false)
        }
        )
    }, [])

    const myEps = () => {

        const getEpisodes = async () => {
            const res = await axios.get(`${process.env.REACT_APP_PODCAST_SERVICE}/api/v1/episodes/eps_user/get`, {
                headers: { Authorization: `Bearer ${cookies.oss9oli}` }
            })
            setEpisodes(res.data.data)
            localStorage.setItem("myEps", JSON.stringify(res.data.data))
        }
        // get episodes from local storage
        const myEps = localStorage.getItem("myEps")

        if (myEps) {
            setEpisodes(JSON.parse(myEps))
        } else {
            setLoadingSpinner(true)
            getEpisodes()
            setLoadingSpinner(false)
        }
        setFocus("mes_sons")
    }

    const myPods = () => {
        const getPodcasts = async () => {
            const res = await axios.get(`${process.env.REACT_APP_PODCAST_SERVICE}/api/v1/podcasts/channel/${channelId}`, {
                headers: { Authorization: `Bearer ${cookies.oss9oli}` }
            })
            localStorage.setItem("myPods", JSON.stringify(res.data.data))
            setPodcasts(res.data.data)
        }
        // get podcasts from local storage
        const myPods = localStorage.getItem("myPods")
        if (myPods) {
            setPodcasts(JSON.parse(myPods))
        } else {
            setLoadingSpinner(true)
            getPodcasts()
            setLoadingSpinner(false)
        }
        setFocus("mes_pods")
    }


    return (
        <div className='flex flex-col'>
            <AuthenticatedNavbar />
            <div className='flex'>
                <div>
                    {open && <div className='lg:flex hidden sticky top-24 z-40'>
                        <Sidebar selected={"edit"} />
                    </div>}
                </div>
                {open && <div className='flex lg:hidden absolute top-0 z-50'>
                    <div className='sticky'>
                        <SmallScreenNav selected={"edit"} />
                    </div>
                </div>}

                {!loading &&

                    <a.div
                        style={props}
                        className='flex flex-col w-full pb-72'>
                        <ChannelBannerWithEdit
                            name={name}
                            desc={description}
                            img={file} 
                            episodes={episodes}
                            />
                        <div className='mt-64 flex sm:flex-row flex-col space-x-8  sm:text-2xl sm:space-y-1 space-y-8  lg:justify-evenly justify-center px-6 relative '>
                            <span className={`underline-offset-8 hover:underline  ${focus === "mes_sons" ? "underline font-bold" : ""}`}
                                onClick={() => myEps()}
                            >TOUS MES SONS</span>
                            <span
                                className={`underline-offset-8 hover:underline  ${focus === "mes_pods" ? "underline font-bold" : ""}`}
                                onClick={() => myPods()}

                            >MES PODCASTS</span>
                            <span
                                className={`underline-offset-8 hover:underline  ${focus === "fd" ? "underline font-bold" : ""}`}
                                onClick={() => setFocus("fd")}

                            >FILE D'ATTENTE</span>
                        </div>
                        <div className='px-32 mt-12'>
                            {focus === "mes_pods" &&
                                <div className='flex flex-col space-y-8'>
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
                                                myPodcast={true}
                                                creator={name}
                                                channelId={channelId}
                                            />
                                        )
                                    })}

                                    <div
                                        onClick={() => navigate("/addpod")}
                                    >
                                        <div className='w-full p-12 bg-white flex justify-center items-center rounded-3xl border border-black hover:border-2'>
                                            <img src={plus} alt="" />
                                        </div>
                                    </div>

                                </div>
                            }
                            {focus === "mes_sons" &&
                                <div className='flex flex-col space-y-8'>
                                    {episodes.map((episode, index) => {
                                        return (
                                            <Podcast
                                                key={"ep-"+index}
                                                episodeId={episode._id}
                                                podcastId={episode.podcastId}
                                                img={episode.podcastId.image}
                                                creator={episode.podcastId.name}
                                                title={episode.title} duration={episode.length}
                                                description={episode.description} status={episode.status}
                                                guest={episode.guest}
                                                listens={episode.numberOfListeners}
                                                number={episode.episodeNumber}
                                                tags={episode.tags}
                                                w={"w-full"} h={"sm:h-96"} />
                                        )
                                    })}
                                </div>}
                            {loading_spinner &&
                                <div className='flex justify-center'>
                                    <div className="animate-spin rounded-full h-24 w-24 border-b-2 border-orng2"></div>
                                </div>
                            }


                        </div>
                    </a.div>
                }
                {loading && <div className='pb-[900px]'></div>}
            </div>
        </div>
    )
}