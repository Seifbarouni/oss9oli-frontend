import React from 'react'
import img1 from '../assets/images/1.png'
import img2 from '../assets/images/2.png'
import green_blob2 from '../assets/svgs/green_blob2.svg'
import red_blob from '../assets/svgs/red_blob.svg'
import { Channels } from '../components/Channels'
import { AuthenticatedNavbar } from '../components/nav/AuthenticatedNavbar'
import { Sidebar } from '../components/nav/Sidebar'
import { Podcast } from '../components/Podcast'
import { ProfileBanner } from '../components/ProfileBanner'
import { Seperator } from '../components/Seperator'
import { Tags } from '../components/Tags'

export const ProfilePage = () => {
    return (
        <div className='flex flex-col realtive '>
            <AuthenticatedNavbar />
            <Seperator mt={0} />
            <div className='absolute right-0 top-44  '>
                <img src={red_blob} alt="" className='' />
            </div>
            <div className='absolute  top-64  h-full w-full '>
                <img src={green_blob2} alt="" className='' />
            </div>
            <div className='flex z-50'>
                <div className='lg:flex hidden'>
                    <Sidebar selected={"profile"} />
                </div>
                <div className='flex flex-col flex-grow'>
                    <div className=' flex flex-col '>
                        <ProfileBanner episodes={13} shows={5} name={"Rana Jollanar Ben Hassine"} />
                    </div>
                    <div className='text-3xl font-bold p-6 mt-16'>
                        Podcasts publiés
                    </div>
                    <div className='flex xl:space-x-8 space-x-0 
                        xl:space-y-0 space-y-2  xl:flex-row flex-col pl-6'>
                        <Podcast img={img1} creator={"Oss9oli"} title={"Ep 3 | Qu'est-ce qu'ils pensent? - Le féminisme en Tunisie"} duration={"36:20"} description={"Pie dessert jelly-o I love tart. Tart gingerbread I love ice cream chocolate cake. Sugar plum chocolate bar powder topping jelly pudding gummies chocolate cake cheesecake.Topping chocolate dragée cake I love cheesecake brownie pie chocolate. Pie dessert jelly-o I love tart. Tart gingerbread I love ice cream chocolate cake. Sugar plum chocolate bar powder topping jelly pudding gummies chocolate cake cheesecake.Topping chocolate dragée cake I love cheesecake brownie pie chocolate. "} />
                        <Podcast img={img2} creator={"Oss9oli"} title={"Ep 3 | Qu'est-ce qu'ils pensent? - Le féminisme en Tunisie"} duration={"50:20"} description={"Pie dessert jelly-o I love tart. Tart gingerbread I love ice cream chocolate cake. Sugar plum chocolate bar powder topping jelly pudding gummies chocolate cake cheesecake.Topping chocolate dragée cake I love cheesecake brownie pie chocolate. Pie dessert jelly-o I love tart. Tart gingerbread I love ice cream chocolate cake. Sugar plum chocolate bar powder topping jelly pudding gummies chocolate cake cheesecake.Topping chocolate dragée cake I love cheesecake brownie pie chocolate. "} />
                    </div>
                    <div className='mt-16 flex xl:space-x-8 space-x-0
                        xl:space-y-0 space-y-4  xl:flex-row flex-col p-6'>
                        <Tags />
                        <Channels />
                    </div>
                    <div className='mt-16 flex xl:space-x-8 space-x-0
                        xl:space-y-0 space-y-4  xl:flex-row flex-col p-6'>
                        <Tags />
                        <Channels />
                    </div>
                </div>
            </div>

        </div>
    )
}
