import React from 'react'
import { Form } from '../components/forms/Form'
import { AuthenticatedNavbar } from '../components/nav/AuthenticatedNavbar'
import { Sidebar } from '../components/nav/Sidebar'
import { SmallScreenNav } from '../components/nav/SmallScreenNav'
import { Seperator } from '../components/Seperator'
import { useOpen } from '../store/store'

export const AddPodcastPage = () => {
    const open = useOpen((state) => state.open)
    return (
        <div className='flex flex-col'>
            <AuthenticatedNavbar />
            <Seperator mt={0} />
            <div className='flex'>
                {open && <div className='lg:flex hidden'>
                    <Sidebar selected={"addpod"} />
                </div>}
                {open && <div className='flex lg:hidden absolute top-0 z-50'>
                    <div className='sticky'>
                        <SmallScreenNav selected={"addpod"} />
                    </div>
                </div>}
                <div className='flex flex-col z-40 w-full sm:p-12 p-6'>
                    <div className={`flex mt-4 justify-between items-end ${!open ? "md:px-44" : ""}`}>
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    )
}
