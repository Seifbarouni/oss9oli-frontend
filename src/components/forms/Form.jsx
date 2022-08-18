import React from 'react'
import { useState } from 'react'
import audio from '../../assets/svgs/audio.svg'
import black_star from '../../assets/svgs/black_star.svg'
import yellow_star from '../../assets/svgs/yellow_star.svg'
import axios from 'axios'

export const Form = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [tags, setTags] = useState("")
    const [type, setType] = useState("Monologue")
    const [file, setFile] = useState("")
    const [loading, setLoading] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData()
        formData.append("title", name)
        formData.append("description", description)
        const tagArray = tags.split("#")
        console.log(tagArray)
        formData.append("tags", tagArray)

        formData.append("type", type)
        formData.append("channelId", "62fd2fe11f3066f75b3de1a1")
        formData.append("file", file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        //check file is bigger than 100MB

        if (file.size > 104857600) {
            alert("File size is too big")
            setFile("")

        } else {
            axios.post(`${process.env.REACT_APP_AUTH_SERVER_URI}/api/v1/podcasts`, formData, config).then(res => {
                window.location.href = "/mypods"
            }
            ).catch(err => {
                alert(err)
                setLoading(false)
            }
            )
        }
    }
    return (
        <>
            {!loading && <div className='w-full flex flex-col pb-[700px]'>
                <div className='flex flex-col space-y-2'>
                    <span>Avancement</span>
                    <span className='border border-black  w-full flex'>
                        <span className='w-1/3 bg-orng2 p-1.5'></span>
                        <span className='w-2/3 bg-white p-1.5'></span>
                    </span>
                </div>
                <form className='rounded-3xl border border-black  bg-white flex flex-col  w-full justify-center items-center p-4 mt-12 relative' onSubmit={onSubmit}>
                    <div className='absolute top-16 left-0'>
                        <img src={black_star} alt="" />
                    </div>
                    <div className='absolute -top-6 -right-8'>
                        <img src={yellow_star} alt="" />
                    </div>
                    <div className='rounded-3xl   p-6 bg-white flex sm:flex-row flex-col  w-full space-x-2'>
                        <div className='flex flex-col sm:w-1/2'>
                            <div className='flex flex-col space-y-1'>
                                <span className=''>Informations du podcast</span>
                                <span className='text-gray-500 text-sm'>Remplissez avec des infomations sur vous et votre podcast</span>
                            </div>
                            <div className='flex flex-col mt-16 space-y-1'>
                                <span className=''>Choisissez un nom pour votre podcast*</span>
                                <span className='text-gray-500 text-sm'>Choisissez un nom unique qui reprèsente votre podcastRemplissez avec des infomations sur vous et votre podcast</span>
                                <input type="text" className='rounded-full py-3 bg-gris placeholder:text-white focus:outline-none pl-5 border border-black placeholder:text-sm' placeholder='Nom du podcast' value={name} onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div className='flex flex-col mt-6 space-y-1'>
                                <span className=''>Description*</span>
                                <span className='text-gray-500 text-sm'>Parlez de votre podcast en quelques lignes</span>
                                <input type="text" className='rounded-[40px] py-12 bg-gris placeholder:text-white focus:outline-none pl-5 border border-black placeholder:text-sm' placeholder='Une courte description de votre podcast. Quelques phrases sont recommendées.' required value={description} onChange={(e) => setDescription(e.target.value)} />
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
                            {/* <div className='flex flex-col mt-6 space-y-1'>
                            <span className=''>Catégorie*</span>
                            <span className='text-gray-500 text-sm'>Selectionnez la catégorie de votre podcastParlez de votre podcast en quelques lignes</span>
                            <select name="" id="" className='rounded-full py-4 bg-gris placeholder:text-white focus:outline-none pl-5 border border-black p-2 text-white'>
                                <option value="" className=''>Catégorie</option>
                                <option value="">Catégorie</option>
                                <option value="">Catégorie</option>
                            </select>
                        </div> */}
                            <div className='flex flex-col mt-6 space-y-1'>
                                <span className=''>Tags</span>
                                <span className='text-gray-500 text-sm'>Ajoutez des tags pour que nos auditeurs puissent trouver votre podcast</span>
                                <input type="text" className='rounded-full py-3 bg-gris placeholder:text-white focus:outline-none pl-5 border border-black placeholder:text-sm' placeholder='Tags:#exemple#féminisme#violence' value={tags} onChange={(e) => setTags(e.target.value)} />
                            </div>
                        </div>
                        <div className='flex flex-col sm:w-1/2'>

                            <div className='flex flex-col  space-y-1 sm:mt-0 mt-6'>
                                <span className=''>Télécharger votre audio*</span>
                                <span className='text-gray-500 text-sm'>Le fichier ne doit pas dépassez 1000mo</span>
                                <div className='border border-black p-4 bg-gris rounded-3xl flex flex-col justify-center items-center w-1/2'>
                                    <img src={audio} alt="" className='' />
                                    <div class="flex text-sm text-gray-600">
                                        <label for="file-upload" class="relative cursor-pointer  rounded-md font-medium text-gray-600 hover:text-ray-500 focus-within:outline-none">
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
                    <button className='relative mb-6 z-50' type='submit'>
                        <div className='text-white rounded-full bg-orng2 border border-black py-2 px-12 sm:text-xl font-bold z-40 cursor-pointer transition duration-150 hover:translate-x-1 hover:translate-y-1 '>
                            Publiez
                        </div>
                        <div className='text-white rounded-full  border border-black py-2 px-12 sm:text-xl font-bold absolute top-1 left-1 -z-10 '>
                            Publiez
                        </div>
                    </button>
                </form>
            </div>
            }
            {loading && <div className='pb-[1500px]'>Loading...</div>}
        </>
    )
}
