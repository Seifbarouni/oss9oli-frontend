import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import img1 from '../assets/images/1.png'
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
import { Seperator } from '../components/Seperator'
import { SmallPost } from '../components/SmallPost'
import { Tag } from '../components/Tag'
import { useOpen } from '../store/store'
import axios from 'axios'
let tags = ["Féminité", "Culture", "Art", "Economie", "Société"]
export const HomePage = () => {
    const open = useOpen((state) => state.open)
    const [actifs, setActifs] = useState(new Array(tags.length).fill(false))
    const [podcasts, setPodcasts] = useState([])
    
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_PODCAST_SERVICE}/api/v1/podcasts`).then(res=>{
            setPodcasts(res.data.data)
            console.log(res.data.data)
        }).catch(err=> console.log(err))

    }, [])

    const setActif = (index)=>{
        var temp = [...actifs]
        temp[index] = !temp[index]
        setActifs(temp)
    }
    const getPodcastsBySearch = (search)=>{
        let searchTags = []
        for(let i =0; i<tags.length; i++){
            if(actifs[i]) searchTags.push(tags[i])
        }

        axios.get(`${process.env.REACT_APP_PODCAST_SERVICE}/api/v1/podcasts?search=${search}&actifs=${JSON.stringify(searchTags)}`).then(res=>{
            setPodcasts(res.data.data)   
            console.log(res.data.data)

        }).catch(err=> console.log(err))

    }
    return (
        <div className='flex flex-col '>
            <AuthenticatedNavbar />
            <Seperator mt={0} />
            <div className='flex w-full'>
                {open && <div className='lg:flex hidden'>
                    <Sidebar selected={"accueil"} />
                </div>}
                {open && <div className='flex lg:hidden absolute top-0 z-50'>
                    <div className='sticky'>
                        <SmallScreenNav selected={"accueil"} />
                    </div>
                </div>}
                <div className='flex flex-col z-40 w-full p-4'>
                    <div className={`mt-4 ${!open ? "md:px-44" : ""}`}>
                        <Search search={getPodcastsBySearch}/>
                    </div>
                    <div className={`flex mt-8 overflow-x-scroll space-x-2 space-y-1 justify-center flex-wrap ${!open ? "md:px-44" : ""}`}>
                        {tags.map((tag, index)=>(
                            <Tag title={tag} actif={actifs[index]} setActif={()=>setActif(index)} />
                        ))}
                    </div>
                    <div className={`flex mt-24 justify-between items-end ${!open ? "md:px-44" : ""}`}>
                        <span className='text-orng2 text-5xl'>ACTUALITE</span>
                        <span className='text-ka7ouli underline underline-offset-8 sm:text-lg'>
                            Voir plus {'>'}
                        </span>
                    </div>
                    {podcasts.map((podcast)=>(
                        <div className={`mt-3 ${!open ? "md:px-44" : ""}`}>

                            <Podcast podcastId={podcast._id}  img={podcast.channelId.imageUrl} creator={podcast.channelId.name} title={podcast.title} duration={podcast.length} description={podcast.description} w={"w-full"} h={"sm:h-96"} />
                        </div>
                    ))}
                    
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
                </div>
            </div>
        </div>
    )
}
