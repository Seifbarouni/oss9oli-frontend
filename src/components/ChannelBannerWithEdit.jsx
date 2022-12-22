import React, { useState } from 'react'
import person from '../assets/svgs/person.svg'
import { useCookies } from 'react-cookie'
import { decode } from '../jwt/jwt'
import axios from 'axios'

export const ChannelBannerWithEdit = ({ name, img, desc, episodes}) => {
    const [channel_name, setName] = useState(name)
    const [description, setDescription] = useState(desc)
    const [file, setFile] = useState(img)
    const [preview, setPreview] = useState(img)
    const [channelId, setChannelId] = useState("")
    const [loading, setLoading] = useState(false)
    const [edit, setEdit] = useState(false)
    const [cookies] = useCookies(['oss9oli']);

    const updateImage = (e) => {
        // check if image is bigger than 2MB
        if (e.target.files[0].size > 2097152) {
            alert("Image is too big")
        }
        else {
            setFile(e.target.files[0])
        }
    }

    const cancel = () => {
        setEdit(false)
        setName(name)
        setDescription(desc)
        setPreview(img)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("name", channel_name)
        formData.append("description", description)
        formData.append("file", file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            },
            headers: {
                Authorization: `Bearer ${cookies.oss9oli}`
            }
        }
        // check if description is more than 256 characters
        if (description.length > 256) {
            alert("Description is too long")
        } else {
            axios.put(`${process.env.REACT_APP_PODCAST_SERVICE}/api/v1/channels/me`, formData, config).then(res => {
                console.log(res)
                window.location.reload()
            }
            ).catch(err => {
                console.log(err)
            }
            )
        }

    }
    return (
        <form
            onSubmit={onSubmit}
            className='p-6 bg-cover bg-center h-96 px-16 z-30 relative flex'
            style={
                {
                    backgroundImage: `url(data:${img?.contentType};base64,${img?.data?.toString('base64')})`,
                }
            }
        >
            <div className='bg-akhdher  absolute opacity-30 z-30 top-0 left-0 h-96 w-full'>
            </div>
            {!edit && <div className='absolute top-12 right-12 z-50' onClick={() => setEdit(true)}>
                <div
                    className="text-white text-2xl bg-orng5 rounded-full px-6 text-center  border border-black z-40 transition duration-150 hover:-translate-x-1 hover:translate-y-1 flex items-center space-x-2"
                >
                    <span>Personaliser</span>
                </div>
                <div
                    className="border border-black rounded-full   px-6 absolute right-1 top-1 -z-20 w-full text-2xl"
                >
                    <span className="invisible"> Personaliser </span>
                </div>
            </div>}
            {edit &&
                <input type="file" onChange={(e) => updateImage(e)} accept="image/*" className='absolute top-44 right-12 z-50' />
            }
            {edit && <div className='absolute top-24 right-12 z-50'
                onClick={() => cancel()}
            >
                <div
                    className="text-white text-2xl bg-red-500 rounded-full px-6 text-center border border-black z-40 transition duration-150 hover:-translate-x-1 hover:translate-y-1 flex items-center space-x-2"
                >
                    <span>Annuler</span>

                </div>
                <div
                    className="border border-black rounded-full   px-6 absolute right-1 top-1 -z-20 w-full text-2xl"
                >
                    <span className="invisible"> Annuler </span>
                </div>
            </div>}
            {edit && <button
                type='submit'
                className='absolute top-12 right-12 z-50'
            >
                <div
                    className="text-white text-2xl bg-orng5 rounded-full px-6 text-center border border-black z-40 transition duration-150 hover:-translate-x-1 hover:translate-y-1 flex items-center space-x-2"
                >
                    <span>Sauvegarder</span>

                </div>
                <div
                    className="border border-black rounded-full   px-6 absolute right-1 top-1 -z-20 w-full text-2xl"
                >
                    <span className="invisible"> Sauvegarder </span>
                </div>
            </button>}
            <div className='mt-56 flex sm:flex-row flex-col top-64  h-96 z-50 '>
                <div className=''>
                    <div className='border border-black bg-white rounded-full h-52 w-52 relative flex  justify-center items-center'>
                        <div className='border border-black bg-orng rounded-full h-52 w-52 absolute top-1 left-1 -z-20'>
                        </div>
                        <img src={person} alt="" className='h-24 w-24' />
                    </div>
                </div>
                <div className='flex flex-col sm:ml-28 ml-0 mt-11 space-y-2'>
                    <span className='text-lg '>Chaine</span>
                    {!edit && <span className='text-5xl font-black '>{name}</span>}
                    {edit && <input
                        type="text"
                        className="text-5xl font-black bg-transparent border border-black border-dashed focus:outline-none rounded-md"
                        value={channel_name}
                        onChange={(e) => setName(e.target.value)}
                    />}
                    <span className='text-lg '>{[new Set(episodes.map(eps=>eps.podcastId))].length} podcasts - {episodes.length} sons </span>
                    {!edit && <span className='w-5/6 overflow-y-scroll h-44'>
                        {desc}
                    </span>}
                    {edit && <textarea
                        type="text"
                        className="w-5/6 overflow-y-scroll h-32 bg-transparent border border-black border-dashed focus:outline-none rounded-md"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />}
                </div>
            </div>


        </form>
    )
}
