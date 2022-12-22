import off from '../../assets/svgs/off.svg'
import on from '../../assets/svgs/on.svg'

export default function Step1({nextStep, previousStep, suj, setSuj, nomApp, setNomApp, voix, setVoix, sexe, setSexe, origine, setOrigine, age, setAge, occupation, setOccupation}) {

    return(
        <div className='flex flex-col w-full rounded-3xl border border-black  bg-white justify-center items-center p-16 relative lg:mx-24 z-30 mb-44'>

                <div className='flex xl:flex-row flex-col xl:space-y-0 space-y-2 xl:space-x-24 space-x-0 w-full'>

                    <div className='flex flex-col space-y-10 w-full'>

                        <div className='flex flex-col space-y-1'>
                            <span className=''>Votre sexe*</span>
                            <span className='text-gray-500 text-sm'>Choisissez le sexe dont vous identifiez</span>
                            <input type="text" value={sexe} onChange={e=>setSexe(e.target.value)} className='rounded-full py-3 bg-gris placeholder:text-white focus:outline-none pl-5 border border-black placeholder:text-sm' placeholder='Sexe' />
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <span className=''>Origine*</span>
                            <span className='text-gray-500 text-sm'>Vous venez de quelle région de la Tunisie</span>
                            <input type="text" value={origine} onChange={e=>setOrigine(e.target.value)} className='rounded-full py-3 bg-gris placeholder:text-white focus:outline-none pl-5 border border-black placeholder:text-sm' placeholder='région' />
                        </div>
                        <div className='flex flex-col mt-6 space-y-1'>
                            <span className=''>C'est pour notre prochain sujet?*</span>
                            <span className='text-gray-500 text-sm'>Cochez oui si vous avez parlé du sujet qu'on abordera dans notre podcast prochain</span>
                            <div className='flex space-x-4 pt-4'>
                                <div className="z-50 relative" onClick={() => setSuj(true)}>
                                    <div
                                        className={`text-white text-2xl ${suj === true ? "bg-akhdher" : "bg-gris "} rounded-full px-10 py-2 text-center  border border-black z-40 transition duration-150 hover:-translate-x-1 hover:translate-y-1 flex items-center space-x-2`}
                                    >
                                        <span>OUI</span>

                                    </div>
                                    <div
                                        className="border border-black rounded-full   px-6 absolute right-1 top-1 -z-20 w-full text-2xl py-2"
                                    >
                                        <span className="invisible">OUI</span>
                                    </div>
                                </div>
                                <div className="z-50 relative" onClick={() => setSuj(false)}>
                                    <div
                                        className={`text-white text-2xl ${suj === true ? "bg-gris" : "bg-akhdher "}  rounded-full px-10 py-2 text-center  border border-black z-40 transition duration-150 hover:-translate-x-1 hover:translate-y-1 flex items-center space-x-2`}
                                    >
                                        <span>NON</span>

                                    </div>
                                    <div
                                        className="border border-black rounded-full   px-6 absolute py-2 right-1 top-1 -z-20 w-full text-2xl"
                                    >
                                        <span className="invisible">NON</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='flex flex-col w-full'>
                        <div className='flex flex-col space-y-1'>
                            <span className=''>Votre age*</span>
                            <span
                                className='text-gray-500 text-sm'
                            >
                                Quel est votre age?
                            </span>
                            <input value={age} onChange={e=>setAge(e.target.value)} type="number" className='rounded-full py-3 bg-gris placeholder:text-white focus:outline-none pl-5 border border-black placeholder:text-sm' placeholder="Age" />
                        </div>
                        <div className='flex flex-col mt-6 space-y-1'>
                            <span className=''>Occupation*</span>
                            <span className='text-gray-500 text-sm'>Qu'est-ce que vous faites dans la vie</span>
                            <input type="text" value={occupation} onChange={e=>setOccupation(e.target.value)} className='rounded-full py-3 bg-gris placeholder:text-white focus:outline-none pl-5 border border-black placeholder:text-sm' placeholder="Occupation" />
                        </div>

                        <div className='flex justify-between items-center mt-6'>
                            <div className='flex flex-col'>
                                <span>Nom apparent*</span>
                                <span className='text-gray-500 text-sm '>Cochez la case si vous voulez poster anonymement</span>
                            </div>
                            <div onClick={() => setNomApp(!nomApp)}>
                                {!nomApp ? <img src={off} alt="" /> : <img src={on} alt="" />}
                            </div>
                        </div>

                        <div className='flex justify-between items-center mt-6'>
                            <div className='flex flex-col'>
                                <span>Voix*</span>
                                <span className='text-gray-500 text-sm '>Cochez la case si vous voulez changez votre voix</span>
                            </div>
                            <div onClick={() => setVoix(!voix)}>
                                {!voix ? <img src={off} alt="" /> : <img src={on} alt="" />}
                            </div>
                        </div>



                    </div>

                </div>
                <button className='relative mb-6 z-50 flex mt-12' onClick={nextStep}>
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
