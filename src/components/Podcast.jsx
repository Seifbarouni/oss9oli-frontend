import React from 'react'
import play_2 from '../assets/svgs/play_2.svg'

export const Podcast = ({ img, title, creator, duration, description, w, h }) => {
    const convertDurationToString = ()=>{
        let quotient = Math.floor(duration/60)>10? Math.floor(duration/60) :"0"+Math.floor(duration/60);

        let remainder = duration%60>10? duration%60 :"0"+duration%60;

        return quotient+":"+remainder
    }
    return (
        <div className={`flex bg-white rounded-3xl border border-black justify-between ${w} ${h}`}>
            <div className='w-1/2 rounded-3xl bg-cover'
                style={
                    {
                        backgroundImage: `url(data:${img?.contentType};base64,${img?.data.toString('base64')})`
                    }
                }
            >
            </div>
            <div className='w-full flex flex-col p-4 mt-4'>
                <div className='xl:text-3xl text-xl'>{title}</div>
                <div className='flex sm:flex-row flex-col justify-between items-center'>
                    <div>Par <span className='text-orange-300'>{creator}</span></div>
                    <div className="z-50 relative">
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
                            <span className="invisible"> {convertDurationToString()} </span>
                        </div>
                    </div>
                </div>
                <div className='border-b border-gray-500 mt-2 mb-4'></div>
                <div className='overflow-y-scroll h-32'>
                    {description}
                </div>
            </div>
        </div>
    )
}
