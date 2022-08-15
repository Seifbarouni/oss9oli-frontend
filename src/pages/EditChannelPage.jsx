import React from 'react'
import { AuthenticatedNavbar } from '../components/nav/AuthenticatedNavbar'
import { Sidebar } from '../components/nav/Sidebar'
import { SmallScreenNav } from '../components/nav/SmallScreenNav'
import { Seperator } from '../components/Seperator'
import { useOpen } from '../store/store'
import img2 from '../assets/images/2.png'

export const EditChannelPage = () => {
    const open = useOpen((state) => state.open)
    return (
        <div className='flex flex-col'>
            <AuthenticatedNavbar />
            <Seperator mt={0} />
            <div className='flex'>
                {open && <div className='lg:flex hidden'>
                    <Sidebar selected={"edit"} />
                </div>}
                {open && <div className='flex lg:hidden absolute top-0 z-50'>
                    <div className='sticky'>
                        <SmallScreenNav selected={"edit"} />
                    </div>
                </div>}
                <div className='flex flex-col z-40 w-full p-12'>
                    <div className={`flex mt-4 flex-col ${!open ? "md:px-44" : ""}`}>
                        <span className='text-orng2 text-5xl'>EDITER CHAINE</span>
                        <div className='flex flex-col space-y-1 mt-4'>
                            <span className=''>Informations de votre chaine</span>
                            <span className='text-gray-500 text-sm'>Editez les informations de votre chaine </span>
                        </div>
                    </div>
                    <div className={`flex flex-col mt-16 space-y-1 ${!open ? "md:px-44" : ""}`}>
                        <span className=''>Editez le nom de votre chaine*</span>
                        <input type="text" className='rounded-full py-3 bg-gris placeholder:text-white focus:outline-none pl-5 border border-black placeholder:text-sm' placeholder='Nom de la chaine' value={"test"} />
                    </div>
                    <div className={`flex flex-col mt-6 space-y-1 ${!open ? "md:px-44" : ""}`}>
                        <span className=''>Editez la description de votre chaine*</span>
                        <input type="text" className='rounded-[40px] py-12 bg-gris placeholder:text-white focus:outline-none pl-5 border border-black placeholder:text-sm' placeholder='Une courte description de votre chaine. Quelques phrases sont recommendées.' value={"lorem asjk askjdh ajskd kjashdjk haskjdh kjashjkd hkjashdjh k"} />
                    </div>
                    <div className={`flex flex-col mt-6 space-y-1 ${!open ? "md:px-44" : ""}`}>
                        <span className=''>Editez la photo de votre chaine*</span>
                        <div className='w-96 h-72 rounded-3xl border border-black'>
                            <img src={img2} alt="" className='w-full h-full rounded-3xl' />
                        </div>
                        <input type="file" />
                    </div>
                    <div className='flex justify-center items-center'>

                        <div className={`relative mb-6 z-50 mt-16  ${!open ? "md:px-44" : ""}`}>
                            <div className='text-white rounded-full bg-orng2 border border-black py-2 px-12 sm:text-xl font-bold z-40 cursor-pointer transition duration-150 hover:translate-x-1 hover:translate-y-1 '>
                                Sauvegarder
                            </div>
                            <div className='text-white rounded-full  border border-black py-2 px-12 sm:text-xl font-bold absolute -z-10 top-1 left-1'>
                                Sauvegarder
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}