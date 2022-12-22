import React, { useEffect, useState } from 'react'
import { Events } from '../components/Events'
import { AuthenticatedNavbar } from '../components/nav/AuthenticatedNavbar'
import { Sidebar } from '../components/nav/Sidebar'
import { SmallScreenNav } from '../components/nav/SmallScreenNav'
import { Post } from '../components/Post'
import { Sujet } from '../components/Sujet'
import { Vote } from '../components/Vote'
import { useOpen } from '../store/store'
import { useNavigate } from 'react-router-dom'
import { decode } from '../jwt/jwt'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { Question } from '../components/Question'
import { Pensee } from '../components/Pensee'

import { useAnimation } from '../hooks/useAnimation'

export const CommunityPage = () => {
    const navigate = useNavigate()
    const [cookies] = useCookies(['oss9oli']);
    const [posts, setPosts] = useState([]);
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState("pensee")
    const { props, a } = useAnimation();
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




    const open = useOpen((state) => state.open)
    return (
        <div className='flex flex-col pb-44'>
            <AuthenticatedNavbar />
            <div
                className='flex'
            >
                <div>
                    {open && <div className='lg:flex hidden sticky top-24'>
                        <Sidebar selected={"community"} />
                    </div>}
                </div>
                {open && <div className='flex lg:hidden absolute top-0 z-50'>
                    <div className='sticky'>
                        <SmallScreenNav selected={"community"} />
                    </div>
                </div>}
                <a.div
                    style={props}
                    className='sm:pt-16 sm:pl-16 pt-1 pl-1  flex-grow flex flex-col z-40'>
                    <div className='flex flex-col space-y-2'>
                        <span className='header text-5xl'>Bonjour!</span>
                        <span className='text-3xl'>{name}</span>
                    </div>
                    <div className={`flex justify-center items-center space-x-4 ${!open ? "md:px-44" : ""}`}>

                        <button className="relative z-50" onClick={() => { setType("pensee") }}>
                            <div className={'text-white rounded-full border border-black py-2 px-12 sm:text-xl font-bold z-40  transition duration-150 hover:translate-x-1 hover:translate-y-1 ' + (type !== "pensee" ? "bg-gray-400" : "bg-akhdher")}>
                                Pensée
                            </div>
                            <div className='text-white rounded-full  border border-black py-2 px-12 sm:text-xl font-bold absolute -z-10 top-1 left-1'>
                                Pensée
                            </div>
                        </button>

                        <button className="relative z-50 " onClick={() => { setType("vote") }}>
                            <div className={'text-white rounded-full  border border-black py-2 px-12 sm:text-xl font-bold z-40  transition duration-150 hover:translate-x-1 hover:translate-y-1 ' + (type !== "vote" ? "bg-gray-400" : "bg-orng")}>
                                Vote
                            </div>
                            <div className='text-white rounded-full  border border-black py-2 px-12 sm:text-xl font-bold absolute -z-10 top-1 left-1'>
                                Vote
                            </div>
                        </button>
                    </div>
                    {type === "pensee" ?
                        <Pensee />
                        :
                        <Question />
                    }


                    {/**/}
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

                    {loading &&
                        <div className='flex justify-center items-center mt-10'>
                            <div className="animate-spin rounded-full h-24 w-24 border-b-2 border-orng2"></div>
                        </div>
                    }

                    {posts.map((post, index) =>
                        post.__t === "Vote" ?
                            <div className='mt-12' key={"vote-"+index}>
                                <Vote name={post.userId.name} question={post.question} options={post.options} img={post.userId.customSeed} userId={decode(cookies.oss9oli).userId} postId={post._id} />
                                <div className='border-b border-black mt-12'></div>
                            </div>
                            :
                            <div key={"post-"+index}>
                                <div className='mt-12' >
                                    <Post postId={post._id} name={post.userId.name} data={post.content} img={post.userId.customSeed} likes={post.likes} dislikes={post.dislikes} comments={post.comments} />
                                </div>
                                <div className='border-b border-black mt-12'></div>
                            </div>
                    )}
                </a.div>
            </div>
        </div>
    )
}
