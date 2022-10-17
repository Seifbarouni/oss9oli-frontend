import React from 'react'
import img10 from '../assets/images/10.png'
import play_2 from '../assets/svgs/play_2.svg'
import star_pod from '../assets/svgs/star_pod.svg'



export const PodBanner = () => {
    return (
        <div className='flex flex-col rounded-3xl bg-white border border-black relative'>
            <div className='bg-akhdher w-full h-96 absolute opacity-30 rounded-3xl z-20'></div>
            <div
                className='bg-cover bg-center h-96 w-full rounded-3xl p-6  sm:pt-32 pt-4 border border-black text-white flex flex-col space-y-3 px-12 '
                style={
                    {
                        backgroundImage: `url(${img10})`,
                    }
                }
            >

                <div className='flex flex-col space-y-2 z-50'>
                    <span className='text-lg'>8 épisodes</span>
                    <span className='font-bold text-4xl'>Le travail en Tunisie</span>
                </div>
                <span className='text-lg z-50 h-44 overflow-y-scroll'>
                    Immersion sonore à l'île de Pâques, aujourd'hui officiellement « Rapa Nui », du nom du peuple originaire de Polynésie qui s'y est installé. C'est l'une des îles habitées les plus isolées au monde, perdue à des milliers de kilomètres entre Tahiti et les côtes chiliennes.
                </span>

                <div className='flex sm:flex-row flex-col items-center sm:space-x-8 sm:space-y-0 space-y-2 z-50'>
                    <div className="z-50 relative" >
                        <div
                            className="text-white text-2xl bg-orng2 rounded-full px-12 text-center cursor-pointer border border-black z-40 transition duration-150 hover:-translate-x-1 hover:translate-y-1 flex items-center space-x-2 py-2"
                        >
                            <span>Ecouter</span>
                            <span>
                                <img src={play_2} alt="" />
                            </span>
                        </div>
                        <div
                            className="border border-black rounded-full   px-12 absolute right-1 top-1 -z-20 w-full text-2xl py-2"
                        >
                            <span className="invisible"> Ecouter </span>
                        </div>
                    </div>
                    <div className='cursor-pointer'>
                        <img src={star_pod} alt="" />
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-b-3xl p-3 text-center text-akhdher2 font-bold text-xl cursor-pointer'>
                + Ecouter la playlist
            </div>
        </div>
    )
}
