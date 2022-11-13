import React from 'react'
import { Link } from 'react-router-dom'

export const JoinButton = ({ cd1, cd2, cd3, data, to, func}) => {
    return (
        <div className={cd1}>
            
                <div
                    className={cd2}
                    onClick={func}
                >
                    {data}
                </div>
                <div
                    className={cd3}
                >
                    <span className="invisible"> {data} </span>
                </div>
        </div>
    )
}
