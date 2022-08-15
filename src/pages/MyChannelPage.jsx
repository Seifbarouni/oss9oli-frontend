import { PlusIcon } from '@heroicons/react/outline'
import React from 'react'
import { AuthenticatedNavbar } from '../components/nav/AuthenticatedNavbar'
import { Sidebar } from '../components/nav/Sidebar'
import { SmallScreenNav } from '../components/nav/SmallScreenNav'
import { Seperator } from '../components/Seperator'
import { useOpen } from '../store/store'
import img1 from '../assets/images/1.png'
import { Podcast } from '../components/Podcast'
import { Link } from 'react-router-dom'

export const MyChannelPage = () => {
    const open = useOpen((state) => state.open)
    return (
        <div className='flex flex-col'>
            <AuthenticatedNavbar />
            <Seperator mt={0} />
            <div className='flex'>
                {open && <div className='lg:flex hidden'>
                    <Sidebar selected={"mypods"} />
                </div>}
                {open && <div className='flex lg:hidden absolute top-0 z-50'>
                    <div className='sticky'>
                        <SmallScreenNav selected={"mypods"} />
                    </div>
                </div>}
                <div className='flex flex-col z-40 w-full p-12'>
                    <div className={`flex mt-4 justify-between items-end ${!open ? "md:px-44" : ""}`}>
                        <span className='text-orng2 text-5xl'>MES PODCASTS</span>
                        <span className='text-ka7ouli h-16 w-16 rounded-full p-2 hover:bg-gray-200 cursor-pointer transition ease-in-out duration-300' title='Ajouter podcast'>
                            <Link to={"/addpod"}>
                                <PlusIcon className='' />
                            </Link>
                        </span>

                    </div>
                    <div className={`mt-3 ${!open ? "md:px-44" : ""}`}>
                        <Podcast img={img1} creator={"Oss9oli"} title={"Ep 3 | Qu'est-ce qu'ils pensent? - Le féminisme en Tunisie"} duration={"36:20"} description={"Pie dessert jelly-o I love tart. Tart gingerbread I love ice cream chocolate cake. Sugar plum chocolate bar powder topping jelly pudding gummies chocolate cake cheesecake.Topping chocolate dragée cake I love cheesecake brownie pie chocolate. Pie dessert jelly-o I love tart. Tart gingerbread I love ice cream chocolate cake. Sugar plum chocolate bar powder topping jelly pudding gummies chocolate cake cheesecake.Topping chocolate dragée cake I love cheesecake brownie pie chocolate. "} w={"w-full"} h={"sm:h-96"} />
                    </div>
                    <div className={`mt-3 ${!open ? "md:px-44" : ""}`}>
                        <Podcast img={img1} creator={"Oss9oli"} title={"Ep 3 | Qu'est-ce qu'ils pensent? - Le féminisme en Tunisie"} duration={"36:20"} description={"Pie dessert jelly-o I love tart. Tart gingerbread I love ice cream chocolate cake. Sugar plum chocolate bar powder topping jelly pudding gummies chocolate cake cheesecake.Topping chocolate dragée cake I love cheesecake brownie pie chocolate. Pie dessert jelly-o I love tart. Tart gingerbread I love ice cream chocolate cake. Sugar plum chocolate bar powder topping jelly pudding gummies chocolate cake cheesecake.Topping chocolate dragée cake I love cheesecake brownie pie chocolate. "} w={"w-full"} h={"sm:h-96"} />
                    </div>
                </div>
            </div>
        </div>
    )
}