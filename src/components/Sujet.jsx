import React from 'react'
import old from '../assets/images/old.png'
import { JoinButton } from './buttons/JoinButton'

export const Sujet = () => {
    return (
        <div className="relative rounded-[40px] xl:w-2/3 border border-black">
            <div
                className="bg-cover rounded-[40px] h-full w-full z-50 opacity-70 relative"
                style={{
                    backgroundImage: `url(${old})`
                }}
            >
                <div className='bg-orng h-full w-full absolute opacity-80 rounded-[40px] -z-20'></div>
                <div className='bg-orange-600 h-full w-full absolute opacity-30 rounded-[40px] -z-20'></div>
                <div className=" text-white  z-20 p-10">
                    <div className='sm:text-4xl text-2xl font-bold'>
                        Le chômage.
                    </div>
                    <div className='sm:text-lg leading-tight'>
                        Quand quelqu'un est en âge de travailler, désireux et capable de travailler, mais ne peut pas trouver un emploi. Il existe différents types de causes de chômage, et la question du chômage en Tunisie en particulier est le sujet de notre prochain podcast.
                    </div>
                </div>
                <div className="z-50 sm:pb-6 sm:pr-28 pb-4 pr-20 flex justify-end">
                    <JoinButton
                        cd1={"relative z-50"}
                        cd2={"text-white font-bold text-2xl bg-asfer rounded-full py-3 px-12 text-center border border-black z-40 transition duration-150 hover:-translate-x-1 hover:translate-y-1"}
                        cd3={"border border-black rounded-full  py-3 px-12 absolute right-1 top-1 -z-20 w-full text-2xl"}
                        data={"Contribuer"}
                        to={"/auth"}
                    />
                </div>
            </div>
        </div>
    )
}
