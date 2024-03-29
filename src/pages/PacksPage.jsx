import React from 'react'
import { Pack } from '../components/Pack'
import { Seperator } from '../components/Seperator'
import { useAnimation } from '../hooks/useAnimation'


import head from '../assets/svgs/head.svg'
import headphones from '../assets/svgs/headphones.svg'
import micro from '../assets/svgs/micro.svg'
import orange_blob from '../assets/svgs/orange_blob2.svg'
import spark2 from '../assets/svgs/spark2.svg'

export const PacksPage = () => {
    const { props, a } = useAnimation();
    return (
        <a.div
            style={props}
            className='flex flex-col relative'>
            <div className='absolute z-10 bottom-0'>
                <img src={orange_blob} alt="" />
            </div>

            <Seperator mt={0} />
            <div className="relative mt-16 flex justify-center w-full">
                <div className="header md:text-5xl sm:text-4xl text-2xl relative">
                    <div className="absolute bottom-1/3 -right-8">
                        <img src={spark2} alt="" />
                    </div>
                    Choisissez votre pack
                </div>

                {/* <div className='absolute top-6 left-[600px]'>
                    <img src={orange_star} alt="" />
                </div> */}
            </div>
            <div className='mt-16 flex 2xl:flex-row flex-col w-full  2xl:space-x-8 2xl:space-y-0 space-y-4 justify-center items-center z-40'>
                <div className='mt-4 flex  justify-center items-center z-40 relative'>
                    <div className='absolute -left-8 -top-10'>
                        <img src={headphones} alt="" />
                    </div>
                    <Pack
                        color={"bg-orng6"}
                        price={0}
                        buttonText={"S'incrire"}
                        title={"Auditeur"}
                        pack={"free"}
                        desc={"Devenez auditeur fidèle et naviguez dans la plateforme en toute liberté"}
                    >
                        <span className='sm:text-lg'>Ecouter tous nos podcasts en illimité</span>
                        <div className='border-b-2 border-orng6 opacity-30'></div>
                        <span className='sm:text-lg'>Naviguer dans la plateforme en toute liberté</span>
                        <div className='border-b-2 border-orng6 opacity-30'></div>
                        <span className='sm:text-lg'>Commentez, likez et partagez vos podcasts préférés</span>
                        <div className='border-b-2 border-orng6 opacity-30'></div>
                        <span className='sm:text-lg'>Profitez d'une expérience personnalisée</span>
                    </Pack>
                </div>
                <div className='relative'>
                    <div className='absolute -left-8 top-20'>
                        <img src={head} alt="" />
                    </div>
                    <Pack
                        color={"bg-akhdher"}
                        price={29.9}
                        buttonText={"Rejoindre"}
                        title={"COMMUNITY PACK"}
                        pack={"community_pack"}
                        desc={"Appartenez à une communauté qui fait écho"}
                    >
                        <span className='sm:text-lg'>Echangez avec d'autres membres de la communauté</span>
                        <div className='border-b-2 border-akhdher opacity-30'></div>
                        <span className='sm:text-lg'>Partagez vos propres audio-témoignage</span>
                        <div className='border-b-2 border-akhdher opacity-30'></div>
                        <span className='sm:text-lg'>Envoyez-nous vos pensées</span>
                        <div className='border-b-2 border-akhdher opacity-30'></div>
                        <span className='sm:text-lg'>Participez dans nos podcasts et rejoignez-nous au studio</span>
                    </Pack>
                </div>
                <div className='relative'>
                    <div className='absolute sm:-right-10 sm:top-20 -mt-0.5 sm:flex hidden'>
                        <img src={micro} alt="" />
                    </div>
                    <div className='absolute -right-0 top-44 -mt-0.5 sm:hidden flex'>
                        <img src={micro} alt="" />
                    </div>
                    <Pack
                        color={"bg-asfer2"}
                        price={49.9}
                        buttonText={"Commencez"}
                        title={"Creator"}
                        pack={"producer_pack"}
                        desc={"Hebergez vos podcasts et fidélisez votre propre audience"}
                        more={"*Vous pourriez personnaliser votre pack."}
                    >
                        <span className='sm:text-lg'>Profitez d'une visibilité pour vos podcasts</span>
                        <div className='border-b-2 border-asfer2 opacity-30'></div>
                        <span className='sm:text-lg'>Participez dans nos vagues d'accompagement</span>
                        <div className='border-b-2 border-asfer2 opacity-30'></div>
                        <span className='sm:text-lg'>Suivre votre activité à l'aide d'un tableau de bord </span>
                        <div className='border-b-2 border-asfer2 opacity-30'></div>
                        <span className='sm:text-lg'>Poster jusqu'à 5 podcasts/mois</span>
                    </Pack>
                </div>
            </div>

            <div className='flex flex-col items-center mt-12 pb-12 z-20 justify-center'>
                <span>
                    *Si vous achetez le pack Community, vous seriez automatiquement auditeur.
                </span>
                <span>
                    **Si vous achetez le pack Createur, vous seriez automatiquement COMMUNITY.
                </span>
            </div>
        </a.div>
    )
}
