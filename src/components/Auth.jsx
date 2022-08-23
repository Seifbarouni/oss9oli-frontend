import React from 'react'
import google from '../assets/svgs/ggle.svg'
import o9Blurry from '../assets/svgs/o9-blurry.svg'
import authArrow from '../assets/svgs/auth-arrow.svg'
import facebook from '../assets/svgs/fb.svg'
import welcome from '../assets/svgs/welcome.svg'
import mouth from '../assets/svgs/mouth.svg'
import orange_star from '../assets/svgs/orange_star.svg'
import who from '../assets/images/who.png'
import { useNavigate } from 'react-router-dom'
import { XIcon } from '@heroicons/react/outline'

export const Auth = () => {
    const navigate = useNavigate()
    return (
        <div className='relative flex justify-center'>
            <div className='p-12 bg-white rounded-[50px] border border-black flex flex-col justify-center items-center relative'>
                <div className='absolute -bottom-32 -right-32 cursor-pointer md:flex hidden'>
                    <img src={authArrow} alt="" />
                </div>
                <div className='absolute top-4 left-5 cursor-pointer' onClick={() => navigate("/")}>
                    <XIcon className='text-ka7ouli h-8 w-8' />
                </div>
                <div className='absolute -top-20 -left-20 md:flex hidden'>
                    <img src={welcome} alt="" />
                </div>
                <div className='absolute -top-44 left-30 md:hidden flex'>
                    <img src={welcome} alt="" />
                </div>
                <div className='absolute -top-44 -right-32 md:flex hidden'>
                    <img src={mouth} alt="" />
                </div>
                <div className='absolute -bottom-0 -left-16 h-32 w-32 '>
                    <div className='relative'>
                        <img src={orange_star} alt="" className='absolute -top-8' />
                        <img src={who} alt="" />
                    </div>


                </div>
                <div className='header md:text-5xl text-4xl text-ka7ouli mt-6'>
                    Rejoignez-nous!
                </div>
                <div className='mt-20 flex flex-col w-full space-y-1'>
                    <a href={`https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?access_type=offline&client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URL}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email`} className="relative  rounded-full w-full z-50">
                        <div className='flex items-center bg-orng p-3 rounded-full px-5 border border-black transition duration-150 hover:-translate-x-1 hover:translate-y-1 z-40'>
                            <div>
                                <img src={google} alt="" />
                            </div>
                            <div className='text-white font-bold flex-1 text-center md:text-lg'>
                                Continuer avec Google
                            </div>
                        </div>
                        <div className='absolute border border-black rounded-full top-1 right-1 w-full h-full -z-10'>

                        </div>
                    </a>
                    <div className='text-center'>
                        ou
                    </div>
                    <a href={`https://www.facebook.com/v14.0/dialog/oauth?client_id=${process.env.REACT_APP_FACEBOOK_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_FACEBOOK_REDIRECT_URL}&state=state-param&scope=email`} className="relative rounded-full w-full z-50">
                        <div className='flex items-center border border-black bg-azreg p-3 rounded-full px-5 transition duration-150 hover:-translate-x-1 hover:translate-y-1 z-40'>
                            <div>
                                <img src={facebook} alt="" />
                            </div>
                            <div className='text-white font-bold flex-1 text-center md:text-lg'>
                                Continuer avec Facebook
                            </div>
                        </div>
                        <div className='absolute border border-black rounded-full top-1 right-1 w-full h-full -z-10'>

                        </div>

                    </a>
                </div>
                <div className='mt-16 flex justify-center items-center text-center w-2/3'>
                    <span>
                        En continuant, vous acceptez <span className='font-bold cursor-pointer'>les termes et conditions</span> de Oss9oli.
                    </span>
                </div>
                <div className='mt-4'>
                    <img src={o9Blurry} alt="" />
                </div>
            </div>
            <div className='absolute bg-asfer p-12 rounded-[50px] border border-black flex flex-col justify-center items-center -z-10 top-1  right-1 w-full h-full'>
                <div className='header md:text-5xl text-4xl text-ka7ouli mt-6 invisible'>
                    Rejoignez-nous!
                </div>
                <div className='mt-28 flex space-x-4 invisible'>
                    <div className='mt-20 flex flex-col w-full space-y-1'>
                        <a href="#" className="relative  rounded-full w-full z-50">
                            <div className='flex items-center bg-orng p-3 rounded-full px-5 border border-black transition duration-150 hover:-translate-x-1 hover:translate-y-1 z-40'>
                                <div>
                                    <img src={google} alt="" />
                                </div>
                                <div className='text-white font-bold flex-1 text-center md:text-lg'>
                                    Continuer avec Google
                                </div>
                            </div>
                            <div className='absolute border border-black rounded-full top-1 right-1 w-full h-full -z-10'>

                            </div>
                        </a>
                        <div className='text-center'>
                            ou
                        </div>
                        <a href="#" className="relative rounded-full w-full z-50">
                            <div className='flex items-center border border-black bg-azreg p-3 rounded-full px-5 transition duration-150 hover:-translate-x-1 hover:translate-y-1 z-40'>
                                <div>
                                    <img src={facebook} alt="" />
                                </div>
                                <div className='text-white font-bold flex-1 text-center md:text-lg'>
                                    Continuer avec Facebook
                                </div>
                            </div>
                            <div className='absolute border border-black rounded-full top-1 right-1 w-full h-full -z-10'>

                            </div>

                        </a>
                    </div>
                    <div className='mt-32 flex justify-center items-center text-center w-2/3'>
                        <span>
                            En continuant, vous acceptez <span className='font-bold cursor-pointer'>les termes et conditions</span> de Oss9oli.
                        </span>
                    </div>
                    <div className='mt-6'>
                        <img src={o9Blurry} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}
