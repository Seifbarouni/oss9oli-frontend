import React from 'react'

export const JoinButton = ({ cd1, cd2, cd3, data }) => {
    return (
        <div className={cd1}>
            <div
                className={cd2}
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
