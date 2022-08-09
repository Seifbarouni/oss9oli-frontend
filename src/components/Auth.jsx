import React from 'react'
import google from '../assets/svgs/google.svg'
import facebook from '../assets/svgs/facebook.svg'
import welcome from '../assets/svgs/welcome.svg'
import mouth from '../assets/svgs/mouth.svg'
import orange_star from '../assets/svgs/orange_star.svg'
import who from '../assets/images/who.png'

export const Auth = () => {
    return (
        <div className='relative flex justify-center'>
            <div className='p-12 bg-white rounded-[50px] border border-black flex flex-col justify-center items-center relative'>
                <div className='absolute -top-20 -left-20 md:flex hidden'>
                    <img src={welcome} alt="" />
                </div>
                <div className='absolute -top-44 left-20 md:hidden flex'>
                    <img src={welcome} alt="" />
                </div>
                <div className='absolute -top-44 -right-32 md:flex hidden'>
                    <img src={mouth} alt="" />
                </div>
                <div className='absolute -bottom-0 -left-16 h-32 w-32 '>
                    <img src={who} alt="" />
                </div>
                <div className='absolute -left-16 top-56'>
                    <img src={orange_star} alt="" />
                </div>
                <div className='header md:text-5xl text-4xl text-ka7ouli mt-12'>
                    Rejoignez-nous!
                </div>
                <div className='mt-28 flex space-x-4'>
                    <img src={google} alt="" className='transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer' />
                    <img src={facebook} alt="" className='transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer' />
                </div>
            </div>
            <div className='absolute bg-asfer p-12 rounded-[50px] border border-black flex flex-col justify-center items-center -z-10 top-1  -left-1'>
                <div className='header md:text-5xl text-4xl text-ka7ouli mt-12 invisible'>
                    Rejoignez-nous!
                </div>
                <div className='mt-28 flex space-x-4 invisible'>
                    <img src={google} alt="" className='transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer' />
                    <img src={facebook} alt="" className='transition ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer' />
                </div>
            </div>
        </div>
    )
}
