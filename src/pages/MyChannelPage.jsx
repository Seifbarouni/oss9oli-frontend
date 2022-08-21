import { PlusIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { AuthenticatedNavbar } from '../components/nav/AuthenticatedNavbar'
import { Sidebar } from '../components/nav/Sidebar'
import { SmallScreenNav } from '../components/nav/SmallScreenNav'
import { Seperator } from '../components/Seperator'
import { useOpen } from '../store/store'
import { Podcast } from '../components/Podcast'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from "axios"
import { useCookies } from 'react-cookie';

export const MyChannelPage = () => {
    const open = useOpen((state) => state.open)
    const [cookies] = useCookies(['oss9oli']);
    const [myPodcasts, setMyPodcasts] = useState([])
    const [myChannel, setMyChannel] = useState({})
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_PODCAST_SERVICE}/api/v1/podcasts/user`,
            { headers: { Authorization: `Bearer ${cookies.oss9oli}` } }).then(res => {
                setMyPodcasts(res.data.data.pods)
                setMyChannel(res.data.data.channel)
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
                    {myPodcasts.map((podcast) => (
                        <div className={`mt-3 ${!open ? "md:px-44" : ""}`}>
                            <Podcast img={myChannel.imageUrl} creator={myChannel.name} title={podcast.title} duration={podcast.length} description={podcast.description} w={"w-full"} h={"sm:h-96"} />
                        </div>
                    ))}
                    {myPodcasts.length === 0 &&
                        <div className='pb-[665px]'>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}