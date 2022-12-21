import React from 'react'
import likeActifPNG from '../assets/images/like-actif.png'
import dislikeActifPNG from '../assets/images/dislike-actif.png'
import likePNG from '../assets/images/like.png'
import dislikePNG from '../assets/images/dislike.png'
import commentPNG from '../assets/images/comment.png'
import { useEffect } from 'react'
import { useState } from 'react'
import { decode } from '../jwt/jwt'
import { useCookies } from 'react-cookie'
import axios from 'axios'

export const Post = ({ postId, name, data, img, likes, dislikes, comments }) => {
    const [liked, setLiked] = useState(false)
    const [likess, setLikes] = useState(likes)
    const [disliked, setDisliked] = useState(false)
    const [dislikess, setDislikes] = useState(dislikes || 0)
    const [comment, setComment] = useState("")
    const [coms, setComs] = useState([])
    const [showComm, setShowComm] = useState(false)
    const [cookies] = useCookies(['oss9oli']);
    const { userId, customSeed } = (decode(cookies.oss9oli))

    useEffect(() => {
        console.log(likes)
        console.log(dislikes)
        let tempLikes = likes.filter((id) => {
            return id === userId
        })
        let tempDislikes = dislikes?.filter((id) => {
            return id === userId
        })
        setLiked(tempLikes.length)
        setDisliked(tempDislikes?.length)

    }, [])

    const like = () => {
        axios.put(`${process.env.REACT_APP_POST_SERVICE}/api/v1/react/like/${postId}`, {},
            { headers: { Authorization: `Bearer ${cookies.oss9oli}` } }).then(res => {
                if (res.data.success) {
                    console.log(res.data.data)
                    setLikes(res.data.data.likes);
                    setLiked(res.data.data.likes.includes(userId))
                    setDislikes(res.data.data.dislikes);
                    setDisliked(res.data.data.dislikes.includes(userId))

                }
            }).catch(err => console.log(err))
    }

    const dislike = () => {
        axios.put(`${process.env.REACT_APP_POST_SERVICE}/api/v1/react/dislike/${postId}`, {},
            { headers: { Authorization: `Bearer ${cookies.oss9oli}` } }).then(res => {
                if (res.data.success) {
                    console.log(res.data.data)
                    setLikes(res.data.data.likes);
                    setLiked(res.data.data.likes.includes(userId))
                    setDislikes(res.data.data.dislikes);
                    setDisliked(res.data.data.dislikes.includes(userId))

                }
            }).catch(err => console.log(err))
    }

    const sendComment = e => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            axios.post(`${process.env.REACT_APP_POST_SERVICE}/api/v1/comments`, {
                comment: comment,
                postId: postId
            },
                { headers: { Authorization: `Bearer ${cookies.oss9oli}` } }).then(res => {
                    if (res.data.success) {
                        setComs([...coms, res.data.data])
                        setComment("")
                    }
                }).catch(err => console.log(err))
        }
    }

    const showComms = () => {
        if (!showComm) {
            axios.get(`${process.env.REACT_APP_POST_SERVICE}/api/v1/comments/${postId}`).then(res => {
                if (res.data.success) {
                    setComs(res.data.data)
                }
            }).catch(err => {
                console.log(err)
            })
        }
        else {
            setComs([])
        }
        setShowComm(!showComm)
    }

    return (
        <div className='flex xl:w-2/3'>
            <div className='relative z-50'>
                <div className='h-20 w-20 border border-black rounded-full bg-white flex items-center justify-center'>
                    <img src={`https://avatars.dicebear.com/api/croodles/${img}.svg`} alt="" className='rounded-full' />
                </div>
                <div className='h-20 w-20 absolute rounded-full border border-black top-1 left-1 -z-10'>

                </div>
            </div>
            <div className='flex flex-col w-full pl-5'>
                <span className='leading-tight'>
                    {name} <br />
                    <span className='text-gray-500 text-sm'>
                        a publié une pensée
                    </span>
                </span>
                <span className='lg:text-xl text-lg pt-2 pb-2 flex overflow-y-scroll'>
                    <span>
                        {data}
                    </span>
                </span>
                <div className='flex items-center space-x-4'>
                    <div className='flex items-center space-x-1'>
                        <img src={liked ? likeActifPNG : likePNG} onClick={like} />
                        <span>{likess.length}</span>
                    </div>
                    <div className='flex items-center space-x-1'>
                        <img src={disliked ? dislikeActifPNG : dislikePNG} onClick={dislike} />
                        <span>{dislikess.length}</span>
                    </div>
                    <div className='flex items-center space-x-1'>
                        <img src={commentPNG} /> <span>{comments.length}</span>
                    </div>
                </div>
                <div>

                    <div className='flex justify-between'>
                        <div className='invisible'>invisible</div>
                        <div onClick={showComms} className="mt-2">
                            {showComm ? <p>cacher les commentaires</p> : <p>voir les commentaires</p>}
                        </div>
                    </div>
                    {
                        coms.map((comment) => (
                            <div className='flex items-center w-full p-1 rounded-3xl border border-black bg-white mt-2'>
                                <div className='h-12 w-12 border border-black rounded-full bg-white flex items-center justify-center'>
                                    <img src={`https://avatars.dicebear.com/api/croodles/${comment.userId.customSeed}.svg`} alt="" className='rounded-full' />
                                </div>
                                <div className='pl-4'>
                                    <p>{comment.userId.name}</p>
                                    <p>{comment.comment}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className='flex items-center w-full p-1 rounded-3xl border border-black bg-white mt-2'>
                    <div className='h-12 w-12 border border-black rounded-full bg-white flex items-center justify-center'>
                        <img src={`https://avatars.dicebear.com/api/croodles/${customSeed}.svg`} alt="" className='rounded-full' />
                    </div>
                    <input type="text" value={comment} onKeyDown={sendComment} onChange={e => setComment(e.target.value)} placeholder="Qu'est ce que vous en pensez?" className='w-full focus:outline-none pl-4 placeholder:text-gris' />
                </div>
            </div>

        </div>
    )
}
