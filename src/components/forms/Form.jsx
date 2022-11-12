import React from 'react'
import { useState } from 'react'
import audio from '../../assets/svgs/audio.svg'
import camera from '../../assets/svgs/camera.svg'
import black_star from '../../assets/svgs/black_star.svg'
import yellow_star from '../../assets/svgs/yellow_star.svg'
import axios from 'axios'
import { useCookies } from 'react-cookie'
export const Form = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [tags, setTags] = useState("")
    const [type, setType] = useState("Monologue")
    const [file, setFile] = useState("")
    const [episodeNumber, setEpisodeNumber] = useState(1)
    // new
    const [imageFile, setImageFile] = useState("")
    const [epDescription, setEpDescription] = useState("")
    const [epName, setEpName] = useState("")
    const [explicit, setExplicit] = useState(false)

    const [guest, setGuest] = useState("")
    const [loading, setLoading] = useState(false)
    const [cookies] = useCookies(['oss9oli']);

    const onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("title", name)
        formData.append("description", description)
        formData.append("explicit", explicit)
        formData.append("type", type)
        const tagArray = tags.split("#")
        formData.append("tags", tagArray)
        formData.append("file", imageFile)
        formData.append("file", file)
        formData.append("episodeNumber", episodeNumber)
        formData.append("episodeName", epName)
        formData.append("episodeDescription", epDescription)
        formData.append("guest", guest)
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                Authorization: `Bearer ${cookies.oss9oli}`
            },
        }
        if (file.size > 104857600) {
            alert("File size is too big")
            setFile("")
        } else if (imageFile.size > 2097152) {
            alert("Image size is too big")
            setImageFile("")
        }
        // check if description is longer than 200 characters
        else if (description.length > 200 || epDescription.length > 200) {
            alert("Description is too long")
        } else {
            axios.post(`${process.env.REACT_APP_PODCAST_SERVICE}/api/v1/podcasts`, formData, config).then(res => {
                localStorage.removeItem("myEps")
                localStorage.removeItem("myPods")
                window.location.href = "/mychannel"
            }
            ).catch(err => {
                alert(err)
                setLoading(false)
            }
            )
        }
    }

    const getProgress = () => {
        let points = 1
        if (name) points++;
        if (description) points++;
        if (tags) points++;
        if (file) points++;
        return points;
    }

    return (
        <>
            {!loading && <div className='w-full flex flex-col pb-[700px]'>
                <div className='flex flex-col space-y-2'>
                    <span>Avancement</span>
                    <span className='border border-black  w-full flex bg-white'>
                        {
                            getProgress() < 5 ?
                                <>
                                    <span className={'w-' + getProgress() + '/5 bg-orng2 p-1.5'}></span>
                                    <span className={'w-' + (5 - getProgress()) + '/5 bg-white p-1.5'}></span>
                                </>
                                :
                                <span className={'w-full bg-orng2 p-1.5'}></span>

                        }

                    </span>
                </div>
                <form className='rounded-3xl border border-black  bg-white flex flex-col  w-full justify-center items-center p-4 mt-12 relative lg:px-24' onSubmit={onSubmit}>
                    <div className='absolute top-16 left-0'>
                        <img src={black_star} alt="" />
                    </div>
                    <div className='absolute -top-6 -right-8'>
                        <img src={yellow_star} alt="" />
                    </div>
                    <div className='rounded-3xl   p-6 bg-white flex flex-col  w-full md:space-x-8'>
                        <div className='flex flex-col space-y-1 w-full'>
                            <span className=''>Informations du podcast</span>
                            <span className='text-gray-500 text-sm'>Remplissez avec des infomations sur vous et votre podcast</span>
                        </div>
                        <div className='flex md:flex-row flex-col md:space-x-24 mt-16 w-full md:space-y-0 space-y-2 '>
                            <div className='flex flex-col'>
                                <div className='flex flex-col space-y-1'>
                                    <span className=''>Ajoutez une couverture*</span>
                                    <span className='text-gray-500 text-sm'>Télécharger une image personnalisée pour votre podcast</span
                                    >
                                    <div className='border border-black p-4 bg-gris rounded-3xl flex flex-col justify-center items-center w-1/2'>
                                        <img src={camera} alt="" className='' />
                                        <div class="flex text-sm text-gray-600">
                                            <label for="img-upload" class="relative cursor-pointer  rounded-md font-medium text-gray-600 hover:text-ray-500 focus-within:outline-none">
                                                <span>Upload an image</span>
                                                {imageFile && <div className='text-black'>{imageFile.name}</div>}
                                                <input onChange={(e) => setImageFile(e.target.files[0])} id="img-upload" name="img-upload" type="file" class="sr-only"
                                                    required
                                                    accept='image/*' />
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                <div className='flex flex-col mt-6 space-y-1'>
                                    <span className=''>Description*</span>
                                    <span className='text-gray-500 text-sm'>Parlez de votre podcast en quelques lignes</span>
                                    <input type="text" className='rounded-[40px] py-12 bg-gris placeholder:text-white focus:outline-none pl-5 border border-black placeholder:text-sm' placeholder='Une courte description de votre podcast. Quelques phrases sont recommendées.' required value={description} onChange={(e) => setDescription(e.target.value)} />
                                </div>

                            </div>
                            <div className='flex flex-col w-1/2'>
                                <div className='flex flex-col space-y-1'>
                                    <span className=''>Choisissez un nom pour votre podcast*</span>
                                    <span className='text-gray-500 text-sm'>Choisissez un nom unique qui reprèsente votre podcast</span>
                                    <input type="text" className='rounded-full py-3 bg-gris placeholder:text-white focus:outline-none pl-5 border border-black placeholder:text-sm' placeholder='Nom du podcast' value={name} onChange={(e) => setName(e.target.value)} required />
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
                        </div>
                        <div className='flex flex-col space-y-1 mt-24 w-full'>
                            <span className=''>Ajouter un épisode</span>
                            <span className='text-gray-500 text-sm'>Ajouter le premier épisode de votre podcast</span>
                        </div>
                        <div className='flex md:flex-row flex-col md:space-y-0 space-y-2 md:space-x-24 mt-16 w-full'>
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
