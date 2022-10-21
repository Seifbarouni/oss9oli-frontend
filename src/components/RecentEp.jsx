import React, { useState, useEffect } from 'react'
import play_2 from '../assets/svgs/play_2.svg'
import { useAudio } from '../store/store'
import axios from 'axios'

export const RecentEp = ({
    img,
    episodeNumber,
    episodeName,
    createdAt,
    episodeDescription,
    podcastName,
    episodeDuration,
    podcastId,
    tags,
    guest,
    episodeId,
    status

}) => {

    const [allTags, setAllTags] = useState([])
    // format date
    const formatDate = (date) => {
        let d = new Date(date)
        let month = d.getMonth() + 1
        let day = d.getDate()
        let year = d.getFullYear()
        return `${day}/${month}/${year}`
    }
    const [channelName, setChannelName] = useState("")
    const setAudioData = useAudio((state) => state.setAudioData)
    const openAudio = useAudio((state) => state.openAudio)

    const convertDurationToString = () => {
        let quotient = Math.floor(episodeDuration / 60) > 10 ? Math.floor(episodeDuration / 60) : "0" + Math.floor(episodeDuration / 60);

        let remainder = episodeDuration % 60 > 10 ? episodeDuration % 60 : "0" + episodeDuration % 60;

        return quotient + ":" + remainder
    }

    const newAudio = () => {
        openAudio()
        setAudioData(
            {
                title: `${episodeName} avec ${guest} : ${podcastId.name}(${episodeName}) - ${channelName}`,
                img,
                creator: channelName,
                duration: episodeDuration,
                podcastId: episodeId,
                channelId: podcastId.channelId
            }
        )
    }

    useEffect(() => {
        let t = tags !== undefined ? tags[0].split(",") : []
        t.shift()
        setAllTags(t)
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
        <div className='flex space-x-8'>
            <div
                className='lg:flex hidden  flex-col justify-center items-center md:w-96 md:h-96 h-44 w-44 bg-gray-100 rounded-3xl shadow-lg bg-cover bg-center border border-black'
                style={{
                    backgroundImage: `url(data:${img?.contentType};base64,${img?.data?.toString('base64')})`,
                }}
            ></div>
            <div className='flex flex-col w-2/3'>
                <div className='flex items-center space-x-8 text-lg'>
                    <span>Episode {episodeNumber}</span>
                    <span className='text-white bg-akhdher p-1 px-4 rounded-full'>récent</span>
                </div>
                <div className='text-3xl mt-4'>
                    {episodeName}
                </div>
                <div className='text-sm '>
                    {podcastName}
                </div>
                <div className='h-32 overflow-y-scroll text-lg mt-1'>
                    {episodeDescription}
                </div>
                <div className='flex justify-between mt-4'>
                    <div className='flex items-start space-x-3'>
                        <span className='h-12 w-12 bg-gris border border-black rounded-full'></span>
                        <span>{channelName}</span>
                    </div>
                    <div className='text-gris3'>{formatDate(createdAt)}</div>
                </div>
                <div className='flex mt-4'>
                    <div className="z-50 relative" onClick={() => newAudio()}>
                        <div
                            className="text-white text-2xl bg-orng2 rounded-full px-6 text-center cursor-pointer border border-black z-40 transition duration-150 hover:-translate-x-1 hover:translate-y-1 flex items-center space-x-2"
                        >
                            <span>{convertDurationToString()}</span>
                            <span>
                                <img src={play_2} alt="" />
                            </span>
                        </div>
                        <div
                            className="border border-black rounded-full   px-6 absolute right-1 top-1 -z-20 w-full text-2xl"
                        >
                            <span className="invisible"> {episodeDuration} </span>
                        </div>
                    </div>
                </div>
                <div className='flex items-center space-x-3 mt-12'>
                    <div>
                        Tags:
                    </div>
                    <div className='flex sm:space-x-2 sm:space-y-0 sm:flex-row flex-col space-y-2 items-center'>
                        {allTags?.map((tag, index) => {
                            return (
                                <span key={index} className='bg-gris rounded-3xl border border-black cursor-pointer px-4 p-1'>{tag}</span>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
