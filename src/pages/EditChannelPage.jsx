import React, { useState, useEffect } from 'react'
import { AuthenticatedNavbar } from '../components/nav/AuthenticatedNavbar'
import { Sidebar } from '../components/nav/Sidebar'
import { SmallScreenNav } from '../components/nav/SmallScreenNav'
import { Seperator } from '../components/Seperator'
import { useOpen } from '../store/store'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { decode } from '../jwt/jwt'
import { useNavigate } from 'react-router-dom'

export const EditChannelPage = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [file, setFile] = useState()
    const [newFile, setNewFile] = useState()
    const [preview, setPreview] = useState()
    const [channelId, setChannelId] = useState("")
    const [loading, setLoading] = useState(false)
    const [cookies] = useCookies(['oss9oli']);
    const open = useOpen((state) => state.open)
    const navigate = useNavigate()
    useEffect(() => {
        if (Object.entries(cookies).length === 0) {
            navigate("/auth")
        }
        const { pack } = decode(cookies.oss9oli)
        if (pack !== "producer_pack") {
            navigate("/accueil")
        }
        setLoading(true)
        axios.get(`${process.env.REACT_APP_PODCAST_SERVICE}/api/v1/channels/chan/get`, {
            headers: { Authorization: `Bearer ${cookies.oss9oli}` }
        }).then(res => {
            setName(res.data.data.name)
            setDescription(res.data.data.description)
            setChannelId(res.data.data._id)
            setFile(res.data.data.image)
            setLoading(false)
        }).catch(err => {
            console.log(err)
            setLoading(false)
        }
        )

    }, [])
    const updateImage = (e) => {
        // check if image is bigger than 2MB
        if (e.target.files[0].size > 2097152) {
            alert("Image is too big")
        }
        else {
            setNewFile(e.target.files[0])
            setPreview(URL.createObjectURL(e.target.files[0]))
        }
    }
    const onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("name", name)
        formData.append("description", description)
        formData.append("file", newFile)
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
        <div className='flex flex-col'>
            <AuthenticatedNavbar />
            {/* <Seperator mt={0} /> */}
            <div className='flex'>
                <div>
                    {open && <div className='lg:flex hidden sticky top-24'>
                        <Sidebar selected={"edit"} />
                    </div>}
                </div>
                {open && <div className='flex lg:hidden absolute top-0 z-50'>
                    <div className='sticky'>
                        <SmallScreenNav selected={"edit"} />
                    </div>
                </div>}
                {!loading && <form className='flex flex-col z-40 w-full p-12' onSubmit={onSubmit}>
                    <div className={`flex mt-4 flex-col ${!open ? "md:px-44" : ""}`}>
                        <span className='text-orng2 text-5xl'>EDITER CHAINE</span>
                        <div className='flex flex-col space-y-1 mt-4'>
                            <span className=''>Informations de votre chaine</span>
                            <span className='text-gray-500 text-sm'>Editez les informations de votre chaine </span>
                        </div>
                    </div>
                    <div className={`flex flex-col mt-16 space-y-1 ${!open ? "md:px-44" : ""}`}>
                        <span className=''>Editez le nom de votre chaine*</span>
                        <input type="text" className='rounded-full py-3 bg-gris placeholder:text-white focus:outline-none pl-5 border border-black placeholder:text-sm' placeholder='Nom de la chaine' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className={`flex flex-col mt-6 space-y-1 ${!open ? "md:px-44" : ""}`}>
                        <span className=''>Editez la description de votre chaine*</span>
                        <input type="text" className='rounded-[40px] py-12 bg-gris placeholder:text-white focus:outline-none pl-5 border border-black placeholder:text-sm' placeholder='Une courte description de votre chaine. Quelques phrases sont recommendées.' value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className={`flex flex-col mt-6 space-y-1 ${!open ? "md:px-44" : ""}`}>
                        <span className=''>Editez la photo de votre chaine*</span>
                        <div className='w-96 h-72 rounded-3xl border border-black'>
                            {!preview ? <img src={`data:image/${file?.contentType};base64, 
                     ${file?.data.toString('base64')}`} className='w-full h-full rounded-3xl' alt=''></img> :
                                <img src={preview} className='w-full h-full rounded-3xl' alt=''></img>
                            }
                        </div>
                        <input type="file" onChange={(e) => updateImage(e)} accept="image/*" />
                    </div>
                    <div className={`flex justify-center items-center ${!open ? "md:px-44" : ""}`}>

                        <button className="relative mb-6 z-50 mt-16" type="submit">
                            <div className='text-white rounded-full bg-orng2 border border-black py-2 px-12 sm:text-xl font-bold z-40 cursor-pointer transition duration-150 hover:translate-x-1 hover:translate-y-1 '>
                                Sauvegarder
                            </div>
                            <div className='text-white rounded-full  border border-black py-2 px-12 sm:text-xl font-bold absolute -z-10 top-1 left-1'>
                                Sauvegarder
                            </div>
                        </button>
                    </div>

                </form>}
                {loading && <div className='pb-[900px]'></div>}
            </div>
        </div>
    )
}