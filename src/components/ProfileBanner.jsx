import { PencilAltIcon, XIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import spark from '../assets/svgs/spark2.svg'

export const ProfileBanner = ({ shows, episodes, name, img, desc }) => {
    const [edit, setEdit] = useState(false)
    const [inputName, setInputName] = useState(name)
    const [inputImage, setInputImage] = useState("")
    const [inputDescription, setInputDescription] = useState(desc || "")

    return (
        <div className='border border-black border-l-0 border-t-0 bg-orng4 flex md:flex-row flex-col items-center md:items-start'>
            {!edit && <div className='md:hidden flex items-center   cursor-pointer w-full p-2' onClick={() => setEdit(true)}>
                <PencilAltIcon className='h-8 w-8' />
            </div>}
            {edit && <div className='md:hidden flex items-center   cursor-pointer w-full p-2' >
                <XIcon className='h-8 w-8' onClick={() => setEdit(false)} />
            </div>}

            <div className='md:border-r border-black p-11  z-50'>
                {!edit && <div className='border border-black bg-white rounded-full h-44 w-44 relative flex  justify-center'>
                    <div className='border border-black bg-orng rounded-full h-44 w-44 absolute top-1 left-1 -z-10'>
                    </div>
                    <img src={img} alt="" className='rounded-full' />
                </div>}
                {edit && <div className='border border-black bg-white rounded-full h-44 w-44 relative flex  justify-center'>
                    <div className='border border-black bg-orng rounded-full h-44 w-44 absolute top-1 left-1 -z-10'>
                    </div>
                    <img src={inputImage} alt="" className='rounded-full bg-asfer3' />
                </div>}
                {edit &&
                    <input type={"file"} className="mt-2 w-44" onChange={(e) => setInputImage(e.target.files[0])} />
                }
            </div>
            <div className='p-12 flex flex-col'>
                <div className=''>
                    {!edit && <span className='xl:text-5xl lg:text-3xl text-2xl font-bold relative'>
                        <div className='absolute xl:bottom-4 bottom-2 -right-8'>
                            <img src={spark} alt="" />
                        </div>
                        {name}
                    </span>}
                    {edit && <span className='xl:text-5xl lg:text-3xl text-2xl font-bold relative'>
                        <div className='absolute xl:bottom-4 bottom-2 -right-8'>
                            <img src={spark} alt="" />
                        </div>
                        <input type="text" placeholder='Nom' value={inputName} onChange={(e) => setInputName(e.target.value)} className="w-2/3 bg-asfer3 border border-black rounded-xl  placeholder:text-gray-400 focus:outline-none" />
                    </span>}
                </div>
                <div className='flex space-x-2  text-gray-700 mt-6'>
                    <span>{shows} shows</span><span>-</span><span>{episodes} épisodes </span>
                </div>
                <div className='mt-4 border border-black md:w-2/3 w-full rounded-xl flex-grow  '>

                    {!edit && <div className='h-24 rounded-xl bg-asfer3  p-2 overflow-scroll'>
                        {desc}
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, corrupti tempora minus odio facere ipsum quisquam, nesciunt odit perferendis culpa praesentium cumque accusamus voluptate. Debitis reprehenderit expedita facilis eum maxime?
                    </div>}

                    {edit && <input type="text" className='h-full w-full rounded-xl bg-asfer3  p-6 placeholder:text-gray-400 focus:outline-none' placeholder='Décrivez-vous au monde..' value={inputDescription} onChange={(e) => setInputDescription(e.target.value)} />}
                </div>
            </div>
            {!edit && <div className='md:flex hidden justify-end flex-1 pr-6 pt-2 cursor-pointer' onClick={() => setEdit(true)}>
                <PencilAltIcon className='h-8 w-8' />
            </div>}
            {edit && <div className='md:flex hidden justify-end flex-1 pr-6 pt-2' >
                <div className='flex flex-col justify-end items-end space-y-2'>
                    <XIcon className='h-8 w-8 cursor-pointer' onClick={() => setEdit(false)} />
                    <div className='bg-orng text-white border border-black rounded-xl p-2 cursor-pointer'>
                        Sauvegarder
                    </div>
                </div>
            </div>}
            {edit &&
                <div className='bg-orng text-white border border-black rounded-xl p-2 cursor-pointer mb-4 md:hidden flex'>
                    Sauvegarder
                </div>
            }
        </div>
    )
}
