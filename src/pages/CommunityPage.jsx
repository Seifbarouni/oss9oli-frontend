import React, { useEffect } from 'react'
import { Events } from '../components/Events'
import { AuthenticatedNavbar } from '../components/nav/AuthenticatedNavbar'
import { Sidebar } from '../components/nav/Sidebar'
import { SmallScreenNav } from '../components/nav/SmallScreenNav'
import { Post } from '../components/Post'
import { Seperator } from '../components/Seperator'
import { Sujet } from '../components/Sujet'
import { Vote } from '../components/Vote'
import { useOpen } from '../store/store'
import { useNavigate } from 'react-router-dom'
import { decode } from '../jwt/jwt'
import { useCookies } from 'react-cookie'
import { useState } from 'react'
import axios from 'axios'
import { Question } from '../components/Question'

export const CommunityPage = () => {
    const navigate = useNavigate()
    const [cookies] = useCookies(['oss9oli']);
    const [post, setPost] = useState("");
    const [posts, setPosts] = useState([]);
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        if (Object.entries(cookies).length === 0) {
            navigate("/auth")
        }
        const { pack, name } = decode(cookies.oss9oli)
        if (pack === "" || pack === "free" || pack === "consumer_pack") {
            navigate("/accueil")
        }
        setName(name)
        axios.get(`${process.env.REACT_APP_POST_SERVICE}/api/v1/posts`).then(res => {
            if (res.data.success) {
                setPosts(res.data.data)
                setLoading(false)
            }
        }).catch(err => console.error(err))
    }, [])

    const publish = () => {
        axios.post(`${process.env.REACT_APP_POST_SERVICE}/api/v1/posts`, {
            content: post,
            userId: (decode(cookies.oss9oli)).userId
        }).then(res => {
            if (res.data.success) {
                window.location.reload()
            }
        }).catch(err => console.error(err))
    }


    const open = useOpen((state) => state.open)
    return (
        <div className='flex flex-col pb-44'>
            <AuthenticatedNavbar />
            <Seperator mt={0} />
            <div className='flex'>
                {open && <div className='lg:flex hidden'>
                    <Sidebar selected={"community"} />
                </div>}
                {open && <div className='flex lg:hidden absolute top-0 z-50'>
                    <div className='sticky'>
                        <SmallScreenNav selected={"community"} />
                    </div>
                </div>}
                <div className='sm:pt-16 sm:pl-16 pt-1 pl-1  flex-grow flex flex-col z-40'>
                    <div className='flex flex-col space-y-2'>
                        <span className='header text-5xl'>Bonjour!</span>
                        <span className='text-3xl'>{name}</span>
                    </div>
                    <div className='flex flex-col mt-6 space-y-1 px-4'>
                        <input type="text" value={post} onChange={e => setPost(e.target.value)} className='rounded-[40px] py-12 bg-gris placeholder:text-white focus:outline-none pl-5 border border-black placeholder:text-sm' placeholder='Ecrit quelque chose...' required />
                    </div>
                    <div className={`flex justify-center items-center ${!open ? "md:px-44" : ""}`}>

                        <button className="relative mb-6 z-50 mt-16" onClick={publish} >
                            <div className='text-white rounded-full bg-orng2 border border-black py-2 px-12 sm:text-xl font-bold z-40 cursor-pointer transition duration-150 hover:translate-x-1 hover:translate-y-1 '>
                                Publier
                            </div>
                            <div className='text-white rounded-full  border border-black py-2 px-12 sm:text-xl font-bold absolute -z-10 top-1 left-1'>
                                Publier
                            </div>
                        </button>
                    </div>
                    <div className='flex flex-col mt-24'>
                        <Question />
                    </div>
                    <div className='flex flex-col mt-24'>
                        <span className='text-3xl font-semibold'>Evènements à venir</span>
                        <div className='mt-4 flex w-full'>
                            <Events />
                        </div>
                    </div>
                    <div className='flex flex-col mt-24'>
                        <span className='text-3xl font-semibold'>Notre prochain sujet</span>
                        <span className='text-gray-500'>C'est le sujet qu'on va enregistrer dans notre podcast prochain</span>
                        <div className='mt-4'>
                            <Sujet />
                        </div>
                    </div>
                    <div className='border-b border-black mt-12'></div>
                    <div className='mt-12'>
                        <Vote name={"Rana Jollanar"} vote_data={"“Nous sommes heureux en Tunisie.”"} />
                    </div>

                    {loading &&
                        <div className='flex justify-center items-center mt-10'>
                            <div className="animate-spin rounded-full h-24 w-24 border-b-2 border-orng2"></div>
                        </div>
                    }

                    {posts.map((post) => (
                        <>
                            <div className='mt-12'>
                                <Post postId={post._id} name={post.userId.name} data={post.content} img={post.userId.customSeed} likes={post.likes} comments={post.comments} />
                            </div>
                            <div className='border-b border-black mt-12'></div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}
