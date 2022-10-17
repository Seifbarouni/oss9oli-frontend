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
import img1 from '../assets/images/1.png'
import { RecentEp } from '../components/RecentEp'
import { Podcast } from '../components/Podcast'

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
                    <div className='mt-24 xl:px-24'>
                        <RecentEp
                            episodeNumber={1}
                            episodeName="Pensées révolutionnaires - الثورة على الواقع"
                            createdAt="Jan 14, 2023"
                            episodeDescription="Les manifestations débutent le 17 décembre 2010, après l'immolation par le feu d'un jeune vendeur ambulant de fruits et légumes à Sidi Bouzid, Mohamed Bouazizi, dont la marchandise avait été confisquée par les autorités10 et à la suite d'une agression physique subie de la part d'une policière, Fadia Hamdi.11"
                            episodeDuration="1:30:00"
                            podcastName="podcast name"
                            channelName="channel name"
                            tags={["Politique", "Revolution", "Tunisie", "Liberte"]}
                        />
                    </div>
                    <div className='mt-36 xl:px-24 text-4xl font-bold'>
                        Plus d'épisodes
                    </div>
                    {/* grid of two columns */}
                    <div className='mt-12 xl:px-24 grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <Podcast podcastId={"id"}
                            img={img1}
                            creator={"creator"}
                            title={"title"}
                            duration={120}
                            description={"description"}
                            status={"actif"}
                            guest={"guest"}
                            listens={120}
                            number={1}
                            tags={["Politique,Revolution,Tunisie,Liberte"]}
                            w={"w-full"} h={"sm:h-96"} />
                        <Podcast podcastId={"id"}
                            img={img1}
                            creator={"creator"}
                            title={"title"}
                            duration={120}
                            description={"description"}
                            status={"actif"}
                            guest={"guest"}
                            listens={120}
                            number={1}
                            tags={["Politique,Revolution,Tunisie,Liberte"]}

                            w={"w-full"} h={"sm:h-96"} />
                        <Podcast podcastId={"id"}
                            img={img1}
                            creator={"creator"}
                            title={"title"}
                            duration={120}
                            description={"description"}
                            status={"actif"}
                            guest={"guest"}
                            listens={120}
                            number={1}
                            tags={["Politique,Revolution,Tunisie,Liberte"]}
                            w={"w-full"} h={"sm:h-96"} />
                        <Podcast podcastId={"id"}
                            img={img1}
                            creator={"creator"}
                            title={"title"}
                            duration={120}
                            description={"description"}
                            status={"actif"}
                            guest={"guest"}
                            listens={120}
                            number={1}
                            tags={["Politique,Revolution,Tunisie,Liberte"]}

                            w={"w-full"} h={"sm:h-96"} />

                    </div>
                    <div className='mt-36 xl:px-24 text-4xl font-bold'>
                        Description du podcast
                    </div>
                    <div className='mt-4 xl:px-24 w-2/3 text-lg'>
                        Les manifestations débutent le 17 décembre 2010, après l'immolation par le feu d'un jeune vendeur ambulant de fruits et légumes à Sidi Bouzid, Mohamed Bouazizi, dont la marchandise avait été confisquée par les autorités10 et à la suite d'une agression physique subie de la part d'une policière, Fadia Hamdi.11
                    </div>
                    <div className='mt-36 xl:px-24 text-4xl font-bold'>
                        Informations sur le créateur
                    </div>
                    <div className='mt-4 xl:px-24 w-2/3 text-lg'>
                        Les manifestations débutent le 17 décembre 2010, après l'immolation par le feu d'un jeune vendeur ambulant de fruits et légumes à Sidi Bouzid, Mohamed Bouazizi, dont la marchandise avait été confisquée par les autorités10 et à la suite d'une agression physique subie de la part d'une policière, Fadia Hamdi.11
                    </div>
                </div>



            </div>
        </div>
    )
}
