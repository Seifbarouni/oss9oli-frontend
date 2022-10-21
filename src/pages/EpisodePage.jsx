import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
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
import { Podcast } from '../components/Podcast'
import axios from 'axios'

let tags = ["Féminité", "Culture", "Art", "Economie", "Société"]

export const EpisodePage = () => {
    const open = useOpen((state) => state.open)
    const { id } = useParams()
    const [episodes, setEpisodes] = useState()
    const [loading, setLoading] = useState(false)
    const [podcastDescription, setPodcastDescription] = useState("")
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
        // api / v1 / episodes / podcast /: id
        if (id.length !== 24 || !id.match(/^[0-9a-fA-F]{24}$/)) {
            navigate("/accueil")
        } else {
            // get episodes by podcast id
            const getEpisodes = async () => {
                try {
                    setLoading(true)
                    const res = await axios.get(`${process.env.REACT_APP_PODCAST_SERVICE}/api/v1/episodes/podcast/find/${id}`
                    )
                    console.log(res.data.data)
                    setEpisodes(res.data.data)
                    if (res.data.data.length > 0) {
                        setPodcastDescription(res.data.data[0].podcastId.description)
                    }

                } catch (err) {
                    console.log(err)
                    navigate("/accueil")
                }
            }
            getEpisodes()
            setLoading(false)

        }
    }, [])
    return (
        <div className='flex flex-col realtive z-50 h-full'>
            <AuthenticatedNavbar />
            {/* <Seperator mt={0} /> */}
            <div className='absolute right-0 top-32  '>
                <img src={green_blob} alt="" className='' />
            </div>
            <div className='flex z-40'>
                <div>
                    {open && <div className='lg:flex hidden sticky top-24'>
                        <Sidebar selected={"channel"} />
                    </div>}
                </div>
                {open && <div className='flex lg:hidden absolute top-0 z-50'>
                    <SmallScreenNav selected={"channel"} />
                </div>}

                <div className='flex flex-col z-40 w-full p-4 mb-96'>
                    <div className={`mt-4 ${!open ? "md:px-44" : ""}`}>
                        <Search />
                    </div>
                    <div className={`flex mt-8 overflow-x-scroll space-x-2 space-y-1 justify-center flex-wrap ${!open ? "md:px-44" : ""}`}>
                        {tags.map((tag, index) => (
                            <Tag title={tag} actif={actifs[index]} setActif={() => setActif(index)} />
                        ))}
                    </div>
                    {!loading && episodes !== undefined && episodes.length !== 0 && <div className='mt-24 xl:px-24'>
                        <RecentEp
                            episodeId={episodes[0]._id}
                            podcastId={episodes[0].podcastId}
                            img={episodes[0].podcastId?.image}
                            episodeNumber={episodes[0].episodeNumber}
                            episodeName={episodes[0].title}
                            createdAt={episodes[0].createdAt}
                            episodeDescription={episodes[0].description}
                            episodeDuration={episodes[0].length}
                            podcastName={episodes[0].podcastId?.name}
                            tags={episodes[0].tags}
                            guest={episodes[0].guest}
                            status={episodes[0].status}
                        />
                    </div>}
                    <div className='mt-36 xl:px-24 text-4xl font-bold'>
                        Plus d'épisodes
                    </div>
                    {/* grid of two columns */}
                    {!loading && episodes && <div className='mt-12 xl:px-24 grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {episodes.map((ep, index) => {
                            return (
                                <Podcast
                                    key={index}
                                    episodeId={ep._id}
                                    podcastId={ep.podcastId}
                                    img={ep.podcastId?.image}
                                    creator={ep.podcastId?.name}
                                    title={ep.title}
                                    duration={ep.length}
                                    description={ep.description}
                                    status={ep.status}
                                    guest={ep.guest}
                                    listens={ep.numberOfListeners}
                                    number={ep.episodeNumber}
                                    tags={ep.tags}
                                    w={"w-full"} h={"sm:h-96"}

                                />
                            )
                        })}

                    </div>}
                    <div className='mt-36 xl:px-24 text-4xl font-bold'>
                        Description du podcast
                    </div>
                    <div className='mt-4 xl:px-24 w-2/3 text-lg'>
                        {podcastDescription}
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
