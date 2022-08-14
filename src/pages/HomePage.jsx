import React from 'react'
import img1 from '../assets/images/1.png'
import img10 from '../assets/images/10.png'
import img3 from '../assets/images/3.png'
import img4 from '../assets/images/4.png'
import img5 from '../assets/images/5.png'
import img6 from '../assets/images/6.png'
import img7 from '../assets/images/7.png'
import img8 from '../assets/images/8.png'
import img9 from '../assets/images/9.png'
import { AuthenticatedNavbar } from '../components/nav/AuthenticatedNavbar'
import { Sidebar } from '../components/nav/Sidebar'
import { SmallScreenNav } from '../components/nav/SmallScreenNav'
import { Podcast } from '../components/Podcast'
import { Search } from '../components/Search'
import { Seperator } from '../components/Seperator'
import { SmallPost } from '../components/SmallPost'
import { Tag } from '../components/Tag'
import { useOpen } from '../store/store'

export const HomePage = () => {
    const open = useOpen((state) => state.open)
    return (
        <div className='flex flex-col '>
            <AuthenticatedNavbar />
            <Seperator mt={0} />
            <div className='flex w-full'>
                {open && <div className='lg:flex hidden'>
                    <Sidebar selected={"accueil"} />
                </div>}
                {open && <div className='flex lg:hidden absolute top-0 z-50'>
                    <div className='sticky'>
                        <SmallScreenNav selected={"accueil"} />
                    </div>
                </div>}
                <div className='flex flex-col z-40 w-full p-4'>
                    <div className={`mt-4 ${!open ? "md:px-44" : ""}`}>
                        <Search />
                    </div>
                    <div className={`flex mt-8 overflow-x-scroll space-x-2 space-y-1 justify-center flex-wrap ${!open ? "md:px-44" : ""}`}>
                        <Tag title={'Féminité'} />
                        <Tag title={'Culture'} />
                        <Tag title={'Art'} />
                        <Tag title={'Economie'} />
                        <Tag title={'Société'} />
                    </div>
                    <div className={`flex mt-24 justify-between items-end ${!open ? "md:px-44" : ""}`}>
                        <span className='text-orng2 text-5xl'>ACTUALITE</span>
                        <span className='text-ka7ouli underline underline-offset-8 sm:text-lg'>
                            Voir plus {'>'}
                        </span>
                    </div>
                    <div className={`mt-3 ${!open ? "md:px-44" : ""}`}>
                        <Podcast img={img1} creator={"Oss9oli"} title={"Ep 3 | Qu'est-ce qu'ils pensent? - Le féminisme en Tunisie"} duration={"36:20"} description={"Pie dessert jelly-o I love tart. Tart gingerbread I love ice cream chocolate cake. Sugar plum chocolate bar powder topping jelly pudding gummies chocolate cake cheesecake.Topping chocolate dragée cake I love cheesecake brownie pie chocolate. Pie dessert jelly-o I love tart. Tart gingerbread I love ice cream chocolate cake. Sugar plum chocolate bar powder topping jelly pudding gummies chocolate cake cheesecake.Topping chocolate dragée cake I love cheesecake brownie pie chocolate. "} w={"w-full"} h={"sm:h-96"} />
                    </div>
                    <div className={`flex mt-24 justify-between items-end ${!open ? "md:px-44" : ""}`}>
                        <span className='text-orng2 text-5xl'>ECOUTEZ MAINTENANT</span>
                        <span className='text-ka7ouli underline underline-offset-8 sm:text-lg'>
                            Voir plus {'>'}
                        </span>
                    </div>

                    <div className={`flex xl:flex-row flex-col p-6 flex-wrap  items-center ${!open ? "md:px-44" : ""}`}>
                        <div className='p-1'>
                            <SmallPost
                                img={img3} creator={"Oss9oli"} title={"Ep 3 | Qu'est-ce qu'ils pensent? - Le féminisme en Tunisie"} duration={"50:20"}
                            />
                        </div>
                        <div className='p-1'>
                            <SmallPost
                                img={img4} creator={"Oss9oli"} title={"Ep 3 | Qu'est-ce qu'ils pensent? - Le féminisme en Tunisie"} duration={"50:20"}
                            />
                        </div>
                        <div className='p-1'>
                            <SmallPost
                                img={img5} creator={"Oss9oli"} title={"Ep 3 | Qu'est-ce qu'ils pensent? - Le féminisme en Tunisie"} duration={"50:20"}
                            />
                        </div>
                        <div className='p-1'>
                            <SmallPost
                                img={img6} creator={"Oss9oli"} title={"Ep 3 | Qu'est-ce qu'ils pensent? - Le féminisme en Tunisie"} duration={"50:20"}
                            />
                        </div>
                    </div>

                    <div className={`flex mt-24 justify-between items-end ${!open ? "md:px-44" : ""}`}>
                        <span className='text-orng2 text-5xl'>CONTINUER L'ECOUTE</span>
                        <span className='text-ka7ouli underline underline-offset-8 sm:text-lg'>
                            Voir plus {'>'}
                        </span>
                    </div>

                    <div className={`flex xl:flex-row flex-col p-6 flex-wrap  items-center ${!open ? "md:px-44" : ""}`}>
                        <div className='p-1'>
                            <SmallPost
                                img={img7} creator={"Oss9oli"} title={"Ep 3 | Qu'est-ce qu'ils pensent? - Le féminisme en Tunisie"} duration={"50:20"}
                            />
                        </div>
                        <div className='p-1'>
                            <SmallPost
                                img={img8} creator={"Oss9oli"} title={"Ep 3 | Qu'est-ce qu'ils pensent? - Le féminisme en Tunisie"} duration={"50:20"}
                            />
                        </div>
                        <div className='p-1'>
                            <SmallPost
                                img={img9} creator={"Oss9oli"} title={"Ep 3 | Qu'est-ce qu'ils pensent? - Le féminisme en Tunisie"} duration={"50:20"}
                            />
                        </div>
                        <div className='p-1'>
                            <SmallPost
                                img={img10} creator={"Oss9oli"} title={"Ep 3 | Qu'est-ce qu'ils pensent? - Le féminisme en Tunisie"} duration={"50:20"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
