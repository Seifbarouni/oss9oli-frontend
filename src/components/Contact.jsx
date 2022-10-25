import React, { useState } from 'react'
import logo_ar_fr from '../assets/images/logo_ar_fr.png'

export const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const submit = (e) => {
        e.preventDefault()
        console.log(
            {
                name,
                email,
                message
            }
        )
        // send meesage request
    }

    return (
        <div className='relative w-full z-40'>
            <form
                className="bg-white  border border-black z-30 w-full rounded-3xl lg:p-20 p-8"
                onSubmit={submit}
            >
                <div className='flex flex-col'>
                    <div className='flex w-full space-x-24 items-center'>
                        <div className='w-1/2'>
                            <img src={logo_ar_fr} alt="" />
                        </div>
                        <div className='flex flex-col w-2/3 space-y-8'>
                            <div className='flex flex-col space-y-1'>
                                <span className=''>Votre nom complet</span>
                                <input type="text" className='rounded-full py-3 bg-gris placeholder:text-white focus:outline-none pl-5 border border-black'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required />
                            </div>

                            <div className='flex flex-col space-y-1'>
                                <span className=''>Votre adresse mail</span>
                                <input type="email" className='rounded-full py-3 bg-gris placeholder:text-white focus:outline-none pl-5 border border-black '
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />
                            </div>
                            <div className='flex flex-col  space-y-1'>
                                <span className=''>Votre message</span>
                                <input type="text" className='rounded-[40px] py-12 bg-gris placeholder:text-white focus:outline-none pl-5 border border-black placeholder:text-sm' placeholder="Qu'est-ce que vous avez à nous dire?"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required />
                            </div>

                        </div>
                    </div>
                    <div className='mt-8 flex justify-between items-center px-8'>
                        <div className='flex flex-col'>
                            <span>oss9oli.com@gmail.com</span>
                            <span>Tunis, Tunisie</span>
                        </div>
                        <button className='relative z-30'
                            type='submit'
                        >
                            <div
                                className="text-white text-2xl bg-orng3 rounded-full px-6 py-2 text-center cursor-pointer border border-black z-40 transition duration-150 hover:-translate-x-1 hover:translate-y-1 flex items-center space-x-2"
                            >
                                <span>Envoyer</span>

                            </div>
                            <div
                                className="border border-black rounded-full   px-6 py-2 absolute right-1 top-1 -z-10 w-full text-2xl"
                            >
                                <span className="invisible">Envoyer</span>
                            </div>
                        </button>
                    </div>
                </div>

            </form>
            <div
                className="border border-black  absolute right-1 top-1 -z-20 w-full rounded-3xl lg:p-20 p-8"
            >
                <div className='flex flex-col invisible'>
                    <div className='flex w-full space-x-12 items-center'>
                        <div className='w-1/2'>
                            <img src={logo_ar_fr} alt="" />
                        </div>
                        <div className='flex flex-col w-2/3 space-y-8'>
                            <div className='flex flex-col space-y-1'>
                                <span className=''>Votre nom complet</span>
                                <input type="text" className='rounded-full py-3 bg-gris placeholder:text-white focus:outline-none pl-5 border border-black ' required />
                            </div>

                            <div className='flex flex-col space-y-1'>
                                <span className=''>Votre adresse mail</span>
                                <input type="text" className='rounded-full py-3 bg-gris placeholder:text-white focus:outline-none pl-5 border border-black ' required />
                            </div>
                            <div className='flex flex-col  space-y-1'>
                                <span className=''>Votre messange</span>
                                <input type="text" className='rounded-[40px] py-12 bg-gris placeholder:text-white focus:outline-none pl-5 border border-black placeholder:text-sm' placeholder="Qu'est-ce que vous avez à nous dire?" required />
                            </div>

                        </div>
                    </div>
                    <div className='mt-8 flex justify-between items-center px-8'>
                        <div className='flex flex-col'>
                            <span>oss9oli.com@gmail.com</span>
                            <span>Tunis, Tunisie</span>
                        </div>
                        <div className='relative z-30'>
                            <div
                                className="text-white text-2xl bg-orng3 rounded-full px-6 py-2 text-center cursor-pointer border border-black z-40 transition duration-150 hover:-translate-x-1 hover:translate-y-1 flex items-center space-x-2"
                            >
                                <span>Envoyer</span>

                            </div>
                            <div
                                className="border border-black rounded-full   px-6 py-2 absolute right-1 top-1 -z-10 w-full text-2xl"
                            >
                                <span className="invisible">Envoyer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
