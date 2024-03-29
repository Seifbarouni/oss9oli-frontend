import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import play_2 from '../assets/svgs/play_2.svg'
import playlist from '../assets/svgs/playlist.svg'
import { useAudio } from '../store/store'
import axios from 'axios'
import { useCookies } from 'react-cookie'

export const Podcast = ({ podcastId, episodeId, img, title, creator, duration, description, w, h, guest, listens, number, tags, status }) => {
    let t = tags !== undefined ? tags[0].split(",") : []
    t.shift()
    const [allTags, setAllTags] = useState(t)
    const navigate = useNavigate()
    const [cookies] = useCookies(['oss9oli']);

    const convertDurationToString = () => {
        let quotient = Math.floor(duration / 60) > 10 ? Math.floor(duration / 60) : "0" + Math.floor(duration / 60);

        let remainder = duration % 60 > 10 ? duration % 60 : "0" + duration % 60;

        return quotient + ":" + remainder
    }
    const setAudioData = useAudio((state) => state.setAudioData)
    const openAudio = useAudio((state) => state.openAudio)
    const [channelName, setChannelName] = useState("")
    const newAudio = () => {
        // if (status === "actif") {
        openAudio()
        setAudioData(
            {
                title: `${title} avec ${guest} : ${podcastId.name}(${number}) - ${creator}`,
                img,
                creator,
                duration,
                podcastId: episodeId,
                channelId: podcastId.channelId,
                p: podcastId._id,
            }
        )
        //   }
    }

    const AddPlaylist = ()=>{
        axios.put(`${process.env.REACT_APP_PODCAST_SERVICE}/api/v1/playlist/later`, {
            episodeId: episodeId
        }, {
            headers: {
                Authorization: `Bearer ${cookies.oss9oli}`
            }
        }).then(res=>{
            if(res.data.success){
                console.log("success")
            }
        })
    }
    useEffect(() => {

        if (podcastId && podcastId.channelId !== undefined) {
            // get channel name request
            const getChannelName = async () => {
                try {
                    const response = await axios.get(`${process.env.REACT_APP_PODCAST_SERVICE}/api/v1/channels/${podcastId.channelId}`)
                    setChannelName(response.data.data.name)
                }
                catch (err) {
                    console.log(err)
                }
            }
            getChannelName()
        }

    }, [])


    return (
        <div className={`flex bg-white rounded-3xl border border-black justify-between ${w} ${h}`}>
            <div className='w-1/2 rounded-3xl bg-cover bg-center'
                style={
                    {
                        backgroundImage: `url(data:${img?.contentType};base64,${img?.data?.toString('base64')})`
                    }
                }
            >
            </div>
            <div className='w-full flex flex-col p-4 mt-4'>

                <div>
                    <div className='flex justify-between'>
                        <span>Episode {number}</span>
                        <div
                            onClick={() => navigate(`/episode/${podcastId?._id}`)}
                        >
                        </div>
                    </div>
                    <div
                        onClick={() => navigate(`/episode/${podcastId?._id}`)}
                    >
                        <div className='xl:text-3xl text-xl hover:underline'>{creator !== "" && title !== "" && guest !== "" ? `${title} avec ${guest}` : title}</div>
                    </div>

                </div>
                <div className='flex sm:flex-row flex-col justify-between items-center mt-4'>
                    <div className={`flex space-x-2 ${channelName === "" ? "invisible" : ""}`}>
                        <span>
                            Par
                        </span>
                        <span>
                            <div
                                onClick={() => navigate(`/channel/${podcastId.channelId}`)}
                            >
                                <span className='text-orange-300 hover:underline'>{channelName}</span>
                            </div>
                        </span>

                    </div>
                    <div className='flex space-x-2'>
                        <div>
                            <img src={playlist} alt="" onClick={AddPlaylist}/>
                        </div>

                        <div className="z-40 relative" onClick={() => newAudio()} >
                            <div
                                className="text-white text-2xl bg-orng2 rounded-full px-6 text-center border border-black z-40 transition duration-150 hover:-translate-x-1 hover:translate-y-1 flex items-center space-x-2"
                            >
                                <span>{convertDurationToString()}</span>
                                <span>
                                    <img src={play_2} alt="" />
                                </span>
                            </div>
                            <div
                                className="border border-black rounded-full   px-6 absolute right-1 top-1 -z-20 w-full text-2xl"
                            >
                                <span className="invisible"> {convertDurationToString()} </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {listens ? listens : `0`} listens
                </div>
                <div>
                    status: {status}
                </div>
                <div className='border-b border-gray-500 mt-2 mb-4'></div>
                <div className='overflow-y-scroll h-32'>
                    {description}
                </div>
                <div className='flex items-center space-x-3'>
                    <div>
                        Tags:
                    </div>
                    <div className='flex space-x-2'>
                        {allTags.map((tag, index) => {
                            return (
                                <span key={index} className='bg-gris rounded-3xl border border-black px-4 p-1'>{tag}</span>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
