import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import img10 from '../assets/images/10.png'
import img3 from '../assets/images/3.png'
import img4 from '../assets/images/4.png'
import img5 from '../assets/images/5.png'
import img6 from '../assets/images/6.png'
import img7 from '../assets/images/7.png'
import img8 from '../assets/images/8.png'
import img9 from '../assets/images/9.png'
import { AuthenticatedNavbar } from '../components/nav/AuthenticatedNavbar'
import { Sidebar } from '../components/nav/Sidebar'
import { SmallScreenNav } from '../components/nav/SmallScreenNav'
import { Podcast } from '../components/Podcast'
import { Search } from '../components/Search'
import { SmallPost } from '../components/SmallPost'
import { Tag } from '../components/Tag'
import { useOpen } from '../store/store'
import axios from 'axios'
import { useCookies } from "react-cookie"
import { useNavigate } from 'react-router-dom'
import { useAnimation } from '../hooks/useAnimation'
let tags = ["Féminité", "Culture", "Art", "Economie", "Société"]

export const HomePage = () => {
    const navigate = useNavigate();
    const open = useOpen((state) => state.open)
    const [actifs, setActifs] = useState(new Array(tags.length).fill(false))
    const [podcasts, setPodcasts] = useState([])
    const [loading, setLoading] = useState(false)
    const [cookies] = useCookies(['oss9oli']);
    const { props, a } = useAnimation();

    useEffect(() => {
        if (Object.entries(cookies).length === 0) {
            navigate("/auth")
        }
        setLoading(true)
        axios.get(`${process.env.REACT_APP_PODCAST_SERVICE}/api/v1/episodes`,
            {
                headers: {
                    Authorization: `Bearer ${cookies.oss9oli}`
                }
            }
        ).then(res => {
            setPodcasts(res.data.data)
            setLoading(false)
        }).catch(err => console.log(err))

    }, [])

    const setActif = (index) => {
        var temp = [...actifs]
        temp[index] = !temp[index]
        setActifs(temp)
    }
    const getPodcastsBySearch = (search) => {
        setLoading(true)
        let searchTags = []
        for (let i = 0; i < tags.length; i++) {
            if (actifs[i]) searchTags.push(tags[i])
        }

        axios.get(`${process.env.REACT_APP_PODCAST_SERVICE}/api/v1/episodes?search=${search}&actifs=${JSON.stringify(searchTags)}`).then(res => {
            setPodcasts(res.data.data)
            console.log(res.data.data)
            setLoading(false)
        }).catch(err => console.log(err))

    }
    return (
        <div className='flex flex-col'>
            <AuthenticatedNavbar />
            <div className='flex w-full relative'>
                <div>
                    {open && <div className='lg:flex hidden sticky top-24'>
                        <Sidebar selected={"accueil"} />
                    </div>}
                </div>
                {open && <div className='flex lg:hidden absolute top-0 z-50'>
                    <div className='sticky'>
                        <SmallScreenNav selected={"accueil"} />
                    </div>
                </div>}
                <a.div
                    style={props}
                    className='flex flex-col z-40 w-full p-4 xl:px-24'>
                    <div className={`mt-4 ${!open ? "md:px-44" : ""}`}>
                        <Search search={getPodcastsBySearch} />
                    </div>
                    <div className={`flex mt-8 overflow-x-scroll space-x-2 space-y-1 justify-center flex-wrap ${!open ? "md:px-44" : ""}`}>
                        {tags.map((tag, index) => (
                            <Tag key={"tag-"+index}title={tag} actif={actifs[index]} setActif={() => setActif(index)} />
                        ))}
                    </div>
                    <div className={`flex mt-24 justify-between items-end ${!open ? "md:px-44" : ""}`}>
                        <span className='text-orng2 text-5xl'>ACTUALITE</span>
                        <span className='text-ka7ouli underline underline-offset-8 sm:text-lg'>
                            Voir plus {'>'}
                        </span>
                    </div>
                    {loading ? <div className='flex justify-center items-center mt-10'>
                        <div className="animate-spin rounded-full h-24 w-24 border-b-2 border-orng2"></div>
                    </div>
                        : <div className='flex flex-col mt-8'>

                            {podcasts.map((podcast, index) => (
                                <div key={"episode-"+index} className={`mt-3 ${!open ? "md:px-44" : ""}`}>
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
                        </div>}
                    <div className={`flex mt-24 justify-between items-end ${!open ? "md:px-44" : ""}`}>
                        <span className='text-orng2 text-5xl'>ECOUTEZ MAINTENANT</span>
                        <span className='text-ka7ouli underline underline-offset-8 sm:text-lg'>
                            Voir plus {'>'}
                        </span>
                    </div>

                    <div className={`flex xl:flex-row flex-col p-6 flex-wrap  items-center ${!open ? "md:px-44" : ""}`}>
                        <div className='p-1'>
                            <SmallPost
                                img={img3} creator={"Oss9oli"} title={"Ep 3 | Qu'est-ce qu'ils pensent? - Le féminisme en Tunisie"} duration={"50:20"}
                            />
                        </div>
                        <div className='p-1'>
                            <SmallPost
                                img={img4} creator={"Oss9oli"} title={"Ep 3 | Qu'est-ce qu'ils pensent? - Le féminisme en Tunisie"} duration={"50:20"}
                            />
                        </div>
                        <div className='p-1'>
                            <SmallPost
                                img={img5} creator={"Oss9oli"} title={"Ep 3 | Qu'est-ce qu'ils pensent? - Le féminisme en Tunisie"} duration={"50:20"}
                            />
                        </div>
                        <div className='p-1'>
                            <SmallPost
                                img={img6} creator={"Oss9oli"} title={"Ep 3 | Qu'est-ce qu'ils pensent? - Le féminisme en Tunisie"} duration={"50:20"}
                            />
                        </div>
                    </div>

                    <div className={`flex mt-24 justify-between items-end ${!open ? "md:px-44" : ""}`}>
                        <span className='text-orng2 text-5xl'>CONTINUER L'ECOUTE</span>
                        <span className='text-ka7ouli underline underline-offset-8 sm:text-lg'>
                            Voir plus {'>'}
                        </span>
                    </div>

                    <div className={`flex xl:flex-row flex-col p-6 flex-wrap  items-center ${!open ? "md:px-44" : ""}`}>
                        <div className='p-1'>
                            <SmallPost
                                img={img7} creator={"Oss9oli"} title={"Ep 3 | Qu'est-ce qu'ils pensent? - Le féminisme en Tunisie"} duration={"50:20"}
                            />
                        </div>
                        <div className='p-1'>
                            <SmallPost
                                img={img8} creator={"Oss9oli"} title={"Ep 3 | Qu'est-ce qu'ils pensent? - Le féminisme en Tunisie"} duration={"50:20"}
                            />
                        </div>
                        <div className='p-1'>
                            <SmallPost
                                img={img9} creator={"Oss9oli"} title={"Ep 3 | Qu'est-ce qu'ils pensent? - Le féminisme en Tunisie"} duration={"50:20"}
                            />
                        </div>
                        <div className='p-1'>
                            <SmallPost
                                img={img10} creator={"Oss9oli"} title={"Ep 3 | Qu'est-ce qu'ils pensent? - Le féminisme en Tunisie"} duration={"50:20"}
                            />
                        </div>
                    </div>
                </a.div>
            </div>
        </div>
    )
}
