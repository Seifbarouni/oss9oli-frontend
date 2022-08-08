import React from 'react'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/nav/NavbarLandingPage'
import { Seperator } from '../components/Seperator'
import { JoinButton } from '../components/buttons/JoinButton'
import { InfoCard } from '../components/cards/InfoCard'
import { PlayButton } from '../components/buttons/PlayButton'
import { Values } from '../components/Values'
import { Contributors } from '../components/Contributors'
import { Footer } from '../components/Footer'
import { GoldenArrow } from '../components/GoldenArrow'
import { Link } from 'react-router-dom'

import bg from '../assets/svgs/group.svg'
import green_blob from '../assets/svgs/green_blob.svg'
import orange_blob from '../assets/svgs/orange_blob.svg'
import yezzin3ad from '../assets/svgs/yezzin3ad.svg'
import shh from '../assets/images/shh.png'
import koli from '../assets/images/9oli.png'
import stars from '../assets/svgs/stars.svg'
import people from '../assets/images/people.png'
import gr120 from '../assets/svgs/Group 122.svg'
import gr122 from '../assets/svgs/Group 120.svg'
import gr121 from '../assets/svgs/Group 121.svg'
import spark2 from '../assets/svgs/spark2.svg'
import lp from '../assets/images/lp.png'

export const LandingPage = () => {
    return (
        <div
            className='flex flex-col'
        >
            <div className="flex flex-col realtive">
                <div className="absolute lg:left-72 md:top-0 top-1/3">
                    <img src={bg} alt="" srcSet="" />
                </div>
                <Navbar />
                <div className="border-b border-black z-50 w-full"></div>
                <Hero />
            </div>

            <div
                className="relative items-center justify-evenly mt-28 z-50 flex md:flex-row flex-col"
            >
                <div className="absolute -z-50 left-2/3 -mt-16">
                    <img src={green_blob} alt="" />
                </div>
                <div>
                    <img src={shh} alt="" srcSet="" />
                </div>
                <div className="w-96 flex flex-col relative">
                    <div className="absolute -left-12 -top-16">
                        <img src={yezzin3ad} alt="" />
                    </div>
                    <span className="header text-2xl">
                        Avez-vous déjà été réduit au silence?
                    </span>
                    <span className="text-lg mt-2">
                        Vous a-t-on dit de vous taire ? que votre avis n'avait pas
                        d'importance ? ou votre voix ne sonne pas aussi fort? que votre
                        histoire ne valait pas la peine d'être racontée ? ou que votre point
                        de vue n'est pas le bon ? que vous aviez tort ? pas besoin de parler?
                    </span>
                </div>

            </div>

            <div
                className="relative items-center justify-evenly mt-28 z-50 flex md:flex-row flex-col"
            >
                <div className="absolute -z-50 left-0">
                    <img src={orange_blob} alt="" />
                </div>

                <div className="w-96 flex flex-col md:ml-12">
                    <span className="text-lg mt-2">
                        Ces mêmes personnes sont les premières à s'aligner pour entendre votre
                        histoire !
                    </span>

                    <span className="header text-2xl mt-2"> Faites entendre votre voix ! </span>
                    <span className="text-lg mt-2">
                        Nous avons besoin de votre histoire ! le monde a besoin que votre
                        histoire soit racontée à haute voix ! Rejoignez notre communauté et
                        plongez dans le paradoxe de la société tunisienne ! écoutez comme
                        c'est beau, comme c'est beau d'être différent.
                    </span>
                </div>
                <div className="">
                    <img src={koli} alt="" srcSet="" />
                </div>
            </div>
            <Seperator mt="28" />

            <div className="flex justify-center mt-28">

                <div className="relative">
                    <div
                        className="header md:text-5xl sm:text-4xl text-3xl text-center flex flex-col"
                    >
                        <span>Rejoignez-nous dès </span>
                        <span>maintenant!</span>
                    </div>
                    <div className="absolute md:top-2 md:left-6 -top-4 -left-2 mt-6 ml-3">
                        <img src={stars} alt="" />
                    </div>
                </div>
            </div>

            <div className="flex mt-28 justify-between w-full 2xl:px-96 md:px-12 relative">
                <div className='absolute right-0 -top-96 xl:flex hidden'>
                    <GoldenArrow w={950} h={750} />
                </div>
                <div className="relative z-50">
                    <div
                        className="bg-white rounded-3xl w-96 h-72 p-6 border border-black absolute right-1 top-1 -z-30"
                    >
                        <span className="invisible text-lg">
                            Oss9oli est la première plateforme de podcast à contribution en
                            Tunisie. C'est l'espace qui réunit les créateurs de contenus
                            créatifs et les auditeurs concients...
                        </span>
                    </div>
                    <div
                        className="bg-white rounded-3xl w-96 h-72 p-6 border border-black flex flex-col items-start -z-40"
                    >
                        <div className="text-lg">
                            Oss9oli est la première plateforme de podcast à contribution en
                            Tunisie. C'est l'espace qui réunit les créateurs de contenus
                            créatifs et les auditeurs concients...
                        </div>
                        <JoinButton
                            cd1={"mt-12 relative z-20"}
                            cd2={"bg-gris2 rounded-full py-2 px-5 text-center cursor-pointer border border-black transition duration-150 hover:-translate-x-1 hover:translate-y-1 text-black w-full"}
                            cd3={"border border-black rounded-full py-2 px-5 absolute right-1 top-1 bg-white -z-10 w-full"}
                            data={"En-apprendre plus"
                            }
                            to={"/packs"}
                        />
                    </div>
                </div>
                <div className="relative rounded-3xl w-2/3 ml-4">
                    <div
                        className="bg-fit rounded-3xl w-full h-full -z-50 opacity-70"
                        style={{
                            backgroundImage: `url(${people})`
                        }}
                    ></div>
                    <div className="absolute text-white top-0 p-6 text-2xl font-bold z-20">
                        Ecoutez, contribuez dans nos podcasts ou publiez vos propres créations
                        sonores!
                    </div>
                    <div className="absolute bottom-9 left-8 text-white z-50">
                        <JoinButton
                            cd1={"relative"}
                            cd2={"text-white font-bold bg-orng rounded-full py-3 px-6 text-center cursor-pointer border border-black z-50 transition duration-150 hover:-translate-x-1 hover:translate-y-1"}
                            cd3={"border border-black rounded-full  px-6 absolute right-1 top-1 -z-10 w-full"}
                            data={"JE REJOINS LA COMMUNAUTE"}
                            to={"/auth"}
                        />
                    </div>
                </div>
            </div>

            <div
                className="flex md:flex-row flex-col mt-12 md:space-x-6 2xl:px-96 md:px-12 justify-center w-full"
            >
                <div className="flex flex-col space-y-2">
                    <InfoCard bg={"bg-orng2"} img={gr122}>
                        Devenez auditeur fidèle et naviguez dans la plateforme en toute
                        liberté
                    </InfoCard>

                    <InfoCard bg={"bg-akhdher"} img={gr120}>
                        Appartenez à une communauté qui fait écho
                    </InfoCard>

                    <InfoCard bg={"bg-asfer2"} img={gr121}>
                        Hebergez vos podcasts et fidélisez votre première audience
                    </InfoCard>

                </div>
                <div
                    className="relative md:w-1/3 w-full border border-black rounded-3xl flex flex-col items-center md:mt-0 mt-8 z-50"
                >
                    <div
                        className="h-full w-full bg-black opacity-70 -z-40 absolute rounded-3xl"
                    ></div>
                    <div
                        className="bg-fit rounded-3xl w-full h-full -z-50  absolute"
                        style={{
                            backgroundImage: `url(${lp})`
                        }}
                    ></div>
                    <div className="flex flex-col mt-36 text-white text-center">
                        <span className="">Ou bien commencez à écoutez nos podcasts</span>
                        <span className="text-2xl font-bold">GRATUITEMENT!</span>
                    </div>
                    <Link to={'auth'}>
                        <div className='transition ease-in-out hover:scale-110 duration-150 delay-75'>
                            <PlayButton h={200} w={200} />
                        </div>
                    </Link>
                </div>
            </div>

            <Values />

            <div className="flex flex-col mt-28 lg:px-32 items-center">
                <div className="relative">
                    <div className="absolute bottom-5 -right-9">
                        <img src={spark2} alt="" />
                    </div>
                    <div className="header md:text-5xl sm:text-4xl text-3xl text-start">
                        Nos meilleurs contributeurs
                    </div>
                </div>
                <div
                    className="flex lg:flex-row flex-col justify-center items-center mt-12 lg:space-x-8 lg:space-y-0 space-y-4 w-full"
                >

                    <Contributors
                        bg={"bg-orng"}
                        img={"https://avatars.dicebear.com/api/croodles/seif.svg"}
                        data={"a contribué dans 5 episodes"}
                        type={"COMMUNITY"}
                        heart={true}
                    >
                        Minassa<br />LAB
                    </Contributors>

                    <Contributors
                        bg={"bg-akhdher"}
                        img={"https://avatars.dicebear.com/api/croodles/rana.svg"}
                        data={"a envoyé 10 enregistrements"}
                        type={"COMMUNITY"}
                        heart={false}
                    >
                        Rana Jollanar <br />
                        BEN <br />
                        HASSINE
                    </Contributors>

                    <Contributors
                        bg={"bg-asfer"}
                        img={"https://avatars.dicebear.com/api/croodles/foulen.svg"}
                        data={"2400 écoutes sur son podcast ”IJA BAHDHEYA”"}
                        type={"CREATEUR"}
                        heart={false}
                    >
                        Felna <br />
                        FLOUNA <br />
                        FALOUNA
                    </Contributors>

                </div>
            </div>
            <Seperator mt={28} />
            <Footer />
            <Seperator mt={0} />

        </div>
    )
}
