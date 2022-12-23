import { PlusIcon } from '@heroicons/react/outline'
import React from 'react'

export const MiniTag = ({ title, deleteTag }) => {
    return (
        <div onClick={deleteTag} className={`rounded-full flex justify-between items-center px-6 border border-gris3  py-2 space-x-4 w-44 bg-orng2 text-white`}>
            <div className='text-lg '>{title}</div>
            <div className='text-base'>X</div>
        </div>
    )
}

