import React, { useEffect } from 'react'
import img6 from '../assets/images/7.png'
import img4 from '../assets/images/4.png'
import red_blob from '../assets/svgs/red_blob.svg'
import two_green_stars from '../assets/svgs/two_green_stars.svg'
import { AuthenticatedNavbar } from '../components/nav/AuthenticatedNavbar'
import { Sidebar } from '../components/nav/Sidebar'
import { SmallScreenNav } from '../components/nav/SmallScreenNav'
import { ChannelBanner } from '../components/ChannelBanner'
import { Podcast } from '../components/Podcast'
import { Seperator } from '../components/Seperator'
import { useOpen } from '../store/store'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { decode } from '../jwt/jwt'
import { PodBanner } from '../components/PodBanner'


export const ChannelPage = () => {
  const open = useOpen((state) => state.open)
  const navigate = useNavigate()
  const [cookies] = useCookies(['oss9oli']);
  const user = decode(cookies.oss9oli)
  useEffect(() => {
    if (Object.entries(cookies).length === 0) {
      navigate("/auth")
    }
  }, [])

  return (
    <div className='flex flex-col realtive z-50 h-full'>
      <AuthenticatedNavbar />
      <Seperator mt={0} />
      <div className='absolute right-0 top-32  '>
        <img src={red_blob} alt="" className='' />
      </div>

      <div className='flex z-40'>
        {open && <div className='lg:flex hidden'>
          <Sidebar selected={"channel"} />
        </div>}
        {open && <div className='flex lg:hidden absolute top-0 z-50'>
          <SmallScreenNav selected={"channel"} />
        </div>}
        <div className=' flex flex-col  w-full'>
          <ChannelBanner name={"Elhiwar Ettounsi"} img={img6} />
          <div className='px-20 sm:mt-80 mt-[500px] flex justify-between'>
            <span className='text-4xl'>
              Derniers sons
            </span>
            <span className='text-ka7ouli underline underline-offset-8 sm:text-lg'>
              Voir plus {'>'}
            </span>
          </div>
          <div className='px-20 mt-6'>
            <Podcast
              podcastId="asdsd"
              img={{
                data: img4.toString('base64'),
                contentType: "image/png"
              }}
              creator={"Elhiwar Ettounsi"}
              title={"asdasdasds"}
              duration={200}
              description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quis consectetur fuga recusandae odit iste fugit soluta nisi iusto amet impedit velit dolor obcaecati tenetur ratione, earum ea. Aliquid, quam!Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloremque consectetur illum, enim veritatis laborum reprehenderit laudantium optio nisi.Nihil laborum ex ea veniam dolores neque doloribus eos ducimus odio illum."} status={"actif"} guest={"guest name"}
              listens={100}
              number={1}
              w={"w-full"} h={"sm:h-96"} />
          </div>

          <div className='px-20 mt-24 flex justify-between'>
            <span className='text-4xl'>
              Podcasts
            </span>
            <span className='text-ka7ouli underline underline-offset-8 sm:text-lg'>
              Voir plus {'>'}
            </span>
          </div>

          <div className='px-20 mt-6'>
            <PodBanner />
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
        </div>
      </div>


    </div>
  )
}
