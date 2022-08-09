import React from 'react'
import star from '../assets/svgs/star.svg'
import dj from '../assets/images/dj.png'
import { JoinButton } from './buttons/JoinButton'

export const Events = () => {
    return (
        <div className='relative xl:w-2/3 z-50'>
            <div className='bg-white border border-black p-8 flex lg:flex-row flex-col rounded-[40px] z-50'>
                <div className='flex flex-col lg:w-1/2 relative'>
                    <div className='absolute -top-6 -left-4'>
                        <img src={star} alt="" />
                    </div>
                    <span className='text-3xl mt-8 font-bold'>Atelier transcription</span>
                    <div className='flex items-center'>
                        <span>anime par : </span>
                        <span className='text-asfer2 ml-1'>Mohamed Mohamed</span>
                    </div>
                    <div className='mt-4 leading-tight'>
                        Boostez le référencement, favorisez l'accessibilité pour l'ensemble de votre public et obtenez une précision de premier ordre.
                    </div>
                    <div className='flex mt-8 space-x-12'>
                        <div className='flex relative -space-x-6'>
                            <span className='h-16 w-16 bg-white border border-black rounded-full'></span>
                            <span className='h-16 w-16 bg-white border border-black rounded-full'></span>
                            <span className='h-16 w-16 bg-white border border-black rounded-full'></span>
                            <span className='h-16 w-16 bg-white border border-black rounded-full'></span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='font-bold text-3xl'>+20</span>
                            <span className='text-gray-400'>y participent</span>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 lg:mt-0 mt-6'>
                    <div
                        className="bg-cover rounded-[40px] w-full lg:h-2/3 h-44 -z-50 opacity-70 flex border border-black"
                        style={{
                            backgroundImage: `url(${dj})`
                        }}
                    >
                    </div>
                    <div className=' h-1/3 mt-8 flex justify-center w-full'>
                        <JoinButton
                            cd1={"relative z-50"}
                            cd2={"text-white font-bold text-2xl bg-akhdher2 rounded-full py-3 px-12 text-center cursor-pointer border border-black z-40 transition duration-150 hover:-translate-x-1 hover:translate-y-1"}
                            cd3={"border border-black rounded-full  py-3 px-12 absolute right-1 top-1 -z-20 w-full text-2xl"}
                            data={"Participer"}
                            to={"/auth"}
                        />
                    </div>
                </div>
            </div>
            <div className='absolute border border-black p-8 flex lg:flex-row flex-col rounded-[40px] top-2 -left-2 -z-10 w-full'>
                <div className='flex flex-col lg:w-1/2 relative invisible'>
                    <div className='absolute -top-6 -left-4'>
                        <img src={star} alt="" />
                    </div>
                    <span className='text-3xl mt-8 font-bold'>Atelier transcription</span>
                    <div className='flex items-center'>
                        <span>anime par : </span>
                        <span className='text-asfer2 ml-1'>Mohamed Mohamed</span>
                    </div>
                    <div className='mt-4 leading-tight'>
                        Boostez le référencement, favorisez l'accessibilité pour l'ensemble de votre public et obtenez une précision de premier ordre.
                    </div>
                    <div className='flex mt-8 space-x-12'>
                        <div className='flex relative -space-x-6'>
                            <span className='h-16 w-16 bg-white border border-black rounded-full'></span>
                            <span className='h-16 w-16 bg-white border border-black rounded-full'></span>
                            <span className='h-16 w-16 bg-white border border-black rounded-full'></span>
                            <span className='h-16 w-16 bg-white border border-black rounded-full'></span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='font-bold text-3xl'>+20</span>
                            <span className='text-gray-400'>y participent</span>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 lg:mt-0 mt-6  invisible'>
                    <div
                        className="bg-cover rounded-3xl w-full lg:h-2/3 h-44 -z-50 opacity-70 flex"
                        style={{
                            backgroundImage: `url(${dj})`
                        }}
                    >
                    </div>
                    <div className=' h-1/3 mt-8 flex justify-center w-full'>
                        <JoinButton
                            cd1={"relative z-50"}
                            cd2={"text-white font-bold text-2xl bg-akhdher2 rounded-full py-3 px-12 text-center cursor-pointer border border-black z-40 transition duration-150 hover:-translate-x-1 hover:translate-y-1"}
                            cd3={"border border-black rounded-full  py-3 px-12 absolute right-1 top-1 -z-20 w-full text-2xl"}
                            data={"Participer"}
                            to={"/auth"}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}
