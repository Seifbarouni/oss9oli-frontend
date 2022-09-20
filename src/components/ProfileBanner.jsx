import { PencilAltIcon, XIcon } from '@heroicons/react/solid'
import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import spark from '../assets/svgs/spark2.svg'
import { decode } from '../jwt/jwt'

export const ProfileBanner = ({ shows, episodes, name, img, desc }) => {
    const [edit, setEdit] = useState(false)
    const [inputName, setInputName] = useState(name)
    const [inputImage, setInputImage] = useState("")
    const [uploadedImage, setUploadedImage] = useState(null)
    const [preview, setPreview] = useState("")
    const [loading, setLoading] = useState(false)
    const [inputDescription, setInputDescription] = useState(desc || "")
    const [cookies, setCookie] = useCookies(["oss9oli"])
    const updateImage = (e) => {
        // check if image is bigger than 2MB
        if (e.target.files[0].size > 2097152) {
            alert("Image is too big")
        }
        else {
            setInputImage(e.target.files[0])
            setPreview(URL.createObjectURL(e.target.files[0]))
        }
    }
    const updateUserData = () => {
        const form = new FormData()
        if (inputImage !== "") {
            localStorage.removeItem("image")
            form.append("file", inputImage)
        }
        if (inputName !== "") {
            form.append("name", inputName)
        }
        if (inputDescription !== "") {
            form.append("description", inputDescription)
        }
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                Authorization: `Bearer ${cookies.oss9oli}`
            },
        }
        setLoading(true)
        const { userId } = decode(cookies.oss9oli)
        axios.post(`${process.env.REACT_APP_AUTH_SERVER_URI}/api/v1/${userId}`, form, config
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
    const { isImagePresent } = decode(cookies.oss9oli)
    useEffect(() => {
        if (isImagePresent === true) {
            const config = {
                headers: {
                    Authorization: `Bearer ${cookies.oss9oli}`
                }
            }
            // try to get image from local storage
            const image = localStorage.getItem("image")
            if (image) {
                // parse local storage image
                try {
                    const parsedImage = JSON.parse(image)
                    setUploadedImage(parsedImage)
                } catch (error) {
                    // if parsing fails, remove image from local storage
                    localStorage.removeItem("image")
                    axios.get(`${process.env.REACT_APP_AUTH_SERVER_URI}/api/v1/image`, config).then((res) => {
                        setUploadedImage(res.data.image)
                        localStorage.setItem("image", JSON.stringify(res.data.image))
                    }).catch((err) => {
                        console.log(err)
                    })
                }

            } else {
                axios.get(`${process.env.REACT_APP_AUTH_SERVER_URI}/api/v1/image`, config).then((res) => {
                    setUploadedImage(res.data.image)
                    localStorage.setItem("image", JSON.stringify(res.data.image))
                }).catch((err) => {
                    console.log(err)
                })
            }
        }
    }, [])
    return (
        <div className='border border-black border-l-0 border-t-0 bg-orng4 flex md:flex-row flex-col items-center md:items-start'>
            {!edit && <div className='md:hidden flex items-center   cursor-pointer w-full p-2' onClick={() => setEdit(true)}>
                <PencilAltIcon className='h-8 w-8' />
            </div>}
            {edit && <div className='md:hidden flex items-center   cursor-pointer w-full p-2' >
                <XIcon className='h-8 w-8' onClick={() => setEdit(false)} />
            </div>}

            <div className='md:border-r border-black p-11  z-50'>
                {!edit && <div className='border border-black bg-white rounded-full h-44 w-44 relative flex  justify-center'>
                    <div className='border border-black bg-orng rounded-full h-44 w-44 absolute top-1 left-1 -z-10'>
                    </div>
                    {isImagePresent === false ?
                        <img src={img} alt="" className='rounded-full' />
                        :
                        <img src={`data:image/${uploadedImage?.contentType};base64, 
                     ${uploadedImage?.data.toString('base64')}`} alt="" className='rounded-full h-44 w-44' />
                    }
                </div>}
                {edit && <div className='border border-black bg-white rounded-full h-44 w-44 relative flex  justify-center'>
                    <div className='border border-black bg-orng rounded-full h-44 w-44 absolute top-1 left-1 -z-10'>
                    </div>
                    <img src={preview} alt="" className='rounded-full bg-asfer3 h-full w-full' />
                </div>}
                {edit &&
                    <input type={"file"} className="mt-2 w-44" onChange={(e) => updateImage(e)} />
                }
            </div>
            <div className='p-12 flex flex-col '>
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
                        <input type="text" required placeholder='Nom' value={inputName} onChange={(e) => setInputName(e.target.value)} className="w-2/3 bg-asfer3 border border-black rounded-xl  placeholder:text-gray-400 focus:outline-none" />
                    </span>}
                </div>
                <div className='flex space-x-2  text-gray-700 mt-6'>
                    <span>{shows} shows</span><span>-</span><span>{episodes} épisodes </span>
                </div>
                <div className='mt-4 border border-black xl:w-[300px] w-56 rounded-xl flex-grow  '>

                    {!edit && <div className='h-24 rounded-xl bg-asfer3  p-2 overflow-scroll w-full'>
                        {desc}
                    </div>}

                    {edit && <input type="text" required className='h-full w-full rounded-xl bg-asfer3  p-6 placeholder:text-gray-400 focus:outline-none' placeholder='Décrivez-vous au monde..' value={inputDescription} onChange={(e) => setInputDescription(e.target.value)} />}
                </div>
            </div>
            {!edit && <div className='md:flex hidden justify-end flex-1 pr-6 pt-2 cursor-pointer' onClick={() => setEdit(true)}>
                <PencilAltIcon className='h-8 w-8' />
            </div>}
            {edit && <div className='md:flex hidden justify-end flex-1 pr-6 pt-2' >
                <div className='flex flex-col justify-end items-end space-y-2'>
                    <XIcon className='h-8 w-8 cursor-pointer' onClick={() => setEdit(false)} />
                    {loading === false && <div className='bg-orng text-white border border-black rounded-xl p-2 cursor-pointer' onClick={() => updateUserData()}>
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
                <div className='bg-orng text-white border border-black rounded-xl p-2 cursor-pointer mb-4 md:hidden flex' onClick={() => updateUserData()}>
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
