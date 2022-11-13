import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import play_2 from '../assets/svgs/play_2.svg'
import star_pod from '../assets/svgs/star_pod.svg'
import { useAudio } from '../store/store'



export const PodBanner = ({ img, name, desc, podcastId, listEps }) => {
    const [episodes, setEpisodes] = useState([])
    const [showEps, setShowEps] = useState(false)
    const setAudioData = useAudio((state) => state.setAudioData)
    const openAudio = useAudio((state) => state.openAudio)

    const convertDurationToString = (d) => {
        let quotient = Math.floor(d / 60) > 10 ? Math.floor(d / 60) : "0" + Math.floor(d / 60);

        let remainder = d % 60 > 10 ? d % 60 : "0" + d % 60;

        return quotient + ":" + remainder
    }

    const newAudio = (title, guest, podcastId, number, creator, img, duration, episodeId) => {
        openAudio()
        setAudioData(
            {
                title: `${title} avec ${guest} : ${podcastId.name}(${number}) - ${creator}`,
                img,
                creator,
                duration,
                podcastId: episodeId,
                channelId: podcastId.channelId
            }
        )
    }

    const showData = async () => {

        if (listEps === true) {
            setShowEps(true)
            // get episodes by podcastId
            try {
                const resp = await axios.get(`${process.env.REACT_APP_PODCAST_SERVICE}/api/v1/episodes/podcast/find/${podcastId}`)
                console.log(resp.data.data)
                setEpisodes(resp.data.data)
            } catch (err) {
                console.log(err)
            }
        }
    }

    const deleteEpisode = async (episodeId) => {
        try {
            const resp = await axios.delete(`${process.env.REACT_APP_PODCAST_SERVICE}/api/v1/episodes/${episodeId}`)
            console.log(resp.data.data)
            // remove episode from episodes
            const newEpisodes = episodes.filter(episode => episode._id !== episodeId)
            setEpisodes(newEpisodes)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='flex flex-col rounded-3xl bg-white border border-black relative'>
            <div className='bg-akhdher w-full h-96 absolute opacity-30 rounded-3xl z-20'></div>
            <div
                className='bg-cover bg-center h-96 w-full rounded-3xl p-6  sm:pt-32 pt-4 border border-black text-white flex flex-col space-y-3 px-12 '
                style={
                    {
                        backgroundImage: `url(data:${img?.contentType};base64,${img?.data?.toString('base64')})`,
                    }
                }
            >

                <div className='flex flex-col space-y-2 z-30'>
                    <span className='text-lg'>8 épisodes</span>
                    <Link
                        to={`/episode/${podcastId}`}
                    >
                        <span className='font-bold text-4xl hover:underline'>{name}</span>
                    </Link>
                </div>
                <span className='text-lg z-30 h-44 overflow-y-scroll'>
                    {desc}
                </span>

                <div className='flex sm:flex-row flex-col items-center sm:space-x-8 sm:space-y-0 space-y-2 z-40'>
                    <div className="z-50 relative" >
                        <div
                            className="text-white text-2xl bg-orng2 rounded-full px-12 text-center cursor-pointer border border-black z-40 transition duration-150 hover:-translate-x-1 hover:translate-y-1 flex items-center space-x-2 py-2"
                        >
                            <span>Ecouter</span>
                            <span>
                                <img src={play_2} alt="" />
                            </span>
                        </div>
                        <div
                            className="border border-black rounded-full   px-12 absolute right-1 top-1 -z-20 w-full text-2xl py-2"
                        >
                            <span className="invisible"> Ecouter </span>
                        </div>
                    </div>
                    <div className='cursor-pointer'>
                        <img src={star_pod} alt="" />
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-b-3xl p-3 text-center ' >


                <span
                    className='text-akhdher2 font-bold text-xl cursor-pointer'
                    onClick={() => {
                        if (showEps === false) {
                            showData()
                        }
                        else {
                            setShowEps(false)
                        }
                    }}
                >
                    {listEps === false && showEps === false ? <Link
                        to={`/episode/${podcastId}`}
                    >
                        + Ecouter la playlist

                    </Link> : 'Playlist'}
                </span>

                {showEps === true &&
                    <div className='flex flex-col space-y-2 mt-1'>
                        {episodes.map((ep) => (
                            <div>
                                <div className='flex flex-col space-y-2 mt-1'>
                                    <div
                                    >
                                        <div className='flex space-x-4 justify-between'>
                                            <div className='flex space-x-2'>
                                                <div className='xl:flex hidden h-20 w-20 rounded-lg border border-black bg-cover bg-center'
                                                    style={
                                                        {
                                                            backgroundImage: `url(data:${img?.contentType};base64,${img?.data?.toString('base64')})`
                                                        }
                                                    }
                                                >
                                                </div>
                                                <div className='text-black text-lg'>
                                                    {ep.title}
                                                </div>
                                            </div>
                                            <div className='flex space-x-2'>
                                                <div className="z-40 relative" onClick={() => newAudio(
                                                    ep.title, ep.guest, ep.podcastId, ep.episodeNumber, ep.podcastId.name, img, ep.length, ep._id
                                                )} >
                                                    <div
                                                        className="text-white text-2xl bg-orng2 rounded-full px-6 text-center cursor-pointer border border-black z-40 transition duration-150 hover:-translate-x-1 hover:translate-y-1 flex items-center space-x-2"
                                                    >
                                                        <span>{convertDurationToString(ep.length)}</span>
                                                        <span>
                                                            <img src={play_2} alt="" />
                                                        </span>
                                                    </div>
                                                    <div
                                                        className="border border-black rounded-full   px-6 absolute right-1 top-1 -z-20 w-full text-2xl"
                                                    >
                                                        <span className="invisible"> {convertDurationToString(ep.duration)} </span>
                                                    </div>
                                                </div>
                                                <div className="z-40 relative"
                                                    onClick={() => deleteEpisode(ep._id)}
                                                >
                                                    <div
                                                        className="text-white text-2xl bg-gris rounded-full px-6 text-center cursor-pointer border border-black z-40 transition duration-150 hover:-translate-x-1 hover:translate-y-1 flex items-center space-x-2"
                                                    >
                                                        X
                                                    </div>
                                                    <div
                                                        className="border border-black rounded-full   px-6 absolute right-1 top-1 -z-20 w-full text-2xl"
                                                    >
                                                        X
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className=''>
                            <div>
                                <div className='flex flex-col space-y-2 mt-1'>
                                    <div
                                    >
                                        <div className='flex space-x-4 justify-between'>
                                            <div className='flex space-x-2 opacity-10'>
                                                <div className='xl:flex hidden h-20 w-20 rounded-lg border border-black bg-cover bg-center'
                                                    style={
                                                        {
                                                            backgroundImage: `url(data:${img?.contentType};base64,${img?.data?.toString('base64')})`
                                                        }
                                                    }
                                                >
                                                </div>
                                                <div className='text-black text-lg'>
                                                    brrrrrrrrrrrrrrrrr
                                                </div>
                                            </div>
                                            <div className='flex space-x-2'>
                                                <Link
                                                    to={"/addep/" + podcastId}
                                                >
                                                    <div className="z-40 relative">
                                                        <div
                                                            className="text-white text-2xl bg-ka7ouli rounded-full px-6 text-center cursor-pointer border border-black z-40 transition duration-150 hover:-translate-x-1 hover:translate-y-1 flex items-center space-x-2"
                                                        >
                                                            <span>Ajouter episode</span>
                                                        </div>
                                                        <div
                                                            className="border border-black rounded-full   px-6 absolute right-1 top-1 -z-20 w-full text-2xl"
                                                        >
                                                            <span className="invisible">
                                                                Ajouter episode
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div onClick={() => setShowEps(false)}
                            className="text-akhdher2 font-bold text-xl cursor-pointer hover:underline"
                        >
                            Fermer
                        </div>

                    </div>
                }

            </div>
        </div>
    )
}
