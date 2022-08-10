import React from 'react'

export const Channels = () => {
    return (
        <div className='z-50 lg:w-1/2 w-full relative'>
            <div className='border border-black bg-white p-6 flex flex-col rounded-3xl h-96 w-full relative'>
                <div className='absolute bottom-4 right-8'>
                    <span className='text-xl text-gray-400 underline underline-offset-8 hover:text-gray-600 cursor-pointer'>Voir d'autres chaines {'>'}  </span>
                </div>

                <span className='text-4xl'>Chaines suivies</span>
                <div className='mt-8 flex p-1 flex-wrap lg:flex-col overflow-scroll'>
                    <div className='p-3'>
                        <div className='bg-gris2 p-1 flex flex-col rounded-3xl justify-center items-center border border-black'>
                            <div className='z-50'>
                                <div className='border border-black bg-white rounded-full h-20 w-20 relative'>
                                    <div className='border border-black  rounded-full h-20 w-20 absolute top-1 left-1 -z-10'>
                                    </div>
                                    <img src="https://avatars.dicebear.com/api/croodles/mexadasasd.svg" alt="" />
                                </div>
                            </div>
                            <div className='mt-2 flex flex-col items-center justify-center'>
                                <span className='font-bold'>Flen fouleni</span>
                                <span>1 show</span>
                            </div>
                        </div>
                    </div>
                    <div className='p-3'>
                        <div className='bg-gris2 p-1 flex flex-col rounded-3xl justify-center items-center border border-black'>
                            <div className='z-50'>
                                <div className='border border-black bg-white rounded-full h-20 w-20 relative'>
                                    <div className='border border-black  rounded-full h-20 w-20 absolute top-1 left-1 -z-10'>
                                    </div>
                                    <img src="https://avatars.dicebear.com/api/croodles/mexadasassd.svg" alt="" />
                                </div>
                            </div>
                            <div className='mt-2 flex flex-col items-center justify-center'>
                                <span className='font-bold'>Flen fouleni</span>
                                <span>1 show</span>
                            </div>
                        </div>
                    </div>
                    <div className='p-3'>
                        <div className='bg-gris2 p-1 flex flex-col rounded-3xl justify-center items-center border border-black'>
                            <div className='z-50'>
                                <div className='border border-black bg-white rounded-full h-20 w-20 relative'>
                                    <div className='border border-black  rounded-full h-20 w-20 absolute top-1 left-1 -z-10'>
                                    </div>
                                    <img src="https://avatars.dicebear.com/api/croodles/mexadasdasasd.svg" alt="" />
                                </div>
                            </div>
                            <div className='mt-2 flex flex-col items-center justify-center'>
                                <span className='font-bold'>Flen fouleni</span>
                                <span>1 show</span>
                            </div>
                        </div>
                    </div>
                    <div className='p-3'>
                        <div className='bg-gris2 p-1 flex flex-col rounded-3xl justify-center items-center border border-black'>
                            <div className='z-50'>
                                <div className='border border-black bg-white rounded-full h-20 w-20 relative'>
                                    <div className='border border-black  rounded-full h-20 w-20 absolute top-1 left-1 -z-10'>
                                    </div>
                                    <img src="https://avatars.dicebear.com/api/croodles/mexadaassasd.svg" alt="" />
                                </div>
                            </div>
                            <div className='mt-2 flex flex-col items-center justify-center'>
                                <span className='font-bold'>Flen fouleni</span>
                                <span>1 show</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute h-96 w-full border border-black rounded-3xl top-1  -z-10'>
            </div>
        </div>
    )
}
