import React from 'react'
import spark from '../assets/svgs/spark.svg'
import green_blob from '../assets/svgs/green_blob.svg'
import valeurs from '../assets/images/valeurs.png'

export const Values = () => {
    return (
        <div className="flex flex-col mt-28 px-12 items-center">
            <div className="relative">
                <div className="absolute bottom-1 -left-11">
                    <img src={spark} alt="" />
                </div>
                <div className="absolute h-96 w-96 mt-96 left-1/3">
                    <img src={green_blob} alt="" />
                </div>
                <div className="header text-5xl">Nos valeurs</div>
            </div>
            <div className="mt-12">
                <img src={valeurs} alt="" />
            </div>
        </div>
    )
}
