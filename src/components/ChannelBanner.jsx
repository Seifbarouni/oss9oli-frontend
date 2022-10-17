import React from 'react'
import person from '../assets/svgs/person.svg'

export const ChannelBanner = ({ name, img }) => {
    return (
        <div className='p-6 bg-cover bg-center h-96 px-16 z-30 relative flex'
            style={
                {
                    backgroundImage: `url(${img})`,
                }
            }
        >
            <div className='bg-black  absolute opacity-20 z-30 top-0 left-0 h-96 w-full'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque laudantium necessitatibus itaque dolor, alias minima eligendi tenetur molestiae est! Aspernatur aliquid nisi eius ea quod sint unde facilis ducimus culpa.
            </div>
            <div className='mt-56 flex sm:flex-row flex-col top-64  h-96 z-50 '>
                <div className=''>
                    <div className='border border-black bg-white rounded-full h-52 w-52 relative flex  justify-center items-center'>
                        <div className='border border-black bg-orng rounded-full h-52 w-52 absolute top-1 left-1 -z-20'>
                        </div>
                        <img src={person} alt="" className='h-24 w-24' />
                    </div>
                </div>
                <div className='flex flex-col sm:ml-28 ml-0 mt-11 space-y-2'>
                    <span className='text-lg text-gray-800'>Chaine</span>
                    <span className='text-5xl font-black '>{name}</span>
                    <span className='text-lg text-gray-800'>1 podcasts - 8 sons </span>
                    <span className='w-5/6 overflow-y-scroll h-44'>
                        Après le repérage des insectes, voici pour la première fois au micro, des enregistrements de leur langage. Entre cliquetis de mandibules et stridulations de gastres hypertrophiés...
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eligendi, cupiditate laboriosam fugiat ex dolorem facere aut molestiae veritatis maiores aliquam suscipit mollitia provident id consequuntur. Error vero cupiditate impedit?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde pariatur sunt repellendus fuga ipsa dolorum similique magnam! Illo, itaque. Quas incidunt repudiandae eius quod debitis rerum? Esse suscipit odio placeat.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ex qui assumenda commodi. Culpa vitae suscipit repellendus amet provident impedit corporis? Deleniti, dolor? Ipsum vel expedita eaque sequi modi! Iste.
                    </span>
                </div>
            </div>


        </div>
    )
}
