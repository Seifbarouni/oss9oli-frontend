import React, { useEffect, useState } from 'react'
import { useOpen } from '../store/store'
import { useNavigate, useParams } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { decode } from '../jwt/jwt'
import audio from '../assets/svgs/audio.svg'
import { AuthenticatedNavbar } from '../components/nav/AuthenticatedNavbar'
import { Sidebar } from '../components/nav/Sidebar'
import { SmallScreenNav } from '../components/nav/SmallScreenNav'
import axios from 'axios'


export const AddEpisodePage = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const [epDescription, setEpDescription] = useState("")
    const [epName, setEpName] = useState("")
    const [explicit, setExplicit] = useState(false)
    const [guest, setGuest] = useState("")
    const [file, setFile] = useState("")
    const [tags, setTags] = useState("")
    const [episodeNumber, setEpisodeNumber] = useState(1)
    const [type, setType] = useState("Monologue")


    const open = useOpen((state) => state.open)
    const [cookies] = useCookies(['oss9oli']);
    useEffect(() => {
        if (Object.entries(cookies).length === 0) {
            navigate("/auth")
        }
        const { pack } = decode(cookies.oss9oli)
        if (pack !== "producer_pack") {
            navigate("/accueil")
        }
        // check if id is a mongodb object id
        // if not, redirect to /accueil
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            navigate("/accueil")
        }
        // scroll to top
        window.scrollTo(0, 0)
    }, [])
    const onSubmit = (e) => {
        e.preventDefault()
        //setLoading(true)
        const formData = new FormData()
        formData.append("explicit", explicit)
        const tagArray = tags.split("#")
        formData.append("tags", tagArray)
        formData.append("file", file)
        formData.append("episodeNumber", episodeNumber)
        formData.append("title", epName)
        formData.append("description", epDescription)
        formData.append("podcastId", id)
        formData.append("guest", guest)
        formData.append("type", type)
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                Authorization: `Bearer ${cookies.oss9oli}`
            },
        }
        if (file.size > 104857600) {
            alert("File size is too big")
            setFile("")
        }
        // check if description is longer than 200 characters
        else if (epDescription.length > 200) {
            alert("Description is too long")
        } else {
            axios.post(`${process.env.REACT_APP_PODCAST_SERVICE}/api/v1/episodes`, formData, config).then(res => {
                window.location.href = "/mychannel"
            }
            ).catch(err => {
                alert(err)
            }
            )
        }
    }

    return (
        <div className='flex flex-col '>
            <AuthenticatedNavbar />
            <div className='flex pb-96'>
                <div>
                    {open && <div className='lg:flex hidden sticky top-24 z-40'>
                        <Sidebar selected={"addep"} />
                    </div>}
                </div>
                {open && <div className='flex lg:hidden absolute top-0 z-50'>
                    <div className='sticky'>
                        <SmallScreenNav selected={"addep"} />
                    </div>
                </div>}
                <div className='pb-[700px] h-full  pt-16'>
                    <form className='flex  flex-col   w-full rounded-3xl border border-black  bg-white justify-center items-center p-16 relative lg:mx-24 z-30'
                        onSubmit={onSubmit}
                    >

                        <div className='flex xl:flex-row flex-col md:space-y-0 space-y-2 md:space-x-24'>
                            <div className='flex flex-col'>
                                <div className='flex flex-col space-y-1'>
                                    <span className=''>Titre du premier episode*</span>
                                    <span className='text-gray-500 text-sm'>Choisissez un titre pour le premier episode du podcast</span>
                                    <input type="text" className='rounded-full py-3 bg-gris placeholder:text-white focus:outline-none pl-5 border border-black placeholder:text-sm' placeholder='Nom du podcast' value={epName} onChange={(e) => setEpName(e.target.value)} required />
                                </div>
                                <div className='flex flex-col mt-6 space-y-1'>
                                    <span className=''>Description de l'épisode*</span>
                                    <span className='text-gray-500 text-sm'>Parlez de l'épisode en quelques lignes</span>
                                    <input type="text" className='rounded-[40px] py-12 bg-gris placeholder:text-white focus:outline-none pl-5 border border-black placeholder:text-sm' placeholder='Une courte description de votre podcast. Quelques phrases sont recommendées.' required value={epDescription} onChange={(e) => setEpDescription(e.target.value)} />
                                </div>
                                <div className='flex flex-col mt-6 space-y-1'>
                                    <span className=''>Tags</span>
                                    <span className='text-gray-500 text-sm'>Ajoutez des tags pour que nos auditeurs puissent trouver votre podcast</span>
                                    <input type="text" className='rounded-full py-3 bg-gris placeholder:text-white focus:outline-none pl-5 border border-black placeholder:text-sm' placeholder='Tags:#exemple#féminisme#violence' value={tags} onChange={(e) => setTags(e.target.value)} />
                                </div>
                                <div className='flex flex-col mt-6 space-y-1'>
                                    <span className=''>Type*</span>
                                    <span className='text-gray-500 text-sm'>Quel est le type de votre podcast?</span>
                                    <div className="flex sm:flex-row flex-col sm:space-x-4">
                                        <div className="form-check form-check-inline flex items-center space-x-2">
                                            <label className="form-check-label inline-block text-gray-800 sm:text-lg" for="inlineRadio10">Monologue</label>
                                            <input className="form-check-input form-check-input appearance-none rounded-full h-6 w-6 border border-orng2 bg-white checked:bg-orng2  focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="type" id="inlineRadio1" value="Monologue" onChange={(e) => setType("Monologue")} checked={type === 'Monologue'} />
                                        </div>
                                        <div className="form-check form-check-inline flex items-center space-x-2">
                                            <label className="form-check-label inline-block text-gray-800 sm:text-lg" for="inlineRadio20">Dialogue</label>
                                            <input className="form-check-input form-check-input appearance-none rounded-full h-6 w-6 border border-orng2 bg-white checked:bg-orng2  focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="type" id="inlineRadio2" value="Dialogue" onChange={(e) => setType("Dialogue")} checked={type === 'Dialogue'} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col'>
                                <div className='flex flex-col space-y-1'>
                                    <span className=''>Choisissez le numéro de votre épisode*</span>

                                    <input type="number" className='rounded-full py-3 bg-gris placeholder:text-white focus:outline-none pl-5 border border-black placeholder:text-sm' placeholder="Numéro de l'épisode" onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                    }}
                                        value={episodeNumber} onChange={(e) => setEpisodeNumber(e.target.value)} required />
                                </div>
                                <div className='flex flex-col mt-6 space-y-1'>
                                    <span className=''>Invité</span>
                                    <span className='text-gray-500 text-sm'>Nom de votre invité</span>
                                    <input type="text" className='rounded-full py-3 bg-gris placeholder:text-white focus:outline-none pl-5 border border-black placeholder:text-sm' placeholder="Nom de l'invité" value={guest} onChange={(e) => setGuest(e.target.value)} required />
                                </div>
                                <div className='flex flex-col mt-6 space-y-1'>
                                    <span className=''>Explicite*</span>
                                    <span className='text-gray-500 text-sm'>Notifiez vos auditeurs de l'existence d'un contenu sexuel</span>
                                    <div className='flex space-x-4 mt-2'>
                                        <div className="z-50 relative" onClick={() => setExplicit(true)}>
                                            <div
                                                className={`text-white text-2xl ${explicit === true ? "bg-akhdher" : "bg-gris "} rounded-full px-10 py-2 text-center cursor-pointer border border-black z-40 transition duration-150 hover:-translate-x-1 hover:translate-y-1 flex items-center space-x-2`}
                                            >
                                                <span>OUI</span>

                                            </div>
                                            <div
                                                className="border border-black rounded-full   px-6 absolute right-1 top-1 -z-20 w-full text-2xl py-2"
                                            >
                                                <span className="invisible">OUI</span>
                                            </div>
                                        </div>
                                        <div className="z-50 relative" onClick={() => setExplicit(false)}>
                                            <div
                                                className={`text-white text-2xl ${explicit === true ? "bg-gris" : "bg-akhdher "}  rounded-full px-10 py-2 text-center cursor-pointer border border-black z-40 transition duration-150 hover:-translate-x-1 hover:translate-y-1 flex items-center space-x-2`}
                                            >
                                                <span>NON</span>

                                            </div>
                                            <div
                                                className="border border-black rounded-full   px-6 absolute py-2 right-1 top-1 -z-20 w-full text-2xl"
                                            >
                                                <span className="invisible">NON</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col  space-y-1 mt-6'>
                                    <span className=''>Télécharger votre audio*</span>
                                    <span className='text-gray-500 text-sm'>Le fichier ne doit pas dépassez 100Mo</span>
                                    <div className='border border-black p-4 bg-gris rounded-3xl flex flex-col justify-center items-center w-56 overflow-x-scroll'>
                                        <img src={audio} alt="" className='' />
                                        <div class="flex text-sm text-gray-600">
                                            <label for="file-upload" class="relative cursor-pointer  rounded-md font-medium text-gray-600 hover:text-ray-500 focus-within:outline-none ">
                                                <span>Upload a file</span>
                                                {file && <div className='text-black'>{file.name}</div>}
                                                <input onChange={(e) => setFile(e.target.files[0])} id="file-upload" name="file-upload" type="file" class="sr-only"
                                                    required
                                                    accept='audio/*' />
                                            </label>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <button className='relative mb-6 z-50 flex mt-12' type='submit'>
                            <div className='text-white rounded-full bg-orng2 border border-black py-2 px-12 sm:text-xl font-bold z-40 cursor-pointer transition duration-150 hover:translate-x-1 hover:translate-y-1 '>
                                Publiez
                            </div>
                            <div className='text-white rounded-full  border border-black py-2 px-12 sm:text-xl font-bold absolute top-1 left-1 -z-10 '>
                                Publiez
                            </div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
