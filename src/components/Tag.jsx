import { PlusIcon } from '@heroicons/react/outline'
import React from 'react'

export const Tag = ({ title, actif, setActif }) => {
    return (
        <div onClick={setActif} className={`rounded-full flex justify-between items-center px-6 border border-gris3  py-2 space-x-4 w-44 ${actif ? "bg-orng2 text-white" : "bg-neutral-300 text-gris3"}`}>
            <div className='text-lg '>{title}</div>
            {!actif && <PlusIcon className='h-5 w-5 ' />}
            {actif && <div className='text-base'>X</div>}
        </div>
    )
}

