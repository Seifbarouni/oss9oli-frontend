import { XIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import spark from '../assets/svgs/spark2.svg'
import foucha from '../assets/svgs/foucha.svg'
import { decode } from '../jwt/jwt'
import { useNavigate } from 'react-router-dom'

export const ProfileBanner = ({ name, desc }) => {
    const [edit, setEdit] = useState(false)
    const [inputName, setInputName] = useState(name)
    const [loading, setLoading] = useState(false)
    const [inputDescription, setInputDescription] = useState(desc || "")
    const [cookies, setCookie] = useCookies(["oss9oli"])
    const { customSeed, pack } = decode(cookies.oss9oli)
    const navigate = useNavigate()
    const updateUserData = async () => {
        const config = {
            headers: {
                Authorization: `Bearer ${cookies.oss9oli}`
            },
        }
        setLoading(true)
        const { userId } = decode(cookies.oss9oli)
        axios.post(`${process.env.REACT_APP_AUTH_SERVER_URI}/api/v1/${userId}`, {
            name: inputName,
            description: inputDescription
        }, config
        ).then(res => {
            setCookie("oss9oli", res.data.data)
            window.location.reload()
            setLoading(false)
        }).catch(err => {
            console.log(err)
            setLoading(false)
        }
        )
    }

    return (
        <div className={`border border-black border-l-0 border-t-0 ${pack === "producer_pack" ? "bg-orng4" : ""} ${pack === "community_pack" ? "bg-green-100" : ""} ${pack === "free" ? "bg-red-50" : ""} flex md:flex-row flex-col items-center md:items-start`}>
            {!edit && <div className='md:hidden flex items-center w-full p-2' onClick={() => setEdit(true)}>
                <img src={foucha} alt="" />
            </div>}
            {edit && <div className='md:hidden flex items-center w-full p-2' >
                <XIcon className='h-8 w-8' onClick={() => setEdit(false)} />
            </div>}

            <div className=' p-11  z-50'>
                <div className='border border-black bg-white rounded-full h-44 w-44 relative flex  justify-center'>
                    <div className={`border border-black  
                    ${pack === "producer_pack" ? "bg-orng" : ""} 
                    ${pack === "community_pack" ? "bg-akhdher" : ""} 
                    ${pack === "free" ? "bg-a7mer" : ""}
                    rounded-full h-44 w-44 absolute top-1 left-1 -z-10`}>
                    </div>
                    <img src={`https://avatars.dicebear.com/api/croodles/${customSeed}.svg`} alt="" className='rounded-full' />
                </div>
            </div>
            <div className='p-12 flex flex-col '>
                <div className={`${pack === "producer_pack" ? "text-orng5" : ""} font-black ${pack === "community_pack" ? "text-akhdher" : ""}
                    ${pack === "free" ? "text-a7mer" : ""}
                `}


                >{pack === "producer_pack" ? "CREATEUR" : ""}
                    {pack === "community_pack" ? "COMMUNAUTE O9" : ""}
                    {pack === "free" ? "AUDITEUR" : ""}


                </div>
                <div className=''>
                    {!edit && <span className='xl:text-5xl lg:text-3xl text-2xl font-bold relative'>
                        <div className='absolute xl:bottom-4 bottom-2 -right-8'>
                            <img src={spark} alt="" />
                        </div>
                        {name}
                    </span>}
                    {edit && <span className='xl:text-5xl lg:text-3xl text-2xl font-bold relative'>
                        <div className='absolute xl:bottom-4 bottom-2 -right-8'>
                            <img src={spark} alt="" />
                        </div>
                        <input type="text" required placeholder='Nom' value={inputName} onChange={(e) => setInputName(e.target.value)} className={`w-2/3  ${pack === "producer_pack" ? "bg-asfer3" : ""}
                        ${pack === "community_pack" ? "bg-green-100" : ""}
                        ${pack === "free" ? "bg-red-100" : ""}
                        border border-black border-dashed rounded-xl  placeholder:text-gray-400 focus:outline-none`} />
                    </span>}
                </div>
                {
                    pack === "producer_pack" &&
                    <div
                        className='flex mt-1 z-50'

                    >
                        <div
                            onClick={() => navigate("/mychannel")}
                        >
                            <div
                                className="text-white text-xl bg-orng5 rounded-full px-2  text-center border border-black z-30 transition duration-150 hover:-translate-x-1 hover:translate-y-1 flex items-center space-x-2 "
                            >
                                <span>Ma chaine</span>
                            </div>
                            <div
                                className="border border-black rounded-full px-2 absolute right-1 top-1 z-20 text-xl"
                            >
                                <span className="">Ma chaine</span>
                            </div>
                        </div>
                    </div>

                }
                {/* <div className='mt-4 border border-black xl:w-[300px] w-56 rounded-xl flex-grow  '>

                    {!edit && <div className={`h-24 rounded-xl   p-2 overflow-scroll w-full
                    ${pack === "producer_pack" ? "bg-asfer3" : ""} 
                     ${pack === "community_pack" ? "bg-green-100" : ""}
                        ${pack === "free" ? "bg-red-100" : ""}
                    `}>
                        {desc}
                    </div>}

                    {edit && <input type="text" required className={`h-full w-full rounded-xl ${pack === "producer_pack" ? "bg-asfer3" : ""} 
                     ${pack === "community_pack" ? "bg-green-100" : ""}
                        ${pack === "free" ? "bg-red-100" : ""}
                    p-6 placeholder:text-gray-400 focus:outline-none`} placeholder='Décrivez-vous au monde..' value={inputDescription} onChange={(e) => setInputDescription(e.target.value)} />}
                </div> */}
            </div>
            {!edit && <div className='md:flex hidden justify-end flex-1 pr-6 pt-2 ' onClick={() => setEdit(true)}>
                <img src={foucha} alt="" />
            </div>}
            {edit && <div className='md:flex hidden justify-end flex-1 pr-6 pt-2' >
                <div className='flex flex-col justify-end items-end space-y-2'>
                    <XIcon className='h-8 w-8 ' onClick={() => setEdit(false)} />
                    {loading === false && <div className={`${pack === "producer_pack" ? "bg-orng" : ""}
                    ${pack === "community_pack" ? "bg-akhdher" : ""}
                    ${pack === "free" ? "bg-a7mer" : ""}
                    text-white border border-black rounded-xl p-2 `} onClick={() => updateUserData()}>
                        Sauvegarder
                    </div>}
                    {loading === true &&
                        <div className='bg-gray-400 text-white border border-black rounded-xl p-2 cursor-not-allowed'>
                            En cours...
                        </div>
                    }
                </div>
            </div>}
            {edit && loading === false &&
                <div className={` 
                ${pack === "producer_pack" ? "bg-orng" : ""}
                    ${pack === "community_pack" ? "bg-akhdher" : ""}
                    ${pack === "free" ? "bg-a7mer" : ""}
                text-white border border-black rounded-xl p-2 mb-4 md:hidden flex`} onClick={() => updateUserData()}>
                    Sauvegarder
                </div>
            }
            {edit && loading === true &&
                <div className='bg-gray-400 text-white border border-black rounded-xl p-2 cursor-not-allowed mb-4 md:hidden flex'>
                    En cours...
                </div>
            }
        </div>
    )
}
