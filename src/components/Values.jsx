import React from 'react'
import valeurs from '../assets/images/valeurs.png'
import green_blob from '../assets/svgs/green_blob.svg'
import spark from '../assets/svgs/spark.svg'

export const Values = () => {
    return (
        <div className="flex flex-col mt-28  items-center" id='values'>
            <div className="relative">
                <div className="absolute bottom-1 -left-11">
                    <img src={spark} alt="" />
                </div>
                <div className="absolute h-full w-full mt-96 left-1/3">
                    <img src={green_blob} alt="" />
                </div>
                <div className="header md:text-5xl sm:text-4xl text-3xl">Nos valeurs</div>
            </div>
            <div className="mt-12">
                <img src={valeurs} alt="" />
            </div>
        </div>
    )
}
