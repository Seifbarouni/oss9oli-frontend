import React, { useEffect } from 'react'
import img6 from '../assets/images/7.png'
import red_blob from '../assets/svgs/red_blob.svg'
import { AuthenticatedNavbar } from '../components/nav/AuthenticatedNavbar'
import { Sidebar } from '../components/nav/Sidebar'
import { SmallScreenNav } from '../components/nav/SmallScreenNav'
import { ChannelBanner } from '../components/ChannelBanner'
import { Seperator } from '../components/Seperator'
import { useOpen } from '../store/store'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { decode } from '../jwt/jwt'


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
        <div className=' flex flex-col flex-grow w-full'>
          <ChannelBanner name={"Elhiwar Ettounsi"} img={img6} />
        </div>
      </div>

    </div>
  )
}
