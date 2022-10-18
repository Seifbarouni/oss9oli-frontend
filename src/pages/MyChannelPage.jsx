import { PlusIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { AuthenticatedNavbar } from '../components/nav/AuthenticatedNavbar'
import { Sidebar } from '../components/nav/Sidebar'
import { SmallScreenNav } from '../components/nav/SmallScreenNav'
import { Seperator } from '../components/Seperator'
import { useOpen } from '../store/store'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from "axios"
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom'
import { decode } from '../jwt/jwt'
import { PodcastList } from '../components/PodcastList'

export const MyChannelPage = () => {
    const open = useOpen((state) => state.open)
    const [cookies] = useCookies(['oss9oli']);
    const [myPodcasts, setMyPodcasts] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (Object.entries(cookies).length === 0) {
            navigate("/auth")
        }
        const { pack } = decode(cookies.oss9oli)
        if (pack !== "producer_pack") {
            navigate("/accueil")
        }
        setLoading(true)
        axios.get(`${process.env.REACT_APP_PODCAST_SERVICE}/api/v1/episodes/user`,
            { headers: { Authorization: `Bearer ${cookies.oss9oli}` } }).then(res => {
                setMyPodcasts(res.data.data)
                setLoading(false)
            }).catch(err => console.log(err))
    }, [])
    return (
        <div className='flex flex-col'>
            <AuthenticatedNavbar />
            <Seperator mt={0} />
            <div className='flex'>
                {open && <div className='lg:flex hidden'>
                    <Sidebar selected={"mypods"} />
                </div>}
                {open && <div className='flex lg:hidden absolute top-0 z-50'>
                    <div className='sticky'>
                        <SmallScreenNav selected={"mypods"} />
                    </div>
                </div>}
                <div className='flex flex-col z-40 w-full p-12'>
                    <div className={`flex mt-4 justify-between items-end ${!open ? "md:px-44" : ""}`}>
                        <span className='text-orng2 text-5xl'>MES PODCASTS</span>
                        <span className='text-ka7ouli h-16 w-16 rounded-full p-2 hover:bg-gray-200 cursor-pointer transition ease-in-out duration-300' title='Ajouter podcast'>
                            <Link to={"/addpod"}>
                                <PlusIcon className='' />
                            </Link>
                        </span>

                    </div>
                    {loading && <div className='flex justify-center items-center mt-10'>
                        <div className="animate-spin rounded-full h-24 w-24 border-b-2 border-orng2"></div>
                    </div>}
                    {myPodcasts.map((podcast) => {
                        return (
                            <div className={`mt-3 ${!open ? "md:px-44" : ""}`}>
                                <div className='text-orng2 text-xl pb-4'>{podcast.name}:</div>
                                <PodcastList list={podcast.episodes} />
                            </div>
                        )
                    })}
                    {myPodcasts.length === 0 &&
                        <div className='pb-[665px]'>
                        </div>}

                </div>
            </div>
        </div>
    )
}