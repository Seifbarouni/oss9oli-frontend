import React from 'react'
import pinkHeartPNG from '../assets/images/pinkheart.png'
import blackHeartPNG from '../assets/images/blackheart.png'
import commentPNG from '../assets/images/comment.png'
import { useEffect } from 'react'
import { useState } from 'react'
import { decode } from '../jwt/jwt'
import { useCookies } from 'react-cookie'
import axios from 'axios'

export const Post = ({ postId, name, data, img, likes, comments }) => {
    const [liked, setLiked] = useState(false)
    const [likess, setLikes] = useState(likes)
    const [comment, setComment] = useState("")
    const [coms, setComs] = useState([])
    const [showComm, setShowComm] = useState(false)
    const [cookies] = useCookies(['oss9oli']);
    const {userId, avatar} = (decode(cookies.oss9oli))

    useEffect(()=>{
        
        let tempLikes = likes.filter((id)=>{
            return id == userId
        })
        setLiked(tempLikes.length)
        
    },[])

    const like = ()=>{
        axios.put(`${process.env.REACT_APP_POST_SERVICE}/api/v1/likes/${postId}`, {},
        {headers: { Authorization: `Bearer ${cookies.oss9oli}` }}).then(res=>{
            if(res.data.success){
                setLikes(res.data.data);
                setLiked(res.data.data.includes(userId))
            }
        }).catch(err=>console.log(err))
    }

    const sendComment = e =>{
        if (e.key === 'Enter' || e.keyCode === 13) {
            axios.post(`${process.env.REACT_APP_POST_SERVICE}/api/v1/comments`, {
                comment: comment,
                postId: postId
            }, 
            { headers: { Authorization: `Bearer ${cookies.oss9oli}` }}).then(res=>{
                if(res.data.success){
                    setComs([...coms, res.data.data])
                    setComment("")
                }
            }).catch(err=>console.log(err))
        }
    }

    const showComms = ()=>{
        if(!showComm){
            axios.get(`${process.env.REACT_APP_POST_SERVICE}/api/v1/comments/${postId}`).then(res=>{
                if(res.data.success){
                    setComs(res.data.data)
                }
            }).catch(err=>{
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
                    <img src={img} alt="" />
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
                <span className='lg:text-xl text-lg p-4 flex justify-center h-44 overflow-y-scroll'>
                    <span>
                        {data}
                    </span>
                </span>
                <div className='flex items-center '>
                    <img src={liked?pinkHeartPNG: blackHeartPNG}  onClick={like} /> 
                    {likess.length}
                    <img src={commentPNG} /> {comments.length}
                </div>
                <div>
                    <div onClick={showComms}>
                    {showComm?<p>hide comments</p>: <p>see comments </p>}
                    </div>
                    {
                        coms.map((comment)=>(
                            <div className='flex items-center w-full p-1 rounded-3xl border border-black bg-white mt-2'>
                                <div className='h-12 w-12 border border-black rounded-full bg-white flex items-center justify-center'>
                                    <img src={avatar} alt="" />
                                </div>
                                <div >
                                    <p>{comment.userId.name}</p>
                                    <p>{comment.comment}</p>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
                <div className='flex items-center w-full p-1 rounded-3xl border border-black bg-white mt-2'>
                    <div className='h-12 w-12 border border-black rounded-full bg-white flex items-center justify-center'>
                        <img src={avatar} alt="" />
                    </div>
                    <input type="text" value={comment} onKeyDown={sendComment} onChange={e=>setComment(e.target.value)} placeholder="Qu'est ce que vous en pensez?" className='w-full focus:outline-none pl-4 placeholder:text-gris' />
                </div>
            </div>

        </div>
    )
}
