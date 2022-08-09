import React from 'react'
import { AuthenticatedNavbar } from '../components/nav/AuthenticatedNavbar'
import { Seperator } from '../components/Seperator'
import { Pack } from '../components/Pack'

import spark2 from '../assets/svgs/spark2.svg'
import orange_blob from '../assets/svgs/orange_blob2.svg'
import micro from '../assets/svgs/micro.svg'
import headphones from '../assets/svgs/headphones.svg'
import head from '../assets/svgs/head.svg'
//import orange_star from '../assets/svgs/orange_star.svg'

export const PacksPage = () => {
    return (
        <div className='flex flex-col relative'>
            <div className='absolute z-10 bottom-0'>
                <img src={orange_blob} alt="" />
            </div>

            <AuthenticatedNavbar />
            <Seperator mt={0} />
            <div className="relative mt-16 flex justify-center w-full">
                <div className="header md:text-5xl sm:text-4xl text-3xl relative">
                    <div className="absolute bottom-1/3 -right-8">
                        <img src={spark2} alt="" />
                    </div>
                    Choisissez votre pack
                </div>

                {/* <div className='absolute top-6 left-[600px]'>
                    <img src={orange_star} alt="" />
                </div> */}
            </div>
            <div className='mt-16 flex xl:flex-row flex-col w-full xl:px-44 px-12 xl:space-x-8 xl:space-y-0 space-y-4 justify-center items-center z-50'>
                <div className='relative'>
                    <div className='absolute -left-8 -top-14'>
                        <img src={headphones} alt="" />
                    </div>
                    <Pack
                        color={"orng2"}
                        price={3.9}
                        buttonText={"S'inscrire"}
                        title={"Auditeur"}
                        desc={"Devenez auditeur fidèle et naviguez dans la plateforme en toute liberté"}
                    >
                        <span className='text-lg'>Ecouter tous nos podcasts en <span className='font-bold'>illimité</span></span>
                        <div className='border-b-2 border-orng2 opacity-30'></div>
                        <span className='text-lg'>Naviguer dans la plateforme en toute liberté</span>
                        <div className='border-b-2 border-orng2 opacity-30'></div>
                        <span className='text-lg'>Commentez, likez et partagez vos podcasts préférés</span>
                        <div className='border-b-2 border-orng2 opacity-30'></div>
                        <span className='text-lg'>Profitez d'une expérience personnalisée</span>
                    </Pack>
                </div>
                <div className='relative'>
                    <div className='absolute -left-8 top-20'>
                        <img src={head} alt="" />
                    </div>
                    <Pack
                        color={"akhdher"}
                        price={29.9}
                        buttonText={"Rejoindre"}
                        title={"COMMUNITY PACK"}
                        desc={"Appartenez à une communauté qui fait écho"}
                    >
                        <span className='text-lg'>Echangez avec d'autres membres de la communauté</span>
                        <div className='border-b-2 border-akhdher opacity-30'></div>
                        <span className='text-lg'>Partagez vos propres audio-témoignage</span>
                        <div className='border-b-2 border-akhdher opacity-30'></div>
                        <span className='text-lg'>Envoyez-nous vos pensées</span>
                        <div className='border-b-2 border-akhdher opacity-30'></div>
                        <span className='text-lg'>Participez dans nos podcasts et rejoignez-nous au studio</span>
                    </Pack>
                </div>
                <div className='relative'>
                    <div className='absolute -right-10 top-20 -mt-0.5 sm:flex hidden'>
                        <img src={micro} alt="" />
                    </div>
                    <div className='absolute -right-0 top-44 -mt-0.5 sm:hidden flex'>
                        <img src={micro} alt="" />
                    </div>
                    <Pack
                        color={"asfer2"}
                        price={49.9}
                        buttonText={"Commencez"}
                        title={"Creator"}
                        desc={"Hebergez vos podcasts et fidélisez votre propre audience"}
                        more={"*Vous pourriez personnaliser votre pack."}
                    >
                        <span className='text-lg'>Profitez d'une visibilité pour vos podcasts</span>
                        <div className='border-b-2 border-asfer2 opacity-30'></div>
                        <span className='text-lg'>Participez dans nos vagues d'accompagement</span>
                        <div className='border-b-2 border-asfer2 opacity-30'></div>
                        <span className='text-lg'>Suivre votre activité à l'aide d'un tableau de bord </span>
                        <div className='border-b-2 border-asfer2 opacity-30'></div>
                        <span className='text-lg'>Poster jusqu'à 5 podcasts/mois</span>
                    </Pack>
                </div>
            </div>
            <div className='flex flex-col items-center mt-12 pb-12 z-20'>
                <span>
                    *Si vous achetez le pack Community, vous seriez automatiquement auditeur.
                </span>
                <span>
                    **Si vous achetez le pack Createur, vous seriez automatiquement COMMUNITY.
                </span>
            </div>
        </div>
    )
}
