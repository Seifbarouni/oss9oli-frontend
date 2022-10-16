import React, { useState } from 'react'

export const Question = () => {
    const [options, setOptions] = useState(["Option 1", "Option 2", "+"])
    const addQuestion = (e) => {
        e.preventDefault()
    }

    return (
        <form
            className='border-2 border-dashed border-gray-800 mx-6 p-12 rounded-[50px] '
            onSubmit={addQuestion}
        >
            <input type="text" placeholder='Demandez une question..' className=' 
            w-full text-2xl placeholder:text-gray-800 focus:outline-none bg-transparent' />

            {/* options list */}
            <div className='flex justify-center  space-x-2 sm:flex-row flex-col'>
                {options.map((option) => (
                    <div className='mt-2'>
                        <button className="relative mb-6 z-50" >
                            <div className='rounded-full bg-gris border border-black py-2 px-12 sm:text-xl z-40 cursor-pointer transition duration-150 hover:translate-x-1 hover:translate-y-1 '>
                                {option}
                            </div>
                            <div className='rounded-full  border border-black py-2 px-12 sm:text-xl absolute -z-10 top-1 left-1 w-full'>
                                {option}
                            </div>
                        </button>
                    </div>
                ))}
            </div>

            {/* submit button */}
            <div className='flex justify-end items-center'>
                <button className="relative mb-6 z-50" >
                    <div className='text-white rounded-full bg-orng2 border border-black py-2 px-12 sm:text-xl font-bold z-40 cursor-pointer transition duration-150 hover:translate-x-1 hover:translate-y-1 '>
                        Publier
                    </div>
                    <div className='text-white rounded-full  border border-black py-2 px-12 sm:text-xl font-bold absolute -z-10 top-1 left-1'>
                        Publier
                    </div>
                </button>
            </div>

        </form>
    )
}
