import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Step0 from '../openmic/step0'
import Step1 from '../openmic/step1'
import Step2 from '../openmic/step2'
import { useCookies } from 'react-cookie'
import axios from 'axios'

export const OpenMicForm = () => {
    const [cookies] = useCookies(['oss9oli']);
    const [file, setFile] = useState()
    const [message, setMessage] = useState("")
    const [sexe, setSexe] = useState("")
    const [origine, setOrigine] = useState("")
    const [age, setAge] = useState(0)
    const [occupation, setOccupation] = useState("")
    const [suj, setSuj] = useState(true)
    const [nomApp, setNomApp] = useState(false)
    const [voix, setVoix] = useState(false)
    const [motivation, setMotivation] = useState("")
    const [step, setStep] = useState(0)
    const navigate = useNavigate()

    const nextStep = ()=>{
        //add more interactif features here
        if(step != 0 && step != 1 && step != 2) return;
        if(step == 0){
            if(!file || !message) return;
            setStep(step+1)
        }else if(step == 1){
            if(!sexe || !age || !origine || !occupation ) return;
            setStep(step+1)
        }else if(step == 2){
            if(!motivation) return;
            const formData = new FormData()
            formData.append("file", file)
            formData.append("message", message)
            formData.append("sexe", sexe)
            formData.append("origine", origine)
            formData.append("age", age)
            formData.append("occupation", occupation)
            formData.append("suj", suj)
            formData.append("nomApp", nomApp)
            formData.append("voix", voix)
            formData.append("motivation", motivation)
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                },
                headers: {
                    Authorization: `Bearer ${cookies.oss9oli}`
                }
            }
            axios.post(`${process.env.REACT_APP_CONTACT_SERVICE}/api/v1/openmic`, formData, config).then(res => {
                if(res.data.success)
                    setStep(step+1)
            }
            ).catch(err => {console.log(err)})
        }
    }

    const previousStep = ()=>{

    }

    const generateSteps = ()=>{
        switch(step){
            case 0: return <Step0 file={file} setFile={setFile} message={message} setMessage={setMessage}  nextStep={nextStep}/>
            case 1: return <Step1 nextStep={nextStep} previousStep={previousStep} suj={suj} setSuj={setSuj} nomApp={nomApp} setNomApp={setNomApp} voix={voix} setVoix={setVoix} sexe={sexe} setSexe={setSexe} origine={origine} setOrigine={setOrigine} age={age} setAge={setAge} occupation={occupation} setOccupation={setOccupation}   />
            case 2: return <Step2 nextStep={nextStep} previousStep={previousStep} motivation={motivation} setMotivation={setMotivation} />
            default: navigate(`/accueil`)
        }
    }
    return (
        <>
            {generateSteps()}

            {/*
                step === 3 &&
                <form className='flex  flex-col w-full rounded-3xl border border-black  bg-white justify-center items-center p-16 relative lg:mx-24 z-30 mb-44 px-44'
                >
                    <div className='flex xl:flex-row flex-col md:space-y-0 space-y-2 md:space-x-24 w-full'>

                    </div>
                    <button className='relative mb-6 z-50 flex mt-12' type='submit'>
                        <div className='text-white rounded-full bg-asfer border border-black py-2 px-12 sm:text-xl font-bold z-40  transition duration-150 hover:translate-x-1 hover:translate-y-1 '>
                            Contribuer
                        </div>
                        <div className='text-white rounded-full  border border-black py-2 px-12 sm:text-xl font-bold absolute top-1 left-1 -z-10 '>
                            Contribuer
                        </div>
                    </button>
                </form>*/
            }
        </>
    )
}
