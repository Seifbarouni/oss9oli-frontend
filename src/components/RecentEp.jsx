import React from 'react'
import img1 from '../assets/images/1.png'
import play_2 from '../assets/svgs/play_2.svg'

export const RecentEp = ({
    episodeNumber,
    episodeName,
    createdAt,
    episodeDescription,
    podcastName,
    channelName,
    episodeDuration,
    tags
}) => {
    return (
        <div className='flex space-x-8'>
            <div
                className='lg:flex hidden  flex-col justify-center items-center md:w-96 md:h-96 h-44 w-44 bg-gray-100 rounded-3xl shadow-lg bg-cover bg-center border border-black'
                style={{
                    backgroundImage: `url(${img1})`,
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
                <div className='flex justify-between'>
                    <div className='flex items-start space-x-3'>
                        <span className='h-12 w-12 bg-gris border border-black rounded-full'></span>
                        <span>{channelName}</span>
                    </div>
                    <div className='text-gris3'>{createdAt}</div>
                </div>
                <div className='flex mt-4'>
                    <div className="z-50 relative">
                        <div
                            className="text-white text-2xl bg-orng2 rounded-full px-6 text-center cursor-pointer border border-black z-40 transition duration-150 hover:-translate-x-1 hover:translate-y-1 flex items-center space-x-2"
                        >
                            <span>{episodeDuration}</span>
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
                        {tags.map((tag, index) => {
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
