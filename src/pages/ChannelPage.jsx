import React, { useEffect, useState } from 'react'
import red_blob from '../assets/svgs/red_blob.svg'
import two_green_stars from '../assets/svgs/two_green_stars.svg'
import { AuthenticatedNavbar } from '../components/nav/AuthenticatedNavbar'
import { Sidebar } from '../components/nav/Sidebar'
import { SmallScreenNav } from '../components/nav/SmallScreenNav'
import { ChannelBanner } from '../components/ChannelBanner'
import { useOpen } from '../store/store'
import { useCookies } from 'react-cookie'
import { useNavigate, useParams } from 'react-router-dom'
import { PodBanner } from '../components/PodBanner'
import axios from 'axios'
import { useAnimation } from '../hooks/useAnimation'



export const ChannelPage = () => {
  const open = useOpen((state) => state.open)
  const [channel, setChannel] = useState({})
  const [channelPods, setChannelPods] = useState([])
  const navigate = useNavigate()
  const { id } = useParams()
  const [cookies] = useCookies(['oss9oli']);
  const { props, a } = useAnimation();
  useEffect(() => {
    if (Object.entries(cookies).length === 0) {
      navigate("/auth")
    }
    // make sure the id is a valid mongodb id
    if (id.length !== 24 || !id.match(/^[0-9a-fA-F]{24}$/)) {
      navigate("/accueil")
    } else {
      // get the channel
      const getChannel = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_PODCAST_SERVICE}/api/v1/channels/${id}`)
          setChannel(response.data.data)
        }
        catch (err) {
          console.log(err)
          navigate("/accueil")
        }
      }
      const getChannelPods = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_PODCAST_SERVICE}/api/v1/podcasts/channel/${id}`)
          setChannelPods(response.data.data)
        }
        catch (err) {
          console.log(err)
        }
      }
      getChannel()
      getChannelPods()
    }
  }, [])

  return (
    <div className='flex flex-col realtive z-50 h-full'>
      <AuthenticatedNavbar />
      <div className='absolute right-0 top-32  '>
        <img src={red_blob} alt="" className='' />
      </div>

      <div className='flex z-40'>
        <div>
          {open && <div className='lg:flex hidden sticky top-24'>
            <Sidebar selected={"channel"} />
          </div>}
        </div>
        {open && <div className='flex lg:hidden absolute top-0 z-50'>
          <SmallScreenNav selected={"channel"} />
        </div>}
        <a.div
          style={props}
          className=' flex flex-col  w-full'>
          <ChannelBanner name={channel.name} img={channel.image} desc={channel.description} />


          <div className='px-20 mt-56 flex justify-between'>
            <span className='text-4xl'>
              Podcasts
            </span>
            <span className='text-ka7ouli underline underline-offset-8 sm:text-lg invisible'>
              Voir plus {'>'}
            </span>
          </div>

          <div className='px-20 mt-6 flex flex-col space-y-8'>
            {
              channelPods.map((pod, index) => {
                return <div key={index}>
                  <PodBanner
                    podcastId={pod._id}
                    name={pod.name}
                    img={pod.image}
                    desc={pod.description}
                    listEps={true}
                  />
                </div>
              })
            }
          </div>
          <div className='z-50 w-full relative px-20 mt-24 pb-16 '>
            <div className='border border-black bg-white p-6 flex flex-col rounded-3xl h-96 w-full'>

              <span className='text-4xl'>Tags</span>
              <div className='mt-12 flex p-2 flex-wrap lg:flex-col overflow-scroll'>
                <div className='p-3'>
                  <span className='bg-akhdher px-8 py-3 rounded-full border border-black text-white text-lg flex items-center justify-between space-x-4 w-44'>
                    <span>Féminité</span><span className='text-base'>x</span>
                  </span>
                </div>
                <div className='p-3'>
                  <span className='bg-asfer2 px-8 py-3 w-44 rounded-full border border-black text-white text-lg flex items-center justify-between space-x-4'>
                    <span>Culture</span><span className='text-base'>x</span>
                  </span>
                </div>
                <div className='p-3'>
                  <span className='bg-azreg2 px-8 py-3 rounded-full border border-black text-white text-lg flex items-center justify-between space-x-4 w-44'>
                    <span>Art</span><span className='text-base'>x</span>
                  </span>
                </div>
                <div className='p-3'>
                  <span className='bg-orng2 px-8 py-3 rounded-full border border-black text-white text-lg flex items-center justify-between space-x-4 w-44'>
                    <span>Société</span><span className='text-base'>x</span>
                  </span>
                </div>
                <div className='p-3'>
                  <span className='bg-akhdher2 px-8 py-3 rounded-full border border-black text-white text-lg flex items-center justify-between space-x-4 w-44'>
                    <span>Economie</span><span className='text-base'>x</span>
                  </span>
                </div>
              </div>
            </div>
            <div className='absolute bottom-6 right-6 md:flex hidden'>
              <img src={two_green_stars} alt="" />
            </div>
          </div>
        </a.div>
      </div>


    </div>
  )
}
