import React from 'react'
import { JoinButton } from './buttons/JoinButton'

export const Vote = ({ name, vote_data }) => {
    return (
        <div className='flex xl:w-2/3'>
            <div className='relative z-50'>
                <div className='h-20 w-20 border border-black rounded-full bg-white flex items-center justify-center'>
                    <img src="https://avatars.dicebear.com/api/croodles/br.svg" alt="" />
                </div>
                <div className='h-20 w-20 absolute rounded-full border border-black top-1 left-1 -z-10'>

                </div>
            </div>
            <div className='flex flex-col w-full pl-5'>
                <span className='leading-tight'>
                    {name} <br />
                    <span className='text-gray-500 text-sm'>
                        a publié un vote
                    </span>
                </span>
                <span className='lg:text-4xl sm:text-xl text-lg p-4 flex justify-center'>
                    <span>
                        {vote_data}
                    </span>
                </span>
                <div className='flex sm:flex-row flex-col justify-center items-center sm:space-x-4 space-x-0 sm:space-y-0 space-y-4'>
                    <div>
                        <JoinButton
                            cd1={"relative z-50"}
                            cd2={"text-white sm:text-2xl text-lg bg-gris rounded-full py-3 px-16 text-center cursor-pointer border border-black z-40 transition duration-150 hover:-translate-x-1 hover:translate-y-1"}
                            cd3={"border border-black rounded-full  py-3 px-16 absolute right-1 top-1 -z-20 w-full sm:text-2xl text-lg"}
                            data={"OUI"}
                            to={"/auth"}
                        />
                    </div>
                    <div>
                        <div className='text-white sm:text-2xl text-lgl bg-akhdher rounded-full py-3 px-16 text-center cursor-pointer border border-black z-40'>
                            NON
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
