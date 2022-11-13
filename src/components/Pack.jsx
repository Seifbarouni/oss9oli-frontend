import axios from 'axios'
import React from 'react'
import { useCookies } from 'react-cookie'
import { decode } from '../jwt/jwt'
import { JoinButton } from './buttons/JoinButton'

export const Pack = ({ children, color, price, buttonText, title, desc, more, pack }) => {
    const [cookies, setCookie] = useCookies(['oss9oli']);
    const payload = decode(cookies.oss9oli)
    const updateUser = ()=>{
        console.log(pack)
        axios.post(`${process.env.REACT_APP_AUTH_SERVER_URI}/api/v1/${payload.userId}`, {pack: pack}, {
            headers: {
                Authorization: `Bearer ${cookies.oss9oli}`
            }
        }).then(res=>{
            console.log(res.data)
            if(res.data.success){
                setCookie("oss9oli", res.data.data)
            }
        })
    }
    return (
        <div className='flex flex-col bg-white rounded-[50px] w-96 border border-black'>
            <div className={`flex flex-col ${color} text-white rounded-t-[50px] p-6 items-center text-center h-36 border-b border-black`}>
                <span className='font-bold sm:text-2xl text-xl'>{title}</span>
                <span className='mt-4 sm:text-base text-sm'>{desc}</span>
            </div>
            <div className='flex flex-col items-center '>
                {price !== 0 ? <div className='flex pt-8'>
                    <span className='sm:text-6xl text-4xl font-bold'>{price}</span>
                    <span className='font-bold'>dt</span>
                </div> :
                    <div className='flex pt-8'>
                        <span className='sm:text-5xl text-3xl font-bold'>GRATUIT</span>
                    </div>}
                <div className='flex flex-col p-12 text-center h-72'>
                    {children}
                </div>
                <div className={'text-xs pb-2'}>
                    {more}
                    {!more && <span className='invisible'>text</span>}
                </div>
                <div className='pb-12'>
                    <JoinButton
                        cd1={"relative z-40"}
                        cd2={`text-white ${color} rounded-full py-2 px-12 text-center cursor-pointer border border-black transition duration-150 hover:-translate-x-1 hover:translate-y-1 sm:text-3xl text-xl -z-20`}
                        cd3={"border border-black rounded-full py-2 px-12 absolute right-1 top-1 -z-30 w-full sm:text-3xl text-xl"}
                        data={buttonText}
                        to={`/auth?pack=${pack}`}
                        func={updateUser}
                    />
                </div>
            </div>
        </div>
    )
}
