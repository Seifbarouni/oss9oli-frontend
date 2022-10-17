import React, { useState } from 'react'
import { decode } from '../jwt/jwt'
import { useCookies } from 'react-cookie';
import axios from 'axios'
export const Question = () => {
    const [cookies] = useCookies(['oss9oli']);
    const [options, setOptions] = useState(["", ""])
    const [question, setQuestion] = useState("")

    const verif = ()=>{
        let arr = options.filter((option)=>{
            return option != "" 
        })
        return arr.length >= 2 && question != ""
    }
    const addQuestion = (e) => {
        e.preventDefault()
        let arr = options.filter((option)=>{
            return option != "" 
        })
        if(arr.length >= 2 && question != ""){
            axios.post(`${process.env.REACT_APP_POST_SERVICE}/api/v1/posts`, {
                question,
                options: arr,
                userId: (decode(cookies.oss9oli)).userId
            }).then(res => {
                if (res.data.success) {
                    window.location.reload()
                }
            }).catch(err => console.error(err))
        }
    }

    const updateOption = ( value, index)=>{
        let varArr = [...options];
        varArr[index] = value
        setOptions(varArr)
    }

    const addOption = (e)=>{
        e.preventDefault()
        setOptions([...options, "" ])
    }

    return (
        <div className='flex flex-col mt-24'>

        <form
            className='border-2 border-dashed border-gray-800 mx-6 p-12 rounded-[50px] '
        >
            <input type="text" placeholder='Demandez une question..' value={question} onChange={(e)=>setQuestion(e.target.value)} className=' 
            w-full text-2xl placeholder:text-gray-800 focus:outline-none bg-transparent' />

            {/* options list */}
            <div className='flex justify-center  space-x-2 sm:flex-row flex-col'>
                {options.map((option, index) => 
                    (
                    <div className='mt-2'>
                    <div className="relative mb-6 z-50" >
                        <div className='rounded-full bg-gris border border-black py-2 px-12 sm:text-xl z-40 cursor-pointer transition duration-150 hover:translate-x-1 hover:translate-y-1 '>
                        <input type="text" placeholder='Option' value={option} onChange={(e)=>updateOption(e.target.value, index)}
                        className='w-full text-2xl placeholder:text-gray-400 focus:outline-none bg-transparent' />
                        </div>
                        <div className='rounded-full  border border-black py-2 px-12 sm:text-xl absolute -z-10 top-1 left-1 w-full'>
                        <input type="text" placeholder='Option' value={option} className=' 
                            w-full text-2xl placeholder:text-gray-400 focus:outline-none bg-transparent' />
                        </div>
                    </div>
                </div> 
                    )
                )}
                <button className="relative mb-6 z-50" onClick={e=>addOption(e)}>
                    <div className=' rounded-full bg-gris border border-black py-2 px-12 sm:text-xl font-bold z-40 cursor-pointer transition duration-150 hover:translate-x-1 hover:translate-y-1 '>
                        +
                    </div>
                    <div className=' rounded-full  border border-black py-2 px-12 sm:text-xl font-bold absolute -z-10 top-3 left-1 '>
                        +
                    </div>
                </button>
            </div>

            {/* submit button */}
            <div className='flex justify-end items-center'>
                <button className="relative mb-6 z-50" onClick={e=>addQuestion(e)} >
                    <div className={'text-white rounded-full border border-black py-2 px-12 sm:text-xl font-bold z-40 cursor-pointer transition duration-150 hover:translate-x-1 hover:translate-y-1 ' + (verif()? "bg-orng2": "bg-orange-200") }>
                        Publier
                    </div>
                    <div className='text-white rounded-full  border border-black py-2 px-12 sm:text-xl font-bold absolute -z-10 top-1 left-1'>
                        Publier
                    </div>
                </button>
            </div>

        </form>
        </div>
    )
}
