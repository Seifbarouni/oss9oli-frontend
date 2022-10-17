import React, { useState } from 'react'
import { decode } from '../jwt/jwt'
import { useCookies } from 'react-cookie';
import axios from 'axios'
import { useOpen } from '../store/store'

export const Pensee = () => {
    const [post, setPost] = useState("");
    const [cookies] = useCookies(['oss9oli']);
    const open = useOpen((state) => state.open)

    const publish = () => {
        axios.post(`${process.env.REACT_APP_POST_SERVICE}/api/v1/posts`, {
            content: post,
            userId: (decode(cookies.oss9oli)).userId
        }).then(res => {
            if (res.data.success) {
                window.location.reload()
            }
        }).catch(err => console.error(err))
    }
    return <div>
        <div className='flex flex-col mt-24'>
            <form
                className='border-2 border-dashed border-gray-800 mx-6 p-12 rounded-[50px] '
            >
                <textarea type="text" value={post} onChange={e => setPost(e.target.value)} 
                className='bg-transparent placeholder:text-grey-500 focus:outline-none pl-5 resize-none w-full h-full' placeholder='Ecrit quelque chose...' required />
                <div className={`flex justify-end items-center ${!open ? "md:px-44" : ""}`}>

                <button className="relative mb-6 z-50 mt-16" onClick={publish} >
                    <div className={'text-white rounded-full border border-black py-2 px-12 sm:text-xl font-bold z-40 cursor-pointer transition duration-150 hover:translate-x-1 hover:translate-y-1 '+ (post == ""? "bg-orange-200": "bg-orng2")}>
                        Publier
                    </div>
                    <div className='text-white rounded-full  border border-black py-2 px-12 sm:text-xl font-bold absolute -z-10 top-1 left-1'>
                        Publier
                    </div>
                </button>
                </div>
            </form>
        </div>
                    
    </div>
}