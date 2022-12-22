export default function Step2({previousStep, nextStep, motivation, setMotivation}) {

    return(
        <div className='flex  flex-col w-full rounded-3xl border border-black  bg-white justify-center items-center p-16 relative lg:mx-24 z-30 mb-44 px-44'>
                    <div className='flex xl:flex-row flex-col md:space-y-0 space-y-2 md:space-x-24 w-full'>
                        <div className='flex flex-col space-y-10 w-full'>
                            <div className='flex flex-col'>
                                <span className='text-lg font-bold'>Nous serions très heureux de vous recevoir parmi nous.</span>
                                <span className='text-gray-500 text-sm'>
                                    Vous recevrez un mail de confirmation.
                                </span>
                            </div>
                            <div className='flex flex-col mt-6 space-y-1 w-full'>
                                <span className=''>Votre motivation*</span>
                                <span className='text-gray-500 text-sm'>Nous voudrions savoir qu'est-ce qui vous encourage à contribuer</span>
                                <textarea value={motivation} onChange={e=>setMotivation(e.target.value)}  name="" id="" cols="30" rows="10" className='bg-gris2 p-8 rounded-xl'></textarea>
                            </div>
                        </div>
                    </div>
                    <button className='relative mb-6 z-50 flex mt-12' onClick={nextStep} >
                        <div className='text-white rounded-full bg-asfer border border-black py-2 px-12 sm:text-xl font-bold z-40  transition duration-150 hover:translate-x-1 hover:translate-y-1 '>
                            Contribuer
                        </div>
                        <div className='text-white rounded-full  border border-black py-2 px-12 sm:text-xl font-bold absolute top-1 left-1 -z-10 '>
                            Contribuer
                        </div>
                    </button>
                </div>
    )
}
