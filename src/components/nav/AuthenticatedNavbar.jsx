import React, { useState, useEffect } from 'react'
import { Hamburger } from '../buttons/Hamburger'
import { JoinButton } from '../buttons/JoinButton'

import { Link } from 'react-router-dom'
import black_logo from '../../assets/svgs/black_logo.svg'
import { useOpen } from '../../store/store'
import { useCookies } from 'react-cookie'
import { decode } from '../../jwt/jwt'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAudio } from '../../store/store'

export const AuthenticatedNavbar = () => {
    const navigate = useNavigate()
    const setOpen = useOpen((state) => state.setOpen)
    const [cookies, setCookie, removeCookie] = useCookies(['oss9oli']);
    const { pack, picture, isImagePresent } = decode(cookies.oss9oli)
    const [uploadedImage, setUploadedImage] = useState(null)
    const toggleAudio = useAudio((state) => state.toggleAudio)
    const logout = () => {
        removeCookie("oss9oli")
        localStorage.removeItem("image")
        toggleAudio()
        navigate("/auth")
    }
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
        <nav className="flex items-center justify-evenly p-3 z-40 w-full xl:px-12 ">
            <div className='flex items-center w-full'>
                <div onClick={() => setOpen()}>
                    <Hamburger />
                </div>
                {(pack === "" || pack === "free") && <div className='pl-8 md:flex hidden'>
                    <JoinButton
                        cd1={"relative z-20"}
                        cd2={"bg-asfer rounded-full py-2 px-5 text-center cursor-pointer border border-black transition duration-150 hover:-translate-x-1 hover:translate-y-1 text-white w-full "}
                        cd3={"border border-black rounded-full py-2 px-5 absolute right-1 top-1 -z-10 w-full"}
                        data={"VIENS! ON T'ATTEND"}
                        to={'/auth'}
                    />
                </div>}
            </div>
            <div className='w-full flex justify-center'>
                <Link to={'/'}>
                    <img src={black_logo} alt="" />
                </Link>
            </div>
            <div className='w-full flex justify-end items-center'>
                <div className='pr-4 cursor-pointer hover:underline' onClick={() => logout()}>
                    Se déconnecter
                </div>
                <Link to={"/profile"}>
                    <div className='h-16 w-16 border border-black rounded-full bg-white'>
                        {isImagePresent === false ? <img src={picture} alt="" referrerpolicy="no-referrer" className='rounded-full' /> :
                            <img src={`data:image/${uploadedImage?.contentType};base64, 
                     ${uploadedImage?.data.toString('base64')}`} alt="" className='rounded-full h-full w-full' />
                        }
                    </div>
                </Link>
            </div>
        </nav>
    )
}
