import React, { useState, useEffect, useRef } from 'react'
import fastf from '../assets/svgs/fastf.svg'
import fastb from '../assets/svgs/fastb.svg'
import play from '../assets/svgs/play.svg'
import pause from '../assets/svgs/pause.svg'
import { useAudio } from '../store/store'
import axios from 'axios'


export const AudioBar = () => {
    const audioData = useAudio((state) => state.audioData)
    const [isPlaying, setIsPlaying] = useState(false)
    const [file, setFile] = useState("")
    const [fileType, setFileType] = useState("")
    const [currentTime, setCurrentTime] = useState("")
    const audioEl = useRef()
    const playPod = () => {
        setIsPlaying(true)
        audioEl.current.play()
    }
    const pausePod = () => {
        setIsPlaying(false)
        audioEl.current.pause()
    }
    const convertDurationToString = (duration) => {
        duration = Math.floor(duration)
        let quotient = Math.floor(duration / 60) > 10 ? Math.floor(duration / 60) : "0" + Math.floor(duration / 60);

        let remainder = duration % 60 > 10 ? duration % 60 : "0" + duration % 60;

        return quotient + ":" + remainder
    }
    useEffect(() => {
        // fetch the audio data using audioData.id
        axios.get(`${process.env.REACT_APP_PODCAST_SERVICE}/api/v1/podcasts/${audioData.podcastId}`)
            .then(res => {
                setFile(res.data.data.audio)
                setFileType(res.data.data.name.split(".")[1])
                audioEl.current.play()
                setIsPlaying(true) 
            }).catch(err => {
                console.log(err)
            })
        setInterval(()=>{
            setCurrentTime(audioEl?.current.currentTime)
        }, 1000)
    }, [audioData.id])
    return (
        <div className='sticky bottom-0 bg-gris4 p-2 z-40 border-t border-b border-black flex items-center justify-between px-4'>
            <audio src={`data:audio/${fileType};base64, ${file}`} ref={audioEl}></audio>
            <div className='flex w-1/3 justify-center'>
                <div className='xl:flex hidden h-20 w-20 rounded-lg border border-black'>
                    <img src={audioData.img} alt="" className='rounded-lg' />
                </div>
                <div className='flex flex-col ml-2'>
                    <span className='xl:text-xl font-bold'>{audioData.title}</span>
                    <span className='text-orng2 cursor-pointer'>
                        <span className='text-gray-600 cursor-default'>par: </span>
                        {audioData.creator}</span>
                </div>
            </div>
            <div className='flex items-center space-x-4 w-1/3 justify-center'>
                <span className='cursor-pointer'> 
                    <img src={fastb} alt="" />
                </span>
                {!isPlaying ? <span className='cursor-pointer' onClick={() => playPod()}>
                    <img src={play} alt="" />
                </span> :
                    <span className='cursor-pointer' onClick={() => pausePod()}>
                        <img src={pause} alt="" />
                    </span>
                }
                <span className='cursor-pointer'>
                    <img src={fastf} alt="" />
                </span>
            </div>
            <div className='w-1/3 flex justify-end xl:mr-4'>
                <span className='xl:text-xl'>{convertDurationToString(currentTime)}/{convertDurationToString(audioData.duration)}</span>
            </div>
        </div>
    )
}
