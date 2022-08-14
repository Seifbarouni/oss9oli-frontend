import { PlusIcon } from '@heroicons/react/outline'
import React from 'react'

export const Tag = ({ title }) => {
    return (
        <div className='rounded-full cursor-pointer flex justify-between items-center px-6 border border-gris3 bg-neutral-300 py-2 space-x-4 w-44'>
            <div className='text-lg text-gris3'>{title}</div>
            <PlusIcon className='h-4 w-4 text-gris3' />
        </div>
    )
}
