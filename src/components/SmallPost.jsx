import React from 'react'
import play_2 from '../assets/svgs/play_2.svg'
import { useAudio } from '../store/store'

export const SmallPost = ({ img, duration, title, creator, description }) => {
    const setAudioData = useAudio((state) => state.setAudioData)
    const openAudio = useAudio((state) => state.openAudio)
    const id = '1'
    const newAudio = () => {
        openAudio()
        setAudioData(
            {
                title,
                img,
                creator,
                duration,
                id
            }
        )
    }
    return (
        <div className=' flex-col bg-white rounded-3xl border border-black justify-between h-[400px] w-72 p-1'>
            <div className='h-1/2 w-full rounded-3xl bg-cover border border-black'
                style={
                    {
                        backgroundImage: `url(${img})`
                    }
                }
            >
            </div>
            <div className='w-full flex flex-col p-4 justify-center '>
                <div className=''>{title}</div>
                <div className='flex justify-between items-center mt-2 text-sm'>
                    <div>Par <span className='text-orange-300'>{creator}</span></div>
                    <div className="z-50 relative" onClick={() => newAudio()}>
                        <div
                            className="text-white text-sm bg-orng2 rounded-full px-6 text-center border border-black z-40 transition duration-150 hover:-translate-x-1 hover:translate-y-1 flex items-center space-x-2"
                        >
                            <span>{duration}</span>
                            <span>
                                <img src={play_2} alt="" />
                            </span>
                        </div>
                        <div
                            className="border border-black rounded-full   px-6 absolute right-1 top-1 -z-20 w-full text-sm flex"
                        >
                            <span className="invisible"> {duration} </span>
                            <span className='invisible'>
                                <img src={play_2} alt="" />
                            </span>
                        </div>
                    </div>
                </div>
                {/* <div className='border-b border-gray-500 mt-2 mb-4'></div>
                <div className='overflow-y-scroll text-xs h-22'>
                    {description}
                </div> */}
            </div>
        </div>
    )
}
