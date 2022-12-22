import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { JoinButton } from './buttons/JoinButton'

export const Vote = ({ name, question, options, img, userId, postId }) => {
    const [result, setResult] = useState([]);
    const [totalUsers, setTotal] = useState(0);
    const colors = [
        "orng",
        "azreg",
        "akhdher",
        "asfer",
        "a7mer",
        "ka7ouli",
    ]
    const Voter = (option) => {
        axios.post(`${process.env.REACT_APP_POST_SERVICE}/api/v1/votes`, { userId, postId, optionSelected: option }).then(res => {
            if (res.data.success) {
                setResult(res.data.data.options)
                console.log(res.data.data.options)
                let total = 0;
                for (let option of res.data.data.options) {
                    total += option.users.length
                }
                setTotal(total);
            }
        }).catch(err => console.error(err))
    }
    const randomColor = () => {
        const index = Math.floor(Math.random() * colors.length)
        console.log(index)
        return colors[index]
    }
    return (
        <div className='flex xl:w-2/3'>
            <div className='relative z-50'>
                <div className='h-20 w-20 border border-black rounded-full bg-white flex items-center justify-center'>
                    <img src={`https://avatars.dicebear.com/api/croodles/${img}.svg`} alt="" />
                </div>
                <div className='h-20 w-20 absolute rounded-full border border-black top-1 left-1 -z-10'>

                </div>
            </div>
            <div className='flex flex-col w-full pl-5'>
                <span className='leading-tight'>
                    {name} <br />
                    <span className='text-gray-500 text-sm'>
                        a publié un vote
                    </span>
                </span>
                <span className='lg:text-3xl sm:text-xl text-lg p-4 flex justify-center'>
                    <span>
                        {question}
                    </span>
                </span>
                {
                    result.length > 0 ?
                        <div className="mx-16 h-6 rounded-[300px] flex border-t border-b border-l border-black" style={{ height: "50px" }}>
                            {result.map((option, index) => (option.users.length * 100 / totalUsers) > 1 ?
                                <div className={`h-6 bg-${randomColor()} rounded-[300px] border-r border-black p-2 text-white text-center font-medium`} style={{ width: (option.users.length * 100 / totalUsers) + "%", height: "48px" }}>{Math.round(option.users.length * 100 / totalUsers)}% {option.option}</div>
                                : <></>
                            )}
                        </div>

                        :
                        <div className='flex sm:flex-row flex-col justify-center items-center sm:space-x-4 space-x-0 sm:space-y-0 space-y-4'>
                            {options.map((option) => (
                                <div onClick={() => Voter(option.option)}>
                                    <JoinButton
                                        cd1={"relative z-50"}
                                        cd2={"text-white sm:text-2xl text-lg bg-gris rounded-full py-3 px-16 text-center  border border-black z-40 transition duration-150 hover:-translate-x-1 hover:translate-y-1"}
                                        cd3={"border border-black rounded-full  py-3 px-16 absolute right-1 top-1 -z-20 w-full sm:text-2xl text-lg"}
                                        data={option.option}
                                    />
                                </div>
                            ))}

                        </div>
                }

            </div>

        </div>
    )
}
