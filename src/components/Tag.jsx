import { PlusIcon } from '@heroicons/react/outline'
import React from 'react'

export const Tag = ({ title, actif, setActif }) => {
    return (
        <div onClick={setActif} className='rounded-full flex justify-between items-center px-6 border border-gris3 bg-neutral-300 py-2 space-x-4 w-44' style={actif ? { backgroundColor: "#FFC62D" } : {}}>
            <div className='text-lg text-gris3'>{title}</div>
            <PlusIcon className='h-4 w-4 text-gris3' />
        </div>
    )
}

