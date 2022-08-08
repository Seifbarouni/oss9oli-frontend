import React from 'react'
import { JoinButton } from './buttons/JoinButton'
import { PlayButton } from './buttons/PlayButton'

import { Arrow } from './Arrow'

export const Hero = () => {
    return (
        <div
            className="z-50 flex md:flex-row flex-col justify-evenly items-center mt-16 lg:px-24 px-12 relative"
        >
            <div className="header md:text-9xl text-8xl flex flex-col items-start">
                <span>Faites</span>
                <span>entendre</span>
                <span>votre</span>
                <span>voix</span>
            </div>
            <div className="flex flex-col justify-start items-center">
                <div className="mt-28 w-full md:flex hidden items-center justify-center transition ease-in-out hover:scale-125 duration-300 cursor-pointer">
                    <PlayButton h={116} w={110} />
                </div>
                <div className="text-lg mt-44 lg:w-96">
                    Nous sommes un espace d'expressions libre par et pour tout le monde,
                    à travers la création, la contribution et l'hébergement des
                    podcasts.
                </div>
                <JoinButton cd1={"w-full mt-4 relative"} cd2={"text-white font-bold bg-orng rounded-full py-3 text-center cursor-pointer border border-black z-50 transition duration-150 hover:-translate-x-1 hover:translate-y-1"} cd3={"border border-black rounded-full py-3 absolute w-full right-1 top-1  -z-50"}
                    data={"JE REJOINS LA COMMUNAUTE"}
                    to={"/auth"}
                />
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
