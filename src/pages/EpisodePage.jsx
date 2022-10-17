import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { decode } from '../jwt/jwt'
import { useCookies } from 'react-cookie'
import { useOpen } from '../store/store'
import { Seperator } from '../components/Seperator'
import { SmallScreenNav } from '../components/nav/SmallScreenNav'
import { Sidebar } from '../components/nav/Sidebar'
import { Search } from '../components/Search'
import { Tag } from '../components/Tag'
import { AuthenticatedNavbar } from '../components/nav/AuthenticatedNavbar'
import green_blob from '../assets/svgs/green_blob.svg'
import { RecentEp } from '../components/RecentEp'

let tags = ["Féminité", "Culture", "Art", "Economie", "Société"]

export const EpisodePage = () => {
    const open = useOpen((state) => state.open)
    const [podcasts, setPodcasts] = useState([])
    const [actifs, setActifs] = useState(new Array(tags.length).fill(false))

    const navigate = useNavigate()
    const [cookies] = useCookies(['oss9oli']);
    const user = decode(cookies.oss9oli)

    const setActif = (index) => {
        var temp = [...actifs]
        temp[index] = !temp[index]
        setActifs(temp)
    }

    useEffect(() => {
        if (Object.entries(cookies).length === 0) {
            navigate("/auth")
        }
    }, [])
    return (
        <div className='flex flex-col realtive z-50 h-full'>
            <AuthenticatedNavbar />
            <Seperator mt={0} />
            <div className='absolute right-0 top-32  '>
                <img src={green_blob} alt="" className='' />
            </div>
            <div className='flex z-40'>
                {open && <div className='lg:flex hidden'>
                    <Sidebar selected={"channel"} />
                </div>}
                {open && <div className='flex lg:hidden absolute top-0 z-50'>
                    <SmallScreenNav selected={"channel"} />
                </div>}

                <div className='flex flex-col z-40 w-full p-4'>
                    <div className={`mt-4 ${!open ? "md:px-44" : ""}`}>
                        <Search />
                    </div>
                    <div className={`flex mt-8 overflow-x-scroll space-x-2 space-y-1 justify-center flex-wrap ${!open ? "md:px-44" : ""}`}>
                        {tags.map((tag, index) => (
                            <Tag title={tag} actif={actifs[index]} setActif={() => setActif(index)} />
                        ))}
                    </div>
                    <div className='px-44'>
                        <RecentEp />
                    </div>
                </div>

            </div>
        </div>
    )
}
