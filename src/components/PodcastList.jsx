import React from 'react'
import { Podcast } from './Podcast'

export const PodcastList = ({ list }) => {
    return (
        <div className='flex flex-col space-y-4'>
            {list.length === 0 && <div className='text-ka7ouli text-2xl'>
                No episodes yet
            </div>}
            {list.map((item) => (
                <Podcast
                    podcastId={item.podcastId}
                    episodeId={item._id}
                    img={item.podcastId.image}
                    creator={item.podcastId.name}
                    title={item.title}
                    duration={item.length}
                    description={item.description}
                    w={"w-full"} h={"sm:h-96"}
                    status={item.status}
                    listens={item.numberOfListeners}
                    guest={item.guest}
                    number={item.episodeNumber}
                    tags={item.tags} />
            ))}
        </div>
    )
}
