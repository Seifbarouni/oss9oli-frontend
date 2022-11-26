import React from 'react'
import { JoinButton } from './buttons/JoinButton'
import { PlayButton } from './buttons/PlayButton'

import { Arrow } from './Arrow'
import { useNavigate } from 'react-router-dom'

export const Hero = () => {
    const navigate = useNavigate()
    return (
        <div
            className="z-30 flex lg:flex-row flex-col justify-evenly items-center mt-16  relative"
        >
            <div className="header md:text-[150px] sm:text-8xl text-6xl flex flex-col items-start">
                <span>Faites</span>
                <span>entendre</span>
                <span>votre</span>
                <span>voix</span>
            </div>
            <div className="flex flex-col sm:justify-start justify-center items-center">
                <div className="mt-28 w-full md:flex hidden items-center justify-center transition ease-in-out hover:scale-125 duration-300">
                    <PlayButton h={116} w={110} />
                </div>
                <div className="md:text-2xl mt-44 xl:w-96 xl:px-0 px-11">
                    Nous sommes un espace d'expressions libre par et pour tout le monde,
                    à travers la création, la contribution et l'hébergement des
                    podcasts.
                </div>
                <div
                    onClick={() => navigate('/auth')}
                >
                    <div className='flex'>
                        <JoinButton cd1={"lg:w-full w-3/4 mt-4 relative"} cd2={"text-white  bg-orng rounded-full py-3  px-8 text-center  border border-black z-30 transition duration-150 hover:-translate-x-1 hover:translate-y-1 font-bold md:text-base text-sm "} cd3={"border border-black rounded-full py-3 absolute w-full right-1 top-1 sm:px-0 px-2 -z-50 md:text-base text-sm "}
                            data={"JE REJOINS LA COMMUNAUTE"}
                        />
                    </div>
                </div>
            </div>
            <div className="absolute right-0 -bottom-56 2xl:hidden flex ">
                <Arrow h={216} w={211} />
            </div>
            <div className="absolute right-0 -bottom-96 2xl:flex hidden">
                <Arrow h={400} w={320} />
            </div>
        </div>
    )
}
